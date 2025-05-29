import { useState } from 'react'

function GeneralInfo(){
    const [name, setName] = useState();

    function handleSetName(e){
        setName(e.target.value)
    }

    return(
        <>
            <p>Name: {name}</p>
            <input type='text' value={name} onChange={handleSetName} />
        </>
    )
}

export default GeneralInfo