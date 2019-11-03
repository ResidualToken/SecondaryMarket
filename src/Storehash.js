
import web3 from './Web3';

//Your contract address

const address = '0xD9F0F7A8aB3fC4aeD8e749c80568a11E99df0a5e';

//Your contract ABI

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"name": "setHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"internalType": "string",
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

export default new web3.eth.Contract(abi, address);