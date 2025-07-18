import GeneralForm from "../components/generalForm";
import { useState } from "react";

export default function SignupPage(){
    const [email , setEmail ] = useState("")
    const [password , setPassword] = useState("")
    const [fullName , setFullName] = useState("")

    const input = [
        {
            label : "email",
            value : email,
            onChange : (e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
            placeholder : "add email",
            type : "text"
        },
        {
            label : "fullName" ,
            value : fullName,
            onChange : (e : React.ChangeEvent<HTMLInputElement>) => setFullName(e.target.value),
            placeholder : "add fullName",
            type : "text"
        },
        {
            label : "password",
            value : password,
            onChange : (e : React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
            placeholder : "add password",
            type :"text"
        },
    ]

    function handleSubmit(e : React.FormEvent<HTMLFormElement> ) {
        e.preventDefault()
    }

    return (
        <div>
            <GeneralForm formSubmit={handleSubmit}  formButtonText="submit"  input={input}/>
        </div>
    )
}
