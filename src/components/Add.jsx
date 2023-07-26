import { useState } from "react"

export const Add = ({onNewCategory}) => {
    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({target})=>{
      setinputValue(target.value)
    }
  
    const onSubmit = (event)=>{
        event.preventDefault();
        //trim elimina los espacios en blanco en ambos extremos del string
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim())
        setinputValue('');


       // setCategories(categories => [inputValue, ...categories])
    }

  return (
    <form onSubmit={onSubmit }>
      <input 
        type="text"
        placeholder="search gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
