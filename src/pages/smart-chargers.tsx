import WithLayout from "@/common/WithLayout";
import { PAGE_PROPS } from "@/constants";
import Main from "@/layouts/Main";
import SmartChargersView from "@/views/smart-chargers/SmartChargers";
import Head from "next/head";

export default function SmartChargersPage() {
  const pageProps = PAGE_PROPS.chargers;

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.description} />
        <meta name="keywords" content={pageProps.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithLayout component={SmartChargersView} layout={Main} />
    </>
  );
}
