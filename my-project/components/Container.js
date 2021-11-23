import Head from "next/head";
import Navbar from "./Navbar";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const meta = {
    title: "Jacob Albrecht - Web-3 Dev",
    description: `Web-3 Developer and advocate. Python and Solidity`,
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Jacob Albrecht" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-black px-8 text-gray-900 dark:text-gray-100"
      >
        {children}
      </main>
    </div>
  );
}
