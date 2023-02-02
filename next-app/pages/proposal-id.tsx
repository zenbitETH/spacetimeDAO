export default function proposalDetail() {
    return (
        <div className="from-cata-300 to-mods-300 bg-gradient-to-br 
        h-screen grid items-center text-center mx-auto">
            <div className="detailCard">
                
                <div className="bg-white/50 rounded-dd h-full grid grid-rows-4 items-center gap-5 relative row-span-6">
                    <div className="text-lg absolute top-0 right-0 p-3 bg-gray-500 rounded-tr-dd rounded-bl-dd text-white">Proposal #1 </div>  
                    <div className="text-left font-bau row-span-2 px-8 pt-10">
                        
                        <div className="text-2xl font-bold justify">Proposal title <br/>(Be as specific as you want)</div>
                        <div className="italic pt-3"><span className="not-italic text-xl">👷</span> Type of proposal</div>
                        <div className="text-justify pt-3 font-exo text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia. Lorem ipsum dolor sit amet, consectetur adipiscing.consectetur adipiscing.consec
                        </div>
                    </div>
                
                    
                        <div className="grid grid-cols-2 gap-3 mx-8 items-center  bg-white rounded-dd relative">
                            <div className="bg-white rounded-dd h-full ">
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
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm">Initial Evidence</div>
                        </div>
                  
                    <div className="bg-gray-500/50 rounded-b-dd p-5 h-full relative">
                        Map
                        <div className="
                            absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
                            text-center italic text-white 
                            bg-mods-900/50  
                            p-3 rounded-b-dd"
                        >
                            City, Latitude, Longitude
                        </div>
                    </div>
                    
                    
                </div>
                <div className=" bg-white/50 rounded-dd row-span-6"> 
                    <div className=" grid grid-rows-2  p-3 gap-3 h-full">
                       
                        {/*
                            <div className="blockedEvidence ">Moderators will review your proposal</div>
                            <div className="blockedEvidence2 ">Once you have the local response <br/> Please upload the file</div>
                            <div className="newEvidence ">Upload local request</div>*/}
                        
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
                            <div className="absolute top-0 right-0 p-2 bg-gray-500 rounded-bl-dd rounded-tr-dd text-white text-sm">Local Request</div>
                        </div>
                        <div className="newEvidence ">Upload local response</div>

                        
                    </div>
                </div>
                <div className="grid grid-rows-2 gap-3 row-span-6 ">
                    
                    <div className="stateCard row-span-2 ">
                        <div className="mx-auto grid gap-3">
                            <div className=" text-white text-3xl">Proposal State</div>
                            <div className="text-7xl">On review</div>
                            <div className="bg-white/75 text-2xl text-gray-500 hover:text-gray-900 w-auto mx-auto px-3 py-2 cursor-pointer shadow-lg hover:shadow-none rounded-dd mt-8 hover:ease-in hover:bg-white	"> ⚙️Change State</div>
                        </div>
                    </div>
                    {/* SHOW ONLY ON VOTING/FUNDING STAGES
                        <div className="bg-gray-300 rounded-gen">States</div>
                        <div className="bg-gray-300 rounded-gen">Voting</div>
                    */}
                </div>
            </div>
        </div>
    )
}