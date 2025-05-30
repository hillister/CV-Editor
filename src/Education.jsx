import {useState} from 'react';

function Education(){

    const [schoolName, setSchoolName] = useState();
    const [certificate, setCertificate] = useState();
    const [year, setYear] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false)
    function handleSchoolName(e){
        setSchoolName(e.target.value)
    }

    function handleCertificate(e){
        setCertificate(e.target.value)
    }

    function handleYear(e){
        setYear(e.target.value)
    }

    function handleSubmit(){
        if(isSubmitted === false){
            setIsSubmitted(true);
        } else {
            setIsSubmitted(false);
        }
    }

    return(
        <>
            <h2>Education</h2>
            <div className='infoDisplay' style={{display: isSubmitted ? 'block' : 'none'}}>
                <h3>{schoolName}</h3>
                <h4>{certificate}</h4>
                <h4>{year}</h4>
            </div>

            <form style={{display: isSubmitted ? 'none' : 'block'}}>
                <input placeholder='School Name' type='text' value={schoolName} onChange={handleSchoolName}/> <br/>
                <input placeholder='Certificate Name' type='text' value={certificate} onChange={handleCertificate}/> <br/>
                <input placeholder='Year Awarded' type='number' value={year} onChange={handleYear}/> <br/>
            </form>
            <button onClick={handleSubmit}>{isSubmitted ? 'Edit' : 'Submit'}</button>
        </>
    )
}

export default Education