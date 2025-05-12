// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DonationLedger {
    event TransactionLogged(address indexed user, string campaign, bool success, uint256 timestamp, bytes32 txHash);

    function donate(string memory campaign) public payable {
        require(msg.value > 0, "Donation must be greater than 0");
        emit TransactionLogged(
            msg.sender,
            campaign,
            true,
            block.timestamp,
            keccak256(abi.encodePacked(msg.sender, block.timestamp, msg.value))
        );
    }
}
