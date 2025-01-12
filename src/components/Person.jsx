import React, { useState } from "react";


function Person() {
    const [person, setPerson] = useState({ name: "Clint Eastwood", age: 94 });
  
    const handleIncreaseAge = () => {
      setPerson({ ...person, age: person.age + 1 });
    };

    function CustomInput() {
        const [value, setValue] = useState(person.name);
      
        return (
          <input
            type="text"
            value={value}
            onChange={(event) => {setValue(event.target.value); setPerson({...person, name: event.target.value})}}
          />
        );
    }
      
  
    return (
      <>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
        <CustomInput />
      </>
    );
}

export default Person;