pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract Contract
 { 
     
    struct LoanPool {
        address owner;
        string ipfsHash;
        uint256  postDate ;
    }
    
    LoanPool[] public loanPools;
    

    function addLoanPool( string memory ipfsHash, address owner) 
    
    public {   
        
        LoanPool memory loanPool;
        loanPool.owner = owner;
        loanPool.ipfsHash = ipfsHash;
        loanPool.postDate = now;
        loanPools.push(loanPool);
    }
    
   function getLoanPools() public view returns(LoanPool[] memory) {
        return loanPools;
    }

}