pragma solidity >=0.7.0 <0.9.0;


contract PiggyBank {
    
    mapping(address => uint) balances;
    address payable public owner;
    
    bool locked = false;
    
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
    
    function withdraw() public onlyOwner returns (bool) {
        require(!locked, "Reentrant call detected!");
        locked = true;
        
        uint currentAmount = balances[owner];
        (bool sent, bytes memory data) = owner.call{value: currentAmount}("");
        
        require(sent, "Failed to send Ether");
        balances[owner] = 0;
        locked = false;
        
        return true;
    }
    
    function balance() public view returns (uint) {
        return balances[msg.sender];
    }
    
    event LogDepositMade(address indexed accountAddress, uint amount);
    
    fallback() external payable {}
    receive() external payable {}
}