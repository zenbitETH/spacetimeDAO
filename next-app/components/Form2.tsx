export default function Form2 () {
    return(
        <div className='p-5 gap-5 grid'>
            <div>
                <div className='formLabel'>Proposal location</div>
                <div className="h-96 bg-gray-300 rounded-dd  relative grid text-center items-center border-gray-500 border border-t-0">

                    Map Component
                    <input type='text' placeholder='Type the adress to locate the proposal' className='placeholder:italic px-6 py-3 text-black w-full border-gray-500 mx-auto rounded-dd absolute top-0 left-0'/>
                    <div className="grid grid-cols-3 py-3 bg-gray-500/75 rounded-dd absolute bottom-0 left-0 w-full text-white border border-gray-500">
                    <div>City</div> 
                    <div>Lat</div>
                    <div>Lon</div>
                
                </div>    
                </div>   
                 
            </div>
            <div className='text-center w-full my-auto pt-14 w-44 mx-auto'>
                <div className='formBT'>
                    Continue
                </div>
            </div>
        </div>
    )
}