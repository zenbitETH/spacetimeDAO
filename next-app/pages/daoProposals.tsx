import Link from "next/link"

export default function daoProposals () {
    return(
        <div className='from-cata-300 to-mods-300 bg-gradient-to-br h-screen grid items-center'>
            <div className="card0">
                <div className="propDashboard">
                    <div className="propCard relative">
                        <div className="bg-white rounded-t-gen grid grid-cols-6">
                            <div className="col-span-4 p-5">
                                <div className="font-bold text-3xl">Proposal Tittle</div>
                                <div className="font-bold text-xl">Type of activity</div>
                                <div className="font-bold text-xl">01/01/2023</div>
                                <div className="italic text-xl py-3">City, Latitude, Longitude</div>
                            </div>
                            <div className="col-span-2 border-l-2 border-b-2 border-gray-500/50 rounded-tr-gen rounded-bl-gen grid grid-rows-6">
                                <div className="row-span-2 text-center grid items-center font-bold text-xl rounded-tr-gen rounded-bl-gen border-b-2 border-gray-500/50">On review</div>
                                <div className="row-span-4 text-center grid items-center">Evidence states</div>
                            </div>
                        </div>
                        <div className="bg-gray-200/50 rounded-b-gen">
                        </div>
                        <div className="absolute bottom-0 right-0 bg-mods-300/50 hover:bg-mods-300 cursor-pointer hover:text-white py-3 text-xl px-10 rounded-br-gen rounded-tl-gen"> Details</div>
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