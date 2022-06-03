import { useState, useEffect } from 'react'
import Layout from "components/Layout";
import Home from "components/Sections/Home";
import About from "components/Sections/About";
import Roadmap from "components/Sections/Roadmap";
import Team from "components/Sections/Team";
import Faq from "components/Sections/Faq";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "redux/blockchain/blockchainActions";
import { fetchData } from "redux/data/dataActions";
import Image from "next/image";
import Modal from 'react-modal'

import * as s from '../pagestyles/index'

import imgCloseIcon from 'assets/images/close.png'
import imgSpinUp from 'assets/images/spin-up.png'
import imgSpinDown from 'assets/images/spin-down.png'

const truncate = (input) =>
  input?.length > 0 ? `${input.substring(0, 6)}...${input.substr(-4)}` : input;

const Index = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  const getData = async () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      const curTime = Date.now() / 1000
      const publicsaleStartTime = (new Date("Sat Jun 04 2022 12:00:00 GMT-0400").getTime()) / 1000;
      const weiCost = curTime < publicsaleStartTime
        ? 6 * 10 ** 16
        : 6 * 10 ** 16
      const displayCost = weiCost / 10 ** 18
      console.log('displayCost', displayCost)
      SET_CONFIG({
        ...CONFIG,
        "WEI_COST": weiCost,
        "DISPLAY_COST": displayCost
      })

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

    SET_CONFIG(config)
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <>
      <Layout>
        <Home openModal={openModal} />
        <About />
        <Roadmap />
        <Team />
        <Faq />
      </Layout>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        contentLabel="Example Modal"
        overlayClassName="fixed inset-0 bg-[#191919]/70"
        className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] mobile:w-[94%] tablet:w-[60%] border border-white/40 rounded-[40px] bg-[#0a0214] mobile:p-6 ipad:p-8"
      >
        <div className="flex justify-between items-center mb-4">
          <p className="text-[22px] font-bold">Mint Your BAIHU &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[18px] opacity-70">{truncate(blockchain.account) ?? ""}</span></p>
          <Image src={imgCloseIcon} width={16} height={16} layout="fixed" alt="" className="invert cursor-pointer" onClick={closeModal} />
        </div>

        <div className='pt-3'>
          <s.NumberBox>
            <span>{mintAmount}</span>
            <s.SpinContainer>
              <s.Spin onClick={() => incrementMintAmount()}>
                <Image
                  src={imgSpinUp}
                  layout="fill"
                  quality={100}
                  alt="spinup"
                />
              </s.Spin>
              <s.Spin onClick={() => decrementMintAmount()}>
                <Image
                  src={imgSpinDown}
                  layout="fill"
                  quality={100}
                  alt="spindown"
                />
              </s.Spin>
            </s.SpinContainer>
          </s.NumberBox>
          <s.StatisticsInfo>
            <span>Total Price:</span>
            <span className="text-[#F23319]">
              {CONFIG.DISPLAY_COST > 0 ? `${(CONFIG.DISPLAY_COST * mintAmount).toFixed(2)}ETH` : ""}
            </span>
          </s.StatisticsInfo>
          {/* 
            totalSupply / MaxSupply 
          */}
          <div className="text-center pb-4">
            {data.totalSupply} / {CONFIG.MAX_SUPPLY}
          </div>
          {/* 
            If totalSupply > maxSupply
              then show NFT name and MarketPlace Link
            Else
              Show Price of NFT, Gas Fee, Connect Wallet Button, blockchain errMsg, feedback
          */}
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <div className="pb-4">The sale has ended.</div>
          ) : (
            <>
              {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                <div className="flex flex-col justify-center items-center">
                  <div className="pb-4">Connect to the {CONFIG.NETWORK.NAME} network</div>
                  <button
                    className="px-2 py-1 rounded border border-white"
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
                  <div className="text-center pb-4">{feedback}</div>
                  <div className="grid place-content-center">
                    <button
                      className="px-6 py-1 rounded-full w-[200px] bg-[#16a716] border border-white/40 hover:bg-[#00FF00]"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      {claimingNft ? "Claiming NFT..." : "Mint"}
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </Modal>

      <style jsx global>{`        
        :root {
          --animate-duration: 3000ms;
          --animate-delay: 1s;
        }
        .ReactModal__Overlay {
          opacity: 0;
          transition: opacity 200ms ease-in-out;
        }
        
        .ReactModal__Overlay--after-open{
          opacity: 1;
        }
        
        .ReactModal__Overlay--before-close{
          opacity: 0;
        }
      `}</style>
    </>
  );
};

export default Index;
