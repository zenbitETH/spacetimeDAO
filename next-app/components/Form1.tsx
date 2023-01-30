export default function Form1 () {
    return(
        <div className='p-5 gap-5 grid'>
            <div>
                <div className='formLabel'>Proposal Tittle</div>
        
                <input type='text' placeholder='Name your proposal' className='placeholder:italic px-6 py-3 text-black w-full border-color1-500 mx-auto rounded-dd'></input>
        
            </div>
            <div>
                <div className='formLabel'>Type of activity</div>
                <select className='pl-5 text-black w-full rounded-dd px-6 py-3 border-color1-500'>
                    <option value="" selected>Please select</option>
                    <option>🗳️ Improvement in public administration</option>
                    <option>🌳 Face-to-face event</option>
                    <option>💻 Online event</option>
                    <option>⚠️ Security Report</option>
                    <option>👷 Request work or maintenance</option>
                    <option>⚙️ Add function to the DAO</option>
                </select>
            </div>
            <div className='row-span-2 w-full mx-auto h-72'>
                <div className='formLabel'>Description</div>
                <textarea placeholder='Describe your proposal' className='p-5 text-black w-full mx-auto rounded-dd placeholder:italic h-full border-color1-500'></textarea>
            </div>
            <div className='text-center w-full my-auto pt-14 w-44 mx-auto'>
                <div className='px-10 py-3 hover bg-mods-100 rounded-gen cursor-pointer text-white'>
                    Continue
                </div>
            </div>
        </div>
    )
}