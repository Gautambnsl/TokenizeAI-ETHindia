import { AnonAadhaarProvider } from "anon-aadhaar-react";
import '../styles/globals.css';

export default function App({ Component, pageProps }) {

  const app_id = 1
  return (
    <>
      <AnonAadhaarProvider _appId={app_id}>
        <Component {...pageProps} />
      </AnonAadhaarProvider>
    </>
  );
}
