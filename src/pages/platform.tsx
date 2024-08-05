import WithLayout from "@/common/WithLayout";
import { PAGE_PROPS } from "@/constants";
import Main from "@/layouts/Main";
import PlatformView from "@/views/platform/Platform";
import Head from "next/head";

export default function PlatformPage() {
  const pageProps = PAGE_PROPS.platform;

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content={pageProps.description} />
        <meta name="keywords" content={pageProps.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WithLayout component={PlatformView} layout={Main} />
    </>
  );
}
