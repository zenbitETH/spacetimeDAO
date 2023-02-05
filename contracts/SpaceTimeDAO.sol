// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/access/AccessControl.sol";

contract SpaceTimeDAO is AccessControl {

    bytes32 internal constant MODERATOR = keccak256("MODERATOR");
    bytes32 internal constant CATALYST = keccak256("CATALYST");
    uint32 internal proposalId;

    struct Proposal {
        address owner;
        uint32 totalUpvote;
        uint32 totalDownvote;
        Status status;
        string cid;
    }

    enum Status {
        Review,
        Filtering,
        Filtering_Vote,
        Funding,
        Rejected,
        Solved
    }

    mapping(uint32 => Proposal) public proposalDetail;
    mapping(address => mapping(uint32 => bool)) proposalVoted; 

    error AlreadyVoted();
    error ProposalNotCreated();

    event NewProposal(uint32 id, address owner);
    event StateUpdateProposal(uint32 id, Status newState);
    event CidUpdateProposal(uint32 id, string cid);    
    event TotalUpvoteUpdateProposal(uint32 id, uint32 totalUpvote);
    event TotalDownvoteUpdateProposal(uint32 id, uint32 totalDownvote);    


    constructor() {  
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function grantRoleModerator(address _address) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(MODERATOR, _address);
    }

    function grantRoleCatalyst(address _address) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(CATALYST, _address);
    }

    function create() external {

        Proposal memory proposal;
        proposal.owner = msg.sender;
        proposal.status = Status.Review;

        proposalDetail[proposalId] = proposal;

        emit NewProposal(proposalId, msg.sender);

        proposalId += 1;        
    }

    function update(uint32 _proposalId, Status _status) public onlyRole(DEFAULT_ADMIN_ROLE) {
        proposalDetail[_proposalId].status = _status;

        emit StateUpdateProposal(_proposalId, _status);
    }

    function updateCID(uint32 _proposalId, string calldata _cid) public onlyRole(DEFAULT_ADMIN_ROLE) {
        proposalDetail[_proposalId].cid = _cid;

        emit CidUpdateProposal(_proposalId, _cid);
    }    

    function upvote(uint32 _proposalId) public {

        if (proposalVoted[msg.sender][_proposalId]) {
            revert AlreadyVoted();
        }

        if (_proposalId >= proposalId) {
            revert ProposalNotCreated();
        }

        proposalDetail[_proposalId].totalUpvote += 1;

        emit TotalUpvoteUpdateProposal(_proposalId, proposalDetail[_proposalId].totalUpvote);

        proposalVoted[msg.sender][_proposalId] = true;
    }

    function downvote(uint32 _proposalId) public {

        if (proposalVoted[msg.sender][_proposalId]) {
            revert AlreadyVoted();
        }
        
        proposalDetail[_proposalId].totalDownvote += 1;

        emit TotalDownvoteUpdateProposal(_proposalId, proposalDetail[_proposalId].totalDownvote);

        proposalVoted[msg.sender][_proposalId] = true;
    }

}
