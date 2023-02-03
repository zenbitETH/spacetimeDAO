export default function Form4 () {
    return(
        <div className='p-5 gap-3 grid grid-cols-2 '>
            <div className="h-full">
                <div className="bg-white h-full rounded-dd grid ">
                    <div className="text-left font-bau p-3">
                        <div className="text-xl">Proposal title</div>
                        <div className="italic"><span className="not-italic text-xl">👷</span> Type of proposal</div>
                        <div className="text-justify pt-3 font-exo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.
                        </div>
                    </div>
                    
                    <div className="bg-gray-500/50 rounded-b-dd h-full relative">
                        <div className="h-36">Map</div>
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
            </div>
            <div>
                <div className="grid grid-rows-2 h-full gap-3">
                    <div className="bg-white border-gray-400 border-2 h-full rounded-dd">
                        <div className="text-left font-bau p-3">
                            <div>01/01/2023</div>
                            <div className="text-justify pt-3 font-exo">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                            </div>
                        </div>
                    </div>
                    <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-white text-sm">Your evidence will be previewed here</div>
                </div>                    
            </div>
            <div className='col-span-2 text-center w-full my-auto pt-14 w-44 mx-auto'>
                <div className='formBT'>
                Submit
            </div>
        </div>
    </div>
    )
}