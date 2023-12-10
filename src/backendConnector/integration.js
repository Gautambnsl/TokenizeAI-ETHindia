// Helper

import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from 'ethers';
import data from './data';
import { coreAbi } from './abi/coreAbi';
import { tokenAbi } from './abi/tokenAbi';
import { erc20Abi } from './abi/erc20Abi';

export async function getNetwork() {
  const chainId = Number(
    await window.ethereum.request({ method: 'eth_chainId' })
  );
  return chainId;
}

export async function getRPC() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.rpcUrl;
}

export async function getAddress() {
  const provider = await detectEthereumProvider();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  await delay(500);
  if (provider && provider.selectedAddress) {
    return provider.selectedAddress;
  } else {
    return;
  }
}

export async function getSigner() {
  let address = await getAddress();
  const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
  if (provider && address) {
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    return signer;
  } else {
    return;
  }
}

export async function getTokenAddress() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.tokenAddress;
}

export async function getCoreAddress() {
  const chainId = await getNetwork();
  return data?.[0][parseInt(chainId)]?.coreContract;
}

export async function getProvider() {
  const rpc = await getRPC();
  const provider = new ethers.providers.JsonRpcProvider(rpc);
  return provider;
}

// Read

export async function getCallAvailable() {
  try {
    const rpc = await getRPC();
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    let contractAddress = await getCoreAddress();
    const contract = new ethers.Contract(contractAddress, coreAbi, provider);
    let userAddress = await getAddress();
    let data = await contract.userPendingCallValue(userAddress);
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

// export async function getTokenAbi() {
//   try {
//     const rpc = await getRPC();
//     const provider = new ethers.providers.JsonRpcProvider(rpc);
//     let contractAddress = await getCoreAddress();
//     const contract = new ethers.Contract(contractAddress, tokenAbi, provider);
//     let data = await contract.rate('0');
//     return data.toString();
//   } catch (err) {
//     return { status: false, err };
//   }
// }

// Write

export async function claimFreeCalls(_pa, _pb, _pc, Input) {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const coreContractAddress = await getCoreAddress();
    const contract = new ethers.Contract(coreContractAddress, coreAbi, signer);
    let data = await contract.getFreeCall(_pa, _pb, _pc, Input);
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

export async function buy20CallsFunction() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const coreContractAddress = await getCoreAddress();
    const erc20ContractAddress = await getTokenAddress();
    const contract = new ethers.Contract(coreContractAddress, coreAbi, signer);
    const erc = new ethers.Contract(
      erc20ContractAddress,
      erc20Abi,
      signer
    );
    await erc.approve(coreContractAddress, '1000000');
    let data = await contract.buy20Calls();
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

export async function buy50CallsFunction() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const coreContractAddress = await getCoreAddress();
    const erc20ContractAddress = await getTokenAddress();
    const contract = new ethers.Contract(coreContractAddress, coreAbi, signer);
    const erc = new ethers.Contract(
      erc20ContractAddress,
      erc20Abi,
      signer
    );
    await erc.approve(coreContractAddress, '1000000');
    let data = await contract.buy50Calls();
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

export async function buy140CallsFunction() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const coreContractAddress = await getCoreAddress();
    const erc20ContractAddress = await getTokenAddress();
    const contract = new ethers.Contract(coreContractAddress, coreAbi, signer);
    const erc = new ethers.Contract(
      erc20ContractAddress,
      erc20Abi,
      signer
    );
    await erc.approve(coreContractAddress, '1000000');
    let data = await contract.buy120Calls();
    return data;
  } catch (err) {
    return { status: false, err };
  }
}

export async function useTokenFunction() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    await provider.send('eth_requestAccounts', []);
    const signer = provider.getSigner();
    const coreContractAddress = await getCoreAddress();
    const contract = new ethers.Contract(coreContractAddress, coreAbi, signer);
    let data = await contract.useToken();
    return data;
  } catch (err) {
    return { status: false, err };
  }
}
