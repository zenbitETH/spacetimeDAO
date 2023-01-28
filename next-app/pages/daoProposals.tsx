import Link from "next/link"

export default function daoProposals () {
    return(
        <div className='from-cata-300 to-mods-300 bg-gradient-to-br h-screen grid items-center'>
            <div className="card0">
                <div className="propDashboard">
                    <div className="propCard relative">
                        <div className="bg-white rounded-t-gen grid grid-cols-6">
                            <div className="col-span-4 p-5 my-auto">
                                <div className="font-bold text-xl">#1 Proposal Tittle</div>
                                <div className="font-bold">Type of activity</div>
                                <div className="font-bold">01/01/2023</div>
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
                                        <div className="h-3 w-3 rounded-full bg-cata-500"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-cata-500"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-cata-500"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-cata-500"></div>     
                                    </div>
                                    <div className="mx-auto">
                                        <div className="h-3 w-3 rounded-full bg-cata-500"></div>     
                                    </div>
                                </div>
                                <div className="
                                    bg-mods-300/50 hover:bg-mods-300 
                                    cursor-pointer hover:text-white 
                                    grid items-center 
                                    text-xl px-10 
                                    rounded-tl-gen"
                                > 
                                    Details
                                </div>
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
                    <Link href='/'>
                        <div className="newProp ">+ Add new proposal</div>
                    </Link>
                </div>
                <div className="daoMembers">hello3</div>
            </div>
        </div>
    )
}