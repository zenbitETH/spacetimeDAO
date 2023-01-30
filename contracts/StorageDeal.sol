pragma solidity >=0.8.0;

contract StorageDeals {
    struct Deal {
        address minerAddress;
        address clientAddress;
        uint256 startDate;
        uint256 endDate;
        uint256 pricePerByte;
        uint256 dataSize;
        uint256 status;
        bytes32 fileHash;
    }

    mapping(bytes32 => Deal) public deals;

    enum DealStatus {
        Inactive,
        Active,
        Terminated
    }

    function createDeal(address minerAddress, address clientAddress, uint256 startDate, uint256 endDate, uint256 pricePerByte, uint256 dataSize, bytes32 fileHash) public {
        bytes32 dealId = sha256(abi.encodePacked(minerAddress, clientAddress, startDate, endDate, pricePerByte, dataSize, fileHash));
        deals[dealId] = Deal(minerAddress, clientAddress, startDate, endDate, pricePerByte, dataSize, uint256(DealStatus.Active), fileHash);
    }

    function queryDeal(bytes32 dealId) public view returns (address, address, uint256, uint256, uint256, uint256, uint256, bytes32) {
        Deal memory deal = deals[dealId];
        return (deal.minerAddress, deal.clientAddress, deal.startDate, deal.endDate, deal.pricePerByte, deal.dataSize, deal.status, deal.fileHash);
    }

    function updateDeal(bytes32 dealId, uint256 endDate, uint256 pricePerByte) public {
        Deal memory deal = deals[dealId];
        deal.endDate = endDate;
        deal.pricePerByte = pricePerByte;
    }

    function terminateDeal(bytes32 dealId) public {
        Deal memory deal = deals[dealId];
        deal.status = uint256(DealStatus.Terminated);
    }
}

contract DataDAO {
    StorageDeals storageDeals;

    constructor(address storageDealsAddress) public {
        storageDeals = StorageDeals(storageDealsAddress);
    }

    function createStorageDeal(address minerAddress, address clientAddress, uint256 startDate, uint256 endDate, uint256 pricePerByte, uint256 dataSize, bytes32 fileHash) public {
        storageDeals.createDeal(minerAddress, clientAddress, startDate, endDate, pricePerByte, dataSize, fileHash);
    }

    function queryStorageDeal(bytes32 dealId) public view returns (address, address, uint256, uint256, uint256, uint256, uint256, bytes32) {
        return storageDeals.queryDeal(dealId);
    }

    function updateStorageDeal(bytes32 dealId, uint256 endDate, uint256 pricePerByte) public {
        storageDeals.updateDeal(dealId, endDate, pricePerByte);
    }

    function terminateStorageDeal(bytes32 dealId) public {
        storageDeals.terminateDeal(dealId);
    }

    // Add logic for incentivizing user coordination
}
