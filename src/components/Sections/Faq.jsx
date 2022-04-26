import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  resetNextUuid,
} from "react-accessible-accordion";

import * as gs from "assets/Global.Components";

const data = [
  {
    question: "Total Supply Of Genesis Collection?",
    answer: "Total Supply Of Genesis Collection is 500"
  },
  {
    question: "Mint Price Of Genesis Collection?",
    answer: (
      <>
        <p>– 0.04 ETH + Gas Fees For OG WL</p>
        <p>– 0.06 ETH + Gas Fees For Public</p>
      </>
    )
  },
  {
    question: "Smart Contract?",
    answer: "– ERC721A To Save Gas If You will mint more than one."
  },
  {
    question: "Team Behind This Project?",
    answer: "Highly Professional and Passionate Team That is Only Trying Their Best To Build A Strong Community. Been Doing Research For Past 3 Months On Different Projects. That’s Why Baihu is The Future."
  },
  {
    question: "Perks Of Baihu Genesis Holder?",
    answer: (
      <>
        <p>– The Holder Of Baihu Genesis NFT Will Be Able to Mint Baihu from the Official Collection for free.</p>
        <p>– 1/1 Legendary NFT will be For One Of The Luckiest Genesis Holder From Official Collection</p>
        <p>– Exclusive Merch For All Genesis Holders</p>
        <p>– Mega Giveaways For Baihu Genesis Holders</p>
        <p>– Special Inner Circle For Genesis Holders With Entrepreneurs and Investors</p>
        <p>– Utilities Of Every Trait</p>
      </>
    )
  },
  {
    question: "Baihu Genesis Launch Date?",
    answer: "TBD"
  }
]

const Faq = () => {
  resetNextUuid()
  return (
    <gs.SectionWrapper id="faq">
      <gs.SectionTitle>FAQ</gs.SectionTitle>
      <Accordion allowZeroExpanded={true}>
        {data.map((it, index) => (
          <AccordionItem key={index} uuid={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                {it.question}
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                {it.answer}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </gs.SectionWrapper>
  );
};

export default Faq;
