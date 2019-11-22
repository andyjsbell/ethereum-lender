pragma solidity ^0.5.0;

contract Lender {

    mapping(address=>uint) public loans;
    event Loan(address addr, uint amount);
    uint public amount;

    constructor(uint _amount) public payable {
        amount = _amount;
    }

    function microloan() public {
        // we don't pay out until balance is paid back
        require(loans[msg.sender] == 0, 'Cannot loan until paid back');

        loans[msg.sender] = amount;

        emit Loan(msg.sender, amount);
        // Lend a small amount to sender
        msg.sender.transfer(amount);
    }
}