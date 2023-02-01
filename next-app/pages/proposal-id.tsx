export default function proposalDetail() {
    return (
        <div className="from-cata-300 to-mods-300 bg-gradient-to-br 
        h-screen grid items-center text-center mx-auto">
            <div className="detailCard">
                <div className="bg-white/50 rounded-gen h-full grid grid-rows-3">
                    <div className="text-left font-bau p-3">
                        <div>Proposal #1</div>
                        <div className="text-xl">Proposal tittle</div>
                        <div>Type of activity</div>
                        <div className="text-justify pt-3 font-exo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.
                        </div>
                    </div>
                
                    <div>
                        <div className="mx-3">Initial Evidence</div>
                        <div className="grid grid-cols-2 gap-3 mx-3 border-gray-400 border-2 bg-white rounded-dd">
                            <div className="bg-white rounded-dd h-full ">
                                <div className="text-left font-bau p-3">
                                    <div className="text-xl">Evidence tittle</div>
                                    <div>01/01/2023</div>
                                    <div className="text-justify text-sm pt-3 font-exo">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                                    </div>
                                </div>
                            </div>
                            <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-sm">
                                Your evidence will be previewed here
                            </div>
                        </div>
                    </div>
                  
                    <div className="bg-gray-500/50 rounded-b-gen p-5  relative">
                        Map
                        <div className="
                            absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
                            text-center italic text-white 
                            bg-mods-900/50  
                            p-3 rounded-b-gen"
                        >
                            City, Latitude, Longitude
                        </div>
                    </div>
                    
                    
                </div>
                <div className="bg-gray-200 rounded-gen">
                    
                </div>
                <div className="grid grid-rows-2 gap-3">
                    <div className="bg-gray-200 rounded-gen">States</div>
                    <div className="bg-gray-200 rounded-gen">Voting</div>
                </div>
            </div>
        </div>
    )
}