
import web3 from './Web3';

//Your contract address

const address = '0x04674B9e2B12E7269a43e5f9626d335e9A3C878f';

//Your contract ABI

const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "getLoanPools",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "weightedCoupon",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "weightedTerm",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "postDate",
						"type": "uint256"
					}
				],
				"internalType": "struct LoanSecondaryMarketing.LoanPool[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "loanPools",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "weightedCoupon",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "weightedTerm",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "postDate",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalLoanPools",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "ipfsHash",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "weightedCoupon",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "weightedTerm",
				"type": "uint256"
			}
		],
		"name": "addLoanPool",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "loanPoolCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "ipfsHash",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "weightedCoupon",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "weightedTerm",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "postDate",
						"type": "uint256"
					}
				],
				"indexed": false,
				"internalType": "struct LoanSecondaryMarketing.LoanPool[]",
				"name": "loanPools",
				"type": "tuple[]"
			}
		],
		"name": "getLoanPoolsEVENT",
		"type": "event"
	}
];

export default new web3.eth.Contract(abi, address);