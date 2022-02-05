import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');  //useState() undefined
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }

    //handleSubmit, el primer argumento es el event. para prevenir que se recargue la pagina
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 0)
            setCategories(c => [inputValue, ...c]);
        else
            alert("Category is a required field, please complete data");
        

    }

    return (
      <form onSubmit={handleSubmit}>    
        <input 
            className='form-control'
            type='text'
            value={ inputValue }
            onChange={ handleInputChange }/>
      </form>
    );
};


AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

