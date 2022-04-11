import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";
import Image from "next/image";
import tw from "tailwind-styled-components/dist/tailwind";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const s = {
  Container: tw.div`
    w-screen
    h-screen 
    bg-black
    p-2
    flex justify-center items-center
  `,
  Flex: tw.div`
    flex justify-center items-center

    mobile:w-full
    mobile:flex-col

    ipad:w-[1000px]
    ipad:flex-row
  `,
  FlexItem: tw.div`
    p-8

    mobile:w-full

    ipad:w-[500px]
  `,
  NumberBox: tw.div`
    flex justify-between items-center rounded-md border-2 border-white font-bold
    
    mobile:text-[20px]
    mobile:h-[40px] 
    mobile:px-3
    mobile:py-1 
    
    ipad:text-[24px]
    ipad:h-[46px] 
    ipad:px-4
    ipad:py-1 
  `,
  SpinContainer: tw.div`
    grid grid-flow-col grid-rows-2 gap-[6px]
  `,
  Spin: tw.div`
    relative w-[14px] h-[8px]
  `,
  StatisticsInfo: tw.div`
    flex justify-between my-2 font-bold
  `,
  ConnectButton: tw.div`
    bg-pentagon-black-long w-full imagebutton
    grid place-content-center
    text-yellow

    mobile:h-[50px]
    mobile:text-[24px]
    
    ipad:h-[60px]
    ipad:text-[24px]
  `,
};

const Index = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Container>
      <s.Flex>
        <s.FlexItem>
          <Image
            src="/images/bg-baihu.jpg"
            width={1920}
            height={1080}
            layout="responsive"
            alt=""
          />
        </s.FlexItem>
        <s.FlexItem>
          <div className="w-1 mobile:h-[30px] ipad:h-[60px]"></div>
          <div className="text-white">
            <p className="text-[22px] font-bold">Number Of NFT To Mint</p>
            <s.NumberBox>
              <span>{mintAmount}</span>
              <s.SpinContainer>
                <s.Spin onClick={() => incrementMintAmount()}>
                  <Image src="/images/spin-up.png" layout="fill" alt="spinup" />
                </s.Spin>
                <s.Spin onClick={() => decrementMintAmount()}>
                  <Image
                    src="/images/spin-down.png"
                    layout="fill"
                    alt="spindown"
                  />
                </s.Spin>
              </s.SpinContainer>
            </s.NumberBox>
            <s.StatisticsInfo>
              <span>Total Price:</span>
              <span className="text-[#F23319]">
                {(CONFIG.DISPLAY_COST * mintAmount).toFixed(2)}ETH
              </span>
            </s.StatisticsInfo>
            {/* 
              totalSupply / MaxSupply 
            */}
            <div className="text-center">
              {data.totalSupply} / {CONFIG.MAX_SUPPLY}
            </div>
            {/* 
              If totalSupply > maxSupply
                then show NFT name and MarketPlace Link
              Else
                Show Price of NFT, Gas Fee, Connect Wallet Button, blockchain errMsg, feedback
            */}
            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>The sale has ended.</>
            ) : (
              <>
                {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                  <div className="flex flex-col justify-center items-center">
                    <div>Connect to the {CONFIG.NETWORK.NAME} network</div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(connect());
                        getData();
                      }}
                    >
                      CONNECT
                    </button>
                    {blockchain.errorMsg !== "" ? (
                      <>{blockchain.errorMsg}</>
                    ) : null}
                  </div>
                ) : (
                  <>
                    <div>{feedback}</div>
                    <div className="grid place-content-center">
                      <button
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs();
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "BUY"}
                      </button>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </s.FlexItem>
      </s.Flex>
    </s.Container>
  );
};

export default Index;
