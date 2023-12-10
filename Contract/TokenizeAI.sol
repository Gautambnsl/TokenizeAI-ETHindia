// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./contracts/adhar/IAnonAadhaarVerifier.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenizeAI is Ownable {
    mapping(address => uint256) public userPendingCallValue;
    IERC20 public token;
    address public anonAadhaarVerifierAddr;

    constructor(address _tokenAddress, address _add) {
        token = IERC20(_tokenAddress);
        anonAadhaarVerifierAddr = _add;
    }


    function buy20Calls() external {
        buyTokens(20, 200000);
    }

    function buy50Calls() external {
        buyTokens(50, 400000);
    }

    function buy120Calls() external {
        buyTokens(140, 1000000);
    }

    function withdrawAll() external onlyOwner {
        uint256 contractBalance = token.balanceOf(address(this));
        require(contractBalance > 0, "Contract has no balance");
        require(token.transfer(owner(), contractBalance), "Token transfer failed");
    }

    function buyTokens(uint256 numberOfTokens, uint256 amount) internal {
        require(numberOfTokens > 0, "Number of tokens must be greater than 0");
        require(amount > 0, "Amount must be greater than 0");
        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

        // Map the corresponding uint value to the sender's address
        userPendingCallValue[msg.sender] += numberOfTokens;
    }

    function useToken() external returns (bool) {
        // Ensure the user has a positive int value
        require(userPendingCallValue[msg.sender] > 0, "Insufficient int value");

        // Decrement the int value by 1
        userPendingCallValue[msg.sender]--;

        // Perform some action with the token if needed
        // For example, transfer the token to another address, or perform some other logic

        // Return true
        return true;
    }

    function verify(uint256[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) public view returns (bool) {
        return IAnonAadhaarVerifier(anonAadhaarVerifierAddr).verifyProof(_pA, _pB, _pC, _pubSignals);
    }

    function getFreeCall(uint256[2] calldata _pA, uint[2][2] calldata _pB, uint[2] calldata _pC, uint[34] calldata _pubSignals) external {
        require(verify(_pA, _pB, _pC, _pubSignals), "Your identity proof is not valid");
        userPendingCallValue[msg.sender] += 10;
    }
}
