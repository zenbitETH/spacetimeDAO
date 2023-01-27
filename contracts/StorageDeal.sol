pragma solidity ^0.8.0;

contract StorageDeal {
    struct Deal {
        address client;
        uint size;
        uint duration;
        uint price;
        uint status;
    }

    mapping(uint => Deal) public deals;
    uint public dealCount;

    function createDeal(address _client, uint _size, uint _duration, uint _price) public {
        dealCount++;
        deals[dealCount] = Deal(_client, _size, _duration, _price, 0);
    }

    function queryDeal(uint _dealId) public view returns (address, uint, uint, uint, uint) {
        Deal memory deal = deals[_dealId];
        return (deal.client, deal.size, deal.duration, deal.price, deal.status);
    }

    function updateDeal(uint _dealId, uint _status) public {
        deals[_dealId].status = _status;
    }
}
