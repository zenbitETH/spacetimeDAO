export default function ProgressBar () {
    return(              
        <div>
            <div className="formProgress">
                <div className="flex ">
                    <div className="flex-1">
                        <div className="progressCircles bg-gray-300" />
                    </div>
                    <div className="progressBar">
                        <div className="barContainer">
                            <div className="barBar bg-gray-300"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="progressCircles bg-gray-300" />
                    </div>
                    <div className="progressBar ">
                        <div className="barContainer">
                            <div className="barBar bg-gray-300" ></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="progressCircles bg-gray-300" />
                    </div>
                    <div className="progressBar">
                        <div className="barContainer">
                            <div className="barBar bg-gray-300"></div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="progressCircles bg-gray-300" />
                    </div>
                </div>
            </div>
            <div className="
                grid mx-auto w-2/3 px-6 grid-cols-4 
                text-center text-sm"
            >
                <div className="font-bold underline underline-offset-4">
                    General
                </div>

                <div className="">
                    Location
                </div>

                <div className="">
                    Evidence
                </div>

                <div className="">
                    Confirm
                </div>
            </div>
        </div>
    )
}