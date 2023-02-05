import Map from "../components/Map"

export default function proposalDetail() {
    return (
        <div className="from-cata-300 to-mods-300 bg-gradient-to-br 
        h-screen grid items-center text-center mx-auto">
            <div className="detailCard">
                
                <div className="bg-white/50 rounded-dd h-full grid grid-rows-4 items-center gap-5 relative row-span-6 font-">
                    <div className="text-lg absolute top-0 right-0 p-3 bg-gray-500 rounded-tr-dd rounded-bl-dd text-white">
                        <div className="italic"> Proposal #1</div>
                        <div className="text-[12px] -mb-2">made on 01/02/23</div>
                        <div className="text-[12px]">made by 0x123..abc</div>
                    </div>  
                    <div className="text-left font-bau row-span-2 px-8 pt-10">
                        
                        <div className="text-2xl font-bold justify">Proposal title <br/>(Be as specific as you want)</div>
                        <div className="italic pt-3"><span className="not-italic text-xl">👷</span> Type of proposal</div>
                        <div className="text-justify pt-3 font-exo text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing.consectetur adipiscing.consec
                        </div>
                    </div>
                    <div className="bg-gray-500/50 h-full relative">
                        <Map/>
                        <div className="
                            absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
                            text-center italic text-white 
                            bg-mods-900/75
                            p-3"
                        >
                            City, Latitude, Longitude
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mx-8 items-center  bg-white rounded-dd relative">
                        <div className="bg-white rounded-dd h-full ">
                            <div className="text-left font-bau p-3">
                                
                                <div className="text-justify text-sm pt-3 font-exo">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                </div>
                            </div>
                        </div>
                        <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                            Your evidence will be previewed here
                        </div>
                        <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm italic">Initial Evidence
                        <div className="text-[12px] text-center">01/01/2017</div></div>
                    </div>
                  
                    
                    
                    
                </div>
                <div className=" bg-white/50 rounded-dd row-span-6"> 
                    <div className=" grid grid-rows-2  p-3 gap-3 h-full">
                        <div className="grid grid-cols-2 gap-3 items-center  bg-white rounded-dd relative">
                            <div className="bg-white rounded-dd ">
                                <div className="text-left font-bau p-3">

                                    <div className="text-center">01/01/2023</div>
                                    <div className="text-justify text-sm pt-3 font-exo">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </div>
                                </div>
                            </div>
                            <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                                Your evidence will be previewed here
                            </div>
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm">
                                <div className="italic"> Local Response</div>
                                <div className="text-[12px] -mb-1">made on 01/02/23</div>
                                <div className="text-[12px]">made by 0x123..abc</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 items-center  bg-white rounded-dd relative">
                            <div className="bg-white rounded-dd ">
                                <div className="text-left font-bau p-3">

                                    <div className="text-center">01/01/2023</div>
                                    <div className="text-justify text-sm pt-3 font-exo">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </div>
                                </div>
                            </div>
                            <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                                Your evidence will be previewed here
                            </div>
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm">
                                <div className="italic"> Local Response</div>
                                <div className="text-[12px] -mb-1">made on 01/02/23</div>
                                <div className="text-[12px]">made by 0x123..abc</div>
                            </div>
                        </div>
                        
                        
                       
                        {/* NEW PROPOSAL / BLOCKED EVIDENCE
                            <div className="blockedEvidence ">Moderators will review your proposal</div>

                            ON REVIEW / LOCAL REQUEST                            
                            <div className="newEvidence ">Upload local request</div>
                            
                            ON REVIEW / LOCAL RESPONSE
                            <div className="blockedEvidence2 ">Once you have the local response <br/> Please upload the file</div>

                            VOTING STATE / LOCAL EVIDENCE ONLY
                            <div className="grid grid-cols-2 gap-3 items-center  bg-white rounded-dd relative">
                            <div className="bg-white rounded-dd ">
                                <div className="text-left font-bau p-3">
                                    
                                    <div className="text-center">01/01/2023</div>
                                    <div className="text-justify text-sm pt-3 font-exo">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </div>
                                </div>
                            </div>
                            <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                                Your evidence will be previewed here
                            </div>
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm ">
                                <div className="italic"> Local Request</div>
                                <div className="text-[12px] -mb-1">made on 01/02/23</div>
                                <div className="text-[12px]">made by 0x123..abc</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 items-center  bg-white rounded-dd relative">
                            <div className="bg-white rounded-dd ">
                                <div className="text-left font-bau p-3">
                                    
                                    <div className="text-center">01/01/2023</div>
                                    <div className="text-justify text-sm pt-3 font-exo">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </div>
                                </div>
                            </div>
                            <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                                Your evidence will be previewed here
                            </div>
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm">
                                <div className="italic"> Local Response</div>
                                <div className="text-[12px] -mb-1">made on 01/02/23</div>
                                <div className="text-[12px]">made by 0x123..abc</div>
                            </div>
                        </div>
                        */}
                        
                        
                        

                        
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-3 row-span-6 ">

                    <div className="stateCard  from-cata-300 to-mods-300 bg-gradient-to-r row-span-2">
                        <div className="mx-auto grid gap-3">
                            <div className=" text-white text-3xl">Proposal State</div>
                            <div className="text-7xl">Voting</div>
                            <div className="voteCard">
                                <div className="italic col-span-2">0/10 citizen moderators have voted <br/>
                                    2/10 government moderators have votes</div>
                                <div className="cardBT"><span className="text-5xl">👍</span></div>
                                <div className="cardBT"><span className="text-5xl">👎</span></div>
                            </div>
                        </div>
                    </div>
                        
                    
                    
                    
                 
                    {/* 
                        NEW PROPOSAL STATE
                        <div className="stateCard row-span-2 ">
                            <div className="mx-auto grid gap-3">
                                <div className=" text-white text-3xl">Proposal State</div>
                                <div className="text-7xl">New Proposal</div>
                                <div className="grid grid-cols-2">
                                    <div className="cardBT	"> <span className="text-2xl">🔍 </span>Ask for local evidence</div>
                                    <div className="cardBT	"> <span className="text-2xl">🗳️ </span>Ready for voting</div>
                                </div>
                            </div>
                        </div>
                        
                        ON REVIEW STATE / WAITING FOR LOCAL EVIDENCE
                       <div className="stateCard row-span-2 ">
                            <div className="mx-auto grid gap-3">
                                <div className=" text-white text-3xl">Proposal State</div>
                                <div className="text-7xl">🔍On review
                                    <div className="text-2xl italic">Waiting for local evidence</div>
                                </div>
                            </div>
                        </div>


                        ON REVIEW / LOCAL EVIDENCE ON REVIEW
                        <div className="stateCard row-span-2 ">
                            <div className="mx-auto grid gap-3">
                                <div className=" text-white text-3xl">Proposal State</div>
                                <div className="text-7xl">🔍On review
                                    <div className="text-2xl italic">Local evidence on review</div>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="cardBT	"> <span className="text-2xl">✅ </span>Mark as solved</div>
                                    <div className="cardBT	"> <span className="text-2xl">🗳️ </span>Ready for voting</div>
                                </div>
                            </div>
                        </div>
                    */}

                    {/* SOLVED STATE
                        <div className="stateCard row-span-2 ">
                            <div className="mx-auto grid gap-3">
                                <div className=" text-white text-3xl">Proposal State</div>
                                <div className="text-7xl">✅Solved
                                    <div className="text-2xl italic">Solved with local evidence</div>
                                </div>
                            </div>
                        </div>
                    */}

                    {/* VOTING STATE
                        <div className="stateCard row-span-2">
                            <div className="mx-auto grid gap-3">
                                <div className=" text-white text-3xl">Proposal State</div>
                                <div className="text-7xl">Voting</div>
                                <div className="voteCard">
                                    <div className="italic col-span-2">0/10 citizen moderators have voted <br/>
                                        2/10 government moderators have votes</div>
                                    <div className="cardBT"><span className="text-5xl">👍</span></div>
                                    <div className="cardBT"><span className="text-5xl">👎</span></div>
                                </div>
                            </div>
                        </div>
                        
                    */}

                </div>
            </div>
        </div>
    )
}