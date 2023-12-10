import { gql } from '@apollo/client';

const APP_EXPLORER_URL = 'https://app.airstack.xyz/api-studio';

function encode(string) {
  try {
    const _string = btoa(string);
    return _string;
  } catch {
    return string;
  }
}

export function createAppUrlWithQuery(query, _variables) {
  const compressedQuery = encode(query);
  const variables = _variables ? JSON.stringify(_variables) : '';
  const compressedVariables = variables ? encode(variables) : '';
  return `${APP_EXPLORER_URL}?autoRun=true&query=${compressedQuery}${
    variables ? `&variables=${compressedVariables}` : ''
  }`;
}

export const GET_USDC_DATA = gql`
  query GetUSDCData($_eq: Identity) {
    Polygon: TokenBalance(
      input: {
        blockchain: polygon
        owner: $_eq
        tokenAddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359"
      }
    ) {
      amount
      formattedAmount
      owner {
        addresses
      }
    }
  }
`;
