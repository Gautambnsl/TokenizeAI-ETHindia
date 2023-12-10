import { useClient } from '@xmtp/react-sdk';
import { useCallback } from 'react';

export const createClient = ({ signer }) => {
//   const { client, error, isLoading, initialize } = useClient();
console.log('signercreateClient', signer)

//   const handleConnect = useCallback(async () => {
//     await initialize({ signer });
//   }, [initialize]);

//   if (error) {
//     return 'An error occurred while initializing the client';
//   }

//   if (isLoading) {
//     return 'Awaiting signatures...';
//   }

//   if (!client) {
//     return (
//       <button type="button" onClick={handleConnect}>
//         Connect to XMTP
//       </button>
//     );
//   }

  return 'Connected to XMTP';
};
