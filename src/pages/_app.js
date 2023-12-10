import { AnonAadhaarProvider } from 'anon-aadhaar-react';
import '../styles/globals.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { XMTPProvider } from '@xmtp/react-sdk';
import { AirstackProvider } from '@airstack/airstack-react';

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://api.airstack.xyz/gql',
    cache: new InMemoryCache(),
  });

  const app_id = '609246576999142755181287323616835836365844250624';
  return (
    <>
      <ApolloProvider client={client}>
        <AirstackProvider apiKey={'1b33a36e9898e4fc7a2b9731002461150'}>
          <XMTPProvider>
            <AnonAadhaarProvider _appId={app_id}>
              <Component {...pageProps} />
            </AnonAadhaarProvider>
          </XMTPProvider>
        </AirstackProvider>
      </ApolloProvider>
    </>
  );
}
