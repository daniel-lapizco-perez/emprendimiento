import '../App.css';
import React,{useState, useEffect} from 'react'; 
import axios from "axios";



function Empleados() {

  const [currentEmployees, setCurrentEmployees] = useState([]);

  function getEmployees() {
    axios({
      method: "GET",
      url: '/empleados'
    })
    .then((response) => {
      const res1 = JSON.stringify(response.data)
      const res = JSON.parse(res1)
      console.log(res)
      console.log(res.length)
      console.log(typeof res) 
      setCurrentEmployees(res)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
        }
      })}

    console.log(currentEmployees)


  return (
    <div className="App">
      <header className="App-header">
        <p>To get your profile details: </p><button onClick={getEmployees}>Click me</button>
        {
          currentEmployees && <div>
            {
              currentEmployees.map(function(employee){
                for(let i = 0; i < currentEmployees.length; i++){
                  return ('ID de empleado: ' + employee[i] + ' ' + 'Nombre: ' + employee[i+1] + ' ' + 'Correo: ' + ' ' + employee[i+2] + ' ' + 'Area: ' + employee[i+3] + ' ' + 'Tipo: ' + employee[i+4])
                }
              }).join(' ')
            }
          </div>
        }
      </header>
    </div>
  );
}

export default Empleados;