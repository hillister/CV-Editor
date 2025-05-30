import { useState } from "react";

function Experience(){

    const [companyName, setCompanyName] = useState("");
    const [position, setPosition] = useState("");
    const [year, setYear] = useState();
    const [description, setDescription] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleCompanyName(e){
        setCompanyName(e.target.value)
    }

    function handlePosition(e){
        setPosition(e.target.value)
    }

    function handleDescription(e){
        setDescription(e.target.value)
    }

    function handleStartDate(e){
        setStartDate(e.target.value)
    }

    function handleEndDate(e){
        setEndDate(e.target.value)
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
            
            <div className='preview' style={{display: isSubmitted ? 'block' : 'none'}}>
                <h2>Experience:</h2>
                <h3>Company: {companyName}</h3>
                <h4>Position: {position}</h4>
                <h4>Year: {startDate} to {endDate}</h4>
                <p>Description: {description}</p>
            </div>

            <form className='editor' style={{display: isSubmitted ? 'none' : 'block'}}>
                <h2>Experience:</h2>
                <label>Company Name: </label>
                <input placeholder='Acme Corp, New York, NY' type="text" value={companyName} onChange={handleCompanyName}/><br/>
                <label>Position: </label>
                <input placeholder='Project Manager' type="text" value={position} onChange={handlePosition}/><br/>
                <label>From: </label>
                <input type="date" value={startDate} onChange={handleStartDate}/>
                <label>To: </label>
                <input type="date" value={endDate} onChange={handleEndDate}/><br/>
                <label>Description: </label>
                <textarea placeholder="- Led cross-functional teams of 10+ in delivering enterprise software projects.
                                       - Improved delivery timelines by 25% through optimized workflows.
                                       - Managed budgets up to $500,000 and maintained 98% client satisfaction." 
                    value={description} onChange={handleDescription}>
                </textarea><br/>
            </form>
            <button onClick={handleSubmit}>{isSubmitted ? 'Edit' : 'Submit'}</button>

        </>
    )
}

export default Experience