import { RequestNetwork, Types } from "@requestnetwork/request-client.js";
import { ethers } from "ethers";

const requestClient = new RequestNetwork({
  nodeConnectionConfig: {
    baseURL: "https://sepolia.gateway.request.network/",
  },
});
const requestClient2 = new RequestNetwork({
  nodeConnectionConfig: {
    baseURL: "https://gnosis.gateway.request.network/",
  },
});

const identityAddress ="0x828cCc45007EFC1c1d1c221c279B5ac8a7C85592";
async function fetchRequests() {
  const requests = await requestClient.fromIdentity({
    type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    value: identityAddress,
  });
  const requests2 = await requestClient2.fromIdentity({
    type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    value: identityAddress,
  });
  return { requests, requests2 };
}

let transactions = [];

async function initialize() {
  const { requests, requests2 } = await fetchRequests();

  const requestDatas = requests.map((request) => request.getData());
  const requestDatas2 = requests2.map((request) => request.getData());

  const last_5_transactions = requestDatas2.slice(Math.max(requestDatas2.length - 5, 0));

  transactions = last_5_transactions.map((transaction) => {
    const name = transaction.contentData.invoiceItems[0].name;
    const walletAddress = transaction.contentData.payee;
    const amount = transaction.miscellaneous.amountInUSD;
    return { name, walletAddress, amount };
  });
}

initialize().catch(console.error);

export { transactions };