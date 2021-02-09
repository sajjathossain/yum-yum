import React from 'react'

// Css Imports
import '../CSS/InputField.css'

const InputField = ({theIngredient, fetchFood}) => {
    return (
        <form className="container" onSubmit={fetchFood} >
            <input type="text" name="ingredient" className="form-control" placeholder="Enter any ingredient (example: beef, chicken etc)*" onChange={theIngredient} />
            <input type="submit" value="Search" className="searchBTN btn btn-md" />            
        </form>
    )
}

export default InputField
