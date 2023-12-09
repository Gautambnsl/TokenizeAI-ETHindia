import { ethers } from "ethers";
import detectEthereumProvider from "@metamask/detect-provider";

export async function connectWallet() {
    try {
        const Provider = await detectEthereumProvider();
        if (Provider) {
            const provider = new ethers.providers.Web3Provider(Provider, "any");
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            return { success: true, provider };
        } else {
            return { success: false, msg: "Please install Metamask wallet!" };
        }
    } catch (err) {
        return { success: false, msg: "Trouble connecting wallet!" };
    }
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