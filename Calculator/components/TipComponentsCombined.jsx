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
                <TipCalculator />
            </div>
         </div>

    )
}
