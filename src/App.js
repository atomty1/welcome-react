import React, {  useState } from "react";

const App = () => {

  let [nameList, setNameList] = useState([]);
  // Component to component interaction,
  // props,
  // useEffect
  const myFunc = val => {
   setNameList([...nameList, val]);
  }


  return (
    <>

      <AddPerson changeName={myFunc} />

      {nameList.length > 0 ? <table border="1">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Name</th>
          
          </tr>
        </thead>
        <tbody>
          {nameList.map((userName, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{userName}</td>
            

            </tr>
          ))}
        </tbody>
      </table>
        : <div>No user found</div>}



    </>
  );
}

const AddPerson = ({ changeName }) => {
  let [name, setName] = useState("");
  const addName = ()=>{
    changeName(name);
    setName("");
  }

  return (
    <>
      <input value={name} onInput={e => setName(e.target.value)} />
      <button onClick={addName}>add name</button>
    </>

  );
}
// const DeleteButton = ()=>{
//   return <button>delete</button>
// }
export default App;

