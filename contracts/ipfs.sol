pragma solidity ^0.5.11;
pragma experimental ABIEncoderV2;

contract LoanSecondaryMarketing
 { 
     
    struct LoanPool {
        address owner;
        string ipfsHash;
        uint weightedCoupon;
        uint weightedTerm;
        uint256  postDate ;
    }
    
     mapping (uint => LoanPool) public loanPools;
     uint public loanPoolCount;
     
     event getLoanPoolsEVENT(LoanPool[] loanPools);
    
     constructor() public {
        loanPoolCount = 0;
     }

    function addLoanPool( string memory ipfsHash, address owner, uint weightedCoupon, uint weightedTerm) 
    
    public {   
        
        LoanPool memory loanPool;
        loanPool.owner = owner;
        loanPool.ipfsHash = ipfsHash;
        loanPool.postDate = now;
        loanPool.weightedCoupon = weightedCoupon;
        loanPool.weightedTerm = weightedTerm;
        loanPools[loanPoolCount] = loanPool;
        loanPoolCount++;
        
    }
    
// function returnLoanPools() public returns(LoanPool memory) {
//         return loanPools[0];
//     }

 function totalLoanPools() public view returns(uint) {
         return loanPoolCount;
     }
    
    
  function getLoanPools() public returns (LoanPool[] memory) {
      LoanPool[] memory loanPoolsToReturn = new LoanPool[](loanPoolCount);
      for (uint i = 0; i < loanPoolCount; i++) {
          LoanPool storage loanPool = loanPools[i];
          loanPoolsToReturn[i] = loanPool;
      }
      emit getLoanPoolsEVENT(loanPoolsToReturn);
      return loanPoolsToReturn;
  }

}