import { useState } from 'react'

function GeneralInfo(){
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [summary, setSummary] = useState('');

    function handleSetName(e){
        setName(e.target.value)
    }
    
    function handleSetPhone(e){
        setPhone(e.target.value)
    }

    function handleSetEmail(e){
        setEmail(e.target.value)
    }

    function handleSetLinkedIn(e){
        setLinkedIn(e.target.value)
    }

    function handleSetSummary(e){
        setSummary(e.target.value)
    }
    function handleClick(e){
        e.preventDefault();
        if(isSubmitted === false){
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    }

    return(
        <div className='content'>
            
            <div className='editor'>
                <form className='generalForm'>
                    <h2 className="heading">General Info</h2>
                    <label>Full Name: </label>
                    <input placeholder='Jane Doe' type='text' value={name} onChange={handleSetName} />
                    <label>Phone Number: </label>
                    <input placeholder='(555) 123-4567' type='number' value={phone} onChange={handleSetPhone} /> 
                    <label>Email Address: </label>
                    <input placeholder='jane.doe@example.com' type='text' value={email} onChange={handleSetEmail}/>
                    <label>LinkedIn: </label>
                    <input placeholder='linkedin.com/in/janedoe' type='text' value={linkedIn} onChange={handleSetLinkedIn} /> 
                    <label>Professional Summary: </label>
                    <textarea
                        placeholder='Detail-oriented and highly motivated professional with 5+ years of experience in project management, team leadership, and client communication. Proven track record of delivering projects on time and within budget. Seeking to leverage expertise in operations and team coordination in a dynamic new role.' 
                        value={summary} onChange={handleSetSummary}>
                    </textarea>
                </form>
                <button onClick={handleClick}>{isSubmitted ? 'Edit' : 'Submit'}</button>
            </div>

            <div className='preview' style={{display: isSubmitted ? 'block' : 'none'}}>
                <h1>{name}</h1>
                <h3>{phone}</h3>
                <h3>{email}</h3>
                <h3>{linkedIn}</h3>
                <h3>{summary}</h3>
            </div>

        </div>
    )
}

export default GeneralInfo