pragma solidity >=0.7.0 <0.9.0;


contract PiggyBank {
    
    mapping(address => uint) balances;
    address payable public owner;
    
    uint256 wa;
    uint256 bb;
    
    constructor() {
        owner = payable(msg.sender);
    }
    
    modifier onlyOwner() {
        require(owner == msg.sender, "You are not allowed");
        _;
    }
    
    function deposit() public payable returns (uint) {
        balances[msg.sender] += msg.value;
        emit LogDepositMade(msg.sender, msg.value);
        return balances[msg.sender];
    }
    
    function withdraw(uint withdrawAmount) public onlyOwner returns (uint remainingBal) {
        uint currentAmount = balances[owner];
        if (withdrawAmount <= currentAmount) {
            (bool sent, bytes memory data) = owner.call{value: withdrawAmount}("");
            require(sent, "Failed to send Ether");
            balances[owner] -= withdrawAmount;
            
        }
        return balances[owner];
    }
    
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }
    
    event LogDepositMade(address indexed accountAddress, uint amount);
    
    fallback() external payable {}
    receive() external payable {}
}