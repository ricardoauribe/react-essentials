import React, {useReducer} from "react";


//reducer takes a function and a default value
export function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );
  return(
    <>
      <label htmlFor="checkbox">
        {checked ? "checked" : "not checked"}
      </label>
      <input 
        id="checkbox"
        type="checkbox" 
        value={checked} 
        onChange={toggle} 
      />
    </>
  )
}