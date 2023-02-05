import Map from "./Map";
interface Evidence {
    date: Date;
    description: string;
    evidenceForm: string
  }
  
  interface Proposal {
    name: string;
    type: string;
    description: string;
    location: string;
    evidence: Evidence
  }

interface Form4Props {
    proposal: Proposal;
  }

export default function Form4 (props: Form4Props) {
    const {proposal} = props;
    return(
        <div className='p-5 gap-3 grid grid-cols-2 '>
            <div className="h-full">
                <div className="bg-white h-full rounded-dd grid ">
                    <div className="text-left font-bau p-3">
                        <div className="text-xl">{proposal ? proposal.name : "Proposal title"}</div>
                        <div className="italic">{proposal ? proposal.type : "Proposal type"}</div>
                        <div className="text-justify pt-3 font-exo">
                        {proposal ? proposal.description : "Proposal type"} 
                        </div>
                    </div>
                    
                    <div className="h-full relative">
                        <Map/>
                        <div className="
                            absolute bottom-0 left-1/2 -translate-x-1/2 w-full 
                            text-center italic text-white
                            bg-gray-800/75  
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
        </div>
    )
}