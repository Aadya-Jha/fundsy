export const contractABI = [
  // Other ABI elements
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "campaign",
        "type": "address"
      },
      {
        "name": "success",
        "type": "bool"
      },
      {
        "name": "timestamp",
        "type": "uint256"
      },
      {
        "name": "txHash",
        "type": "bytes32"
      }
    ],
    "name": "TransactionLogged",
    "type": "event"
  },
  // Other ABI elements
];
