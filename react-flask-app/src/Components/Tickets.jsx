import '../App.css';
import React,{useState, useEffect} from 'react'; 
import axios from "axios";



function Tickets() {

  const [tickets, setTickets] = useState([]);

  function getTickets() {
    axios({
      method: "GET",
      url: '/tickets'
    })
    .then((response) => {
      const res1 = JSON.stringify(response.data)
      const res = JSON.parse(res1)
      console.log(res)
      console.log(res.length)
      console.log(typeof res) 
      setTickets(res)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
        }
      })}

    console.log(tickets)


  return (
    <div className="App">
      <header className="App-header">
        <p>To get your tickets details: </p><button onClick={getTickets}>Click me</button>
        {
          tickets && <div>
            {
              tickets.map(function(ticket){
                for(let i = 0; i < tickets.length; i++){
                  return ('ID de empleado: ' + ticket[i] + ' ' + 'Nombre: ' + ticket[i+1] + ' ' + 'Correo: ' + ' ' + ticket[i+2] + ' ' + 'Area: ' + ticket[i+3] + ' ' + 'Tipo: ' + ticket[i+4])
                }
              }).join(' ')
            }
          </div>
        }
      </header>
    </div>
  );
}

export default Tickets;