import axios from 'axios';
import Web3 from 'web3';

export async function createOrder(
  sdk,
  from,
  to,
  amount,
  walletAddress,
  preset
) {
  try {
    return await sdk.placeOrder({
      fromTokenAddress: from,
      toTokenAddress: to,
      amount: amount,
      walletAddress,
      preset,
    });
  } catch (e) {
    console.log(e);
    return undefined;
  }
}

export function getAddressFromPrivateKey(privateKey) {
  const web3 = new Web3();
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  return account.address;
}

export const getBalances = async () => {
  try {
    const response = await axios.get(
      `https://api.1inch.dev/balance/v1.2/1/balances/${address}`,
      {
        headers: { Authorization: 'Bearer 1FHEKGpxEJb1OlZYUwsQNLQZPqhhrsMx' },
      }
    );

    if (response.status === 200) {
      return response?.data;
    } else {
      console.error(
        `Failed to fetch token balances. Error code: ${response.status}`
      );
    }
  } catch (error) {
    console.error('Error fetching token balances:', error.message);
  }
};

export const swapAPI = async () => {
  try {
    const response = await axios.get(`https://api.1inch.dev/swap`, {
      headers: { Authorization: 'Bearer 1FHEKGpxEJb1OlZYUwsQNLQZPqhhrsMx' },
    });

    if (response.status === 200) {
      return response?.data;
    } else {
      console.error(
        `Failed to fetch token balances. Error code: ${response.status}`
      );
    }
  } catch (error) {
    console.error('Error fetching token balances:', error.message);
  }
};
