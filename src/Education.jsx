import {useState} from 'react';

function Education(){

    const [schoolName, setSchoolName] = useState();
    const [certificate, setCertificate] = useState();
    const [year, setYear] = useState('');
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
            
            <div className='preview' style={{display: isSubmitted ? 'block' : 'none'}}>
                <h2>Education</h2>
                <h3>{schoolName}</h3>
                <h4>{certificate}</h4>
                <h4>{year}</h4>
            </div>
            <div className='editor'>
                <form style={{display: isSubmitted ? 'none' : 'block'}}>
                    <h2>Education</h2>
                    <label>School Name: </label>
                    <input placeholder='University of Illinois at Urbana-Champaign' type='text' value={schoolName} onChange={handleSchoolName}/> <br/>
                    <label>Degree / Field of Study: </label>
                    <input placeholder='B.A. in Communication' type='text' value={certificate} onChange={handleCertificate}/> <br/>
                    <label>Year Awarded: </label>
                    <input type='date' value={year} onChange={handleYear}/> <br/>
                </form>
                <button onClick={handleSubmit}>{isSubmitted ? 'Edit' : 'Submit'}</button>
            </div>

        </>
    )
}

export default Education