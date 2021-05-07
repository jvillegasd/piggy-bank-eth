pragma solidity >=0.7.0 <0.9.0;

contract PiggyBank {
    
    mapping(address => uint) balances;
    address  public  owner;
    
    constructor() {
        owner = msg.sender;
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
        if (withdrawAmount <= balances[msg.sender]) {
            balances[msg.sender] -= withdrawAmount;
            (bool success, ) = msg.sender.call{value: withdrawAmount}("");
            require(success, "Transfer failed.");
        }
        return balances[msg.sender];
    }
    
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }
    
    event LogDepositMade(address indexed accountAddress, uint amount);
    
    receive() external payable {}
}