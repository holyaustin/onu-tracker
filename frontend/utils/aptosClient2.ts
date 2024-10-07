import { API_KEY, NETWORK2 } from "@/constants";
import { Aptos, AptosConfig } from "@aptos-labs/ts-sdk";

// NOTE: Set fullnode endpoint and indexer endpoint here
const aptos = new Aptos(
  new AptosConfig({
    network: NETWORK2,
    fullnode: `https://aptos-${NETWORK2}.nodit.io/${API_KEY}/v1`,
    indexer: `https://aptos-${NETWORK2}.nodit.io/${API_KEY}/v1/graphql`,
  }),
);

// Reuse same Aptos instance to utilize cookie based sticky routing
export function aptosClient() {
  return aptos;
}
