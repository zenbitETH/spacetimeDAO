export default function Form4 () {
    return(
        <div className='p-5 gap-3 grid grid-cols-2 '>
            <div className="h-[500px]">
                <div className='formLabel'>Verify the proposal</div>
                <div className="bg-white border-gray-400 border-2 h-full rounded-dd grid ">
                    <div className="text-left font-bau p-3">
                        <div className="text-xl">Proposal tittle</div>
                        <div>Type of activity</div>
                        <div className="text-justify pt-3 font-exo">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia.
                        </div>
                    </div>
                    
                    <div className="bg-gray-300/75 rounded-b-dd">
                        <div>Location</div>
                        <div>Map</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='formLabel'>Verify the evidence</div>
                <div className="grid grid-rows-2 h-full gap-3">
                    <div className="bg-white border-gray-400 border-2 h-full rounded-dd">
                        <div className="text-left font-bau p-3">
                            <div className="text-xl">Evidence tittle</div>
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
                <div className='px-10 py-3 hover bg-mods-100 rounded-gen cursor-pointer text-white'>
                Continue
            </div>
        </div>
    </div>
    )
}