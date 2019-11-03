import Web3 from 'web3';


const rpcURL = "https://ropsten.infura.io/a03aad0cbce04ab498158709dc3389a3"

//const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/c74fcadbfd1d41dbb92ab65d76c552ec'))

console.log('window.web3.currentProvider', window.web3.currentProvider);



// var web3 = new Web3(new Web3.providers.HttpProvider(
//     'https://ropsten.infura.io/v3/f5b2812111f24db8aa7be8f638079e54'
// ));

const web3 = new Web3(window.web3.currentProvider);


export default web3;








