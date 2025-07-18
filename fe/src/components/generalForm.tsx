import GeneralButton from "./generalButton"

interface formProps {
    formButtonText : string
    input : Input[]
    formSubmit : (e : React.FormEvent<HTMLFormElement>) => void
}

interface Input{
    label : string
    placeholder : string 
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void
    type? : string
    value : string
}

export default function GeneralForm(props : formProps){
    return (
    <form onSubmit={props.formSubmit}>
        {props.input.map((item , index)=> (
            <div key={index} className="flex flex-col">
                <label className="py-2">{item.label}</label>
                <input value={item.value} type={item.type} placeholder={item.placeholder} onChange={item.onChange} className="px-3 py-2 mb-3 border rounded text-black" />
            </div>
        ))}
        <GeneralButton type="submit" sizeStyle="sm" varientStyle="primary" text={props.formButtonText}/>
    </form>
    )
}           