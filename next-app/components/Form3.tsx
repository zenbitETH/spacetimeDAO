export default function Form3 () {
    return(
        <div className='p-5 gap-5 grid grid-cols-2'>
            
            <div className="col-span-2">
                <div className='formLabel'>Evidence Date</div>

                <input type='date' placeholder='Name your proposal' className='placeholder:italic px-6 py-3 text-black w-full border-color1-500 mx-auto rounded-dd'></input>

            </div>
            <div className="col-span-2">
                <div className='formLabel'>Short description</div>
                <input type='text' placeholder='Name your proposal' className='placeholder:italic px-6 py-3 text-black w-full border-color1-500 mx-auto rounded-dd '></input>
            </div>
            <div className='h-72'>
                <div className='formLabel'>Upload your evidence</div>
                <div className="flex justify-center items-center w-full h-full">
                    <label className="formFile">
                        <div className="flex flex-col justify-center items-center pt-5 pb-6">
                            <svg aria-hidden="true" className="mb-3 w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm  text-white "><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className="">
                <div className='formLabel'>Evidence preview</div>
                <div className="h-full bg-gray-300/60 rounded-dd grid items-center text-white text-sm">Your evidence will be previewed here</div>
            </div>

            <div className='col-span-2 text-center w-full my-auto pt-14 w-44 mx-auto'>
                <div className='formBT'>
                    Continue
                </div>
            </div>
    </div>
    )
}