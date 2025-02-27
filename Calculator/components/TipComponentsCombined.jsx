import { TipCalculator } from "./TipCalculator"

function GifCheck() {
    if (submit = true) {
        return <img src="/src/assets/tip.gif" alt="" className="h-50 w-auto" />
    } else {
        return <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" />
    }
}

export default function TipComponents() {
    return (
        <div>
            <div className='max-w-screen h-screen grid grid-cols-1 items-center bg-[#c5e5e8] py-4'>
                <div className='text-4xl text-[00464a] text-center font-bold'><p>Tip Calculator</p></div>
                <div className='grid grid-cols-2 items-center max-w-2xl max-h-fit mx-auto rounded-4xl bg-white  border-white border-20 font-normal text-base'>
                    <div className="bg-[#00464a]">
                        <TipCalculator /> 
                    </div>

                    <div className="bg-[#00464a] w-full h-full rounded-3xl rounded-bl-none text-white grid place-items-center p-2">
                        <img src="/src/assets/tip.png" alt="" className="h-50 w-auto" />
                        {/* The results should hide/replace the image and span when being displayed*/}
                        <span className="text-[#c5e5e8]">results will appear here</span>
                    </div>

                </div>
            </div>
         </div>

    )
}
