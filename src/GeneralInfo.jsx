import { useState } from 'react'

function GeneralInfo(){
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [address, setAddress] = useState();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleSetName(e){
        setName(e.target.value)
    }
    
    function handleSetPhone(e){
        setPhone(e.target.value)
    }

    function handleSetEmail(e){
        setEmail(e.target.value)
    }

    function handleSetAddress(e){
        setAddress(e.target.value)
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
        <div className='generalInfo'>

            <div className='infoDisplay' style={{display: isSubmitted ? 'block' : 'none'}}>
                <h1>{name}</h1>
                <h3>{phone}</h3>
                <h3>{email}</h3>
                <h3>{address}</h3>
            </div>

            
            
            <form style={{display: isSubmitted ? 'none' : 'block'}}>
                <h2>General Info</h2>
                <input placeholder='Name' type='text' value={name} onChange={handleSetName} /> <br/>
                <input placeholder='Phone' type='number' value={phone} onChange={handleSetPhone} /> <br/>
                <input placeholder='Email' type='text' value={email} onChange={handleSetEmail}/> <br/>
                <input placeholder='Address' type='text' value={address} onChange={handleSetAddress} /> <br/>
            </form>

            <button onClick={handleClick}>{isSubmitted ? 'Edit' : 'Submit'}</button>

        </div>
    )
}

export default GeneralInfo