import ProgressBar from "../components/ProgressBar"
import Form1 from "../components/Form1"


export default function newProposal () {
    return(
        <div className="
            from-cata-300 to-mods-300 bg-gradient-to-br 
            h-screen grid items-center text-center mx-auto">
            <div className="formCard">
                <ProgressBar/>
                <Form1/>
            </div>
        </div>
    )
}