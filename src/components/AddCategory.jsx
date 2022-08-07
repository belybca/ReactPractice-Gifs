import React,{useState} from "react";
import { PropTypes } from "prop-types";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (event) => {
    setInputValue(event.target.value);
   // console.log(event.target.value);
  }
  const onSubmit =(event) => {
    event.preventDefault();
    const newValue = inputValue.trim();
    if(newValue.length <=1) return;
   onNewCategory(newValue);
    setInputValue('');
  }
  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
            type="text" 
            palceholder="Buscar Gifs" 
            value={ inputValue } 
            onChange = {onInputChange}
            />
    </form>
  );
};


AddCategory.prototypes = {
  onNewCategory: PropTypes.func.isRequired,
}