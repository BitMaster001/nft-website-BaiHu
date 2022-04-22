import Head from "next/head";
import Menu from "components/Menu";

export default function Layout({ children }) {

  return (
    <div className="mx-auto max-w-[1440px]">
      <Head>
        
      </Head>
      <Menu />
      <main className="mobile:mt-[71px] ipad:mt-[91px]">{children}</main>
    </div>
  );
}
