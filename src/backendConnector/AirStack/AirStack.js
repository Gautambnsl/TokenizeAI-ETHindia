import { useGetTokenBalances } from "@airstack/airstack-react";

export const [fetchData, { data, loading, pagination }] = useGetTokenBalances({
  identitity: "vitalik.eth",
  tokenType: ["ERC20", "ERC721", "ERC1155"],
  blockchain: "ethereum",
  limit: 200
});