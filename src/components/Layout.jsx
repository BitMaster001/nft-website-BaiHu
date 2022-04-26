import Head from "next/head";
import Menu from "components/Menu";

export default function Layout({ children }) {

  return (
    <div className="mx-auto max-w-[1440px]">
      <Head>
        <title>Baihu NFT</title>
      </Head>
      
      <main className="mobile:mt-[57px] ipad:mt-[80px]">
        <Menu />
        {children}
      </main>
    </div>
  );
}
