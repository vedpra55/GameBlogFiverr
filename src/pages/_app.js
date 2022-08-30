// Styles
import "../styles/globals.css";

// Components
import Layout from "../components/Layout/layout";
import { useEffect, useLayoutEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
