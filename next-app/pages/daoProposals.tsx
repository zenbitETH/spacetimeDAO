import Link from "next/link"

export default function daoProposals () {
    return(
        <div className='from-cata-300 to-mods-300 bg-gradient-to-br h-screen grid items-center'>
            <div className="card0">
                <div className="propDashboard">
                    <div className="propCard relative">
                        <div className="bg-white rounded-t-gen grid grid-cols-6 relative">
                            
                            <div className="col-span-4 p-5 my-auto">
                                <div className="italic">Proposal #1</div>
                                <div className="font-bold text-xl">Proposal Title</div>
                                <div className="italic"> <span className="not-italic text-xl">👷</span>Type of proposal</div>
                                <div className="text-sm">made on 01/01/2023</div>
                                <div className="text-sm">made by 0x123...abc</div>
                            </div>
                            <div className="
                                col-span-2                                 
                                border-gray-500/50 
                                rounded-tr-gen 
                                rounded-bl-gen grid grid-rows-3"
                            >
                                <div className="
                                    grid 
                                    items-center text-center 
                                    font-bold text-xl 
                                    rounded-tr-gen rounded-bl-gen 
                                    bg-cata-300"
                                >
                                    On review
                                </div>
                                <div className="text-center grid grid-cols-5 items-center gap-3 mx-auto p-3 w-full">
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gray-500"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-gray-300"></div>     
                                    </div>
                                </div>
                                <Link href='/proposal-id'>
                                    <div className="
                                        bg-mods-300/50 hover:bg-mods-300 
                                        cursor-pointer hover:text-white 
                                        grid items-center 
                                        text-xl px-10 
                                        rounded-tl-gen"
                                    > 
                                        Details
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="bg-gray-200/50 rounded-b-gen p-5 relative">
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
                    <Link href='/newProposal'>
                        <div className="newProp h-[375px] rounded-gen text-white ">+ Add a new proposal</div>
                    </Link>
                </div>
                <div className="daoMembers">
                    <div className="bg-white/75 items-center grid text-center rounded-dd">
                        <div>
                            <div className="text-6xl ">1</div> 
                            <div className="text-xl">New</div>
                        </div>
                    </div>
                    <div className="bg-white/75 items-center grid text-center rounded-dd">
                        <div>
                            <div className="text-6xl ">2</div> 
                            <div className="text-xl">On review</div>
                        </div>
                    </div>
                    <div className="bg-white/75 rounded-dd col-span-2 items-center text-center grid">
                        <div>
                            <div className="text-6xl ">0</div> 
                            <div className="text-xl">Solved</div>
                        </div>
                    </div>
                    <div className="bg-white/75 rounded-dd col-span-2 row-span-2 items-center text-center grid grid-cols-2">
                        <div className="col-span-2">
                            <div className="text-6xl ">0</div> 
                            <div className="text-xl">Voting</div>
                        </div>
                        <div>
                            <div className="text-6xl ">0</div> 
                            <div className="text-xl">Funding</div>
                        </div>
                        <div>
                            <div className="text-6xl ">0</div> 
                            <div className="text-xl">Rejected</div>
                        </div>
                    </div>
                    <div className="bg-white/75 rounded-dd col-span-2 row-span-2 items-center text-center grid">
                        <div>
                            <div className="text-6xl ">5</div> 
                            <div className="text-xl">Total proposals</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}