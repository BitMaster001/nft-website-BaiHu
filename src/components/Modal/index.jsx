import Image from "next/image";
import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";

const S = {
  Overlay: tw.div`
    fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-[1000]
  `,
  Container: tw.div`
    relative mx-4 bg-yellow rounded-md shadow-md

    mobile:w-[380px]

    ipad:w-[800px]
    ipad:h-[420px]
  `,
  CloseIconContainer: tw.div`
    absolute top-1 right-1 cursor-pointer w-[16px] h-[16px] z-[1001]
  `,
  ImageContainer: tw.div`
    mobile:static
    mobile:w-[320px]
    mobile:h-[320px]
    mobile:relative

    ipad:absolute ipad:left-0 ipad:top-0 ipad:w-[420px] ipad:h-[420px]
  `,
  ModalBody: tw.div`
    w-full relative

    mobile:flex 
    mobile:flex-col-reverse
    mobile:items-center
    
    ipad:block
  `,
  MintArea: tw.div`
    flex flex-col justify-center items-center
    
    mobile:mx-auto
    mobile:w-[380px]
    mobile:float-none

    ipad:w-[440px] 
    ipad:float-right
  `,
  NumberBox: tw.div`
    flex justify-between items-center rounded-md border-2 border-[#040404] font-bold
    
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

const Modal = ({ showModal, setShowModal }) => {
  const [tokenPrice, setTokenPrice] = useState(0.76);
  const [amount, setAmount] = useState(1);

  return (
    <S.Overlay>
      <S.Container>
        <S.CloseIconContainer onClick={() => setShowModal(false)}>
          <Image src="/images/close.svg" layout="fill" alt="" />
        </S.CloseIconContainer>
        <S.ModalBody>
          <S.ImageContainer>
            <Image src={"/images/character-modal.png"} layout="fill" alt="" />
          </S.ImageContainer>
          <S.MintArea>
            <div className="w-1 mobile:h-[30px] ipad:h-[60px]"></div>
            <div className="mobile:text-[24px] ipad:text-[30px] text-[#F23319] font-extrabold uppercase">
              Claim Your Synthient
            </div>
            <div className="w-1 mobile:h-[30px] ipad:h-[60px]"></div>
            <div className="ipad:w-[380px]">
              <p className="text-[22px] font-bold">Number Of NFT To Mint</p>
              <S.NumberBox>
                <span>{amount}</span>
                <S.SpinContainer>
                  <S.Spin onClick={() => setAmount(amount + 1)}>
                    <Image
                      src="/images/spin-up.png"
                      layout="fill"
                      alt="spinup"
                    />
                  </S.Spin>
                  <S.Spin
                    onClick={() => (amount >= 2 ? setAmount(amount - 1) : null)}
                  >
                    <Image
                      src="/images/spin-down.png"
                      layout="fill"
                      alt="spindown"
                    />
                  </S.Spin>
                </S.SpinContainer>
              </S.NumberBox>
              <S.StatisticsInfo>
                <span>Total Price:</span>
                <span className="text-[#F23319]">
                  {(tokenPrice * amount).toFixed(2)}ETH
                </span>
              </S.StatisticsInfo>
              <S.ConnectButton>CONNECT</S.ConnectButton>
            </div>
          </S.MintArea>
        </S.ModalBody>
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;
