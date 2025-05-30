import { useState } from "react";

function Experience(){

    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [year, setYear] = useState();
    const [description, setDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleCompanyName(e){
        setCompanyName(e.target.value)
    }

    function handlePosition(e){
        setPosition(e.target.value)
    }

    function handleYear(e){
        setYear(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handleSubmit(){
        if(!isSubmitted){
            setIsSubmitted(true)
        } else{
            setIsSubmitted(false)
        }
    }
    return(
        <>
            <h2>Experience:</h2>
            <div style={{display: isSubmitted ? 'block' : 'none'}}>
                <h3>Company: {companyName}</h3>
                <h4>Position: {position}</h4>
                <h4>Year: {year}</h4>
                <p>Description: {description}</p>
            </div>

            <form style={{display: isSubmitted ? 'none' : 'block'}}>
                <input placeholder='Company Name' type="text" value={companyName} onChange={handleCompanyName}/><br/>
                <input placeholder='Position' type="text" value={position} onChange={handlePosition}/><br/>
                <input placeholder='Year' type="number" value={year} onChange={handleYear}/><br/>
                <textarea placeholder="Description" value={description} onChange={handleDescription}></textarea><br/>
            </form>
            <button onClick={handleSubmit}>{isSubmitted ? 'Edit' : 'Submit'}</button>

        </>
    )
}

export default Experience