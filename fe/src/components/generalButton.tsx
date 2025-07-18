interface ButtonProps {
    text : string 
    varientStyle : "primary" | "secondary"
    sizeStyle : "sm" | "md" | "lg"
    onClick? : () => void
    type : "submit"
}

const varientStyle = {
    "primary" : "bg-black text-white text-center",
    "secondary" : "bg-white border-2 border-black text-black"
}

const sizeStyle = {
    "sm" : "p-3 text-lg",
    "md" : "p-4 text-xl",
    "lg" : "p-5 text-2xl"
}

const defaultStyle = "rounded-md flex items-center justify-center"

export default function GeneralButton(props : ButtonProps){
   return (
    <button type={props.type} className={`${varientStyle[props.varientStyle]} ${defaultStyle}  ${sizeStyle[props.sizeStyle]} ${props.onClick}`}>
        {props.text}
    </button>
   ) 
}