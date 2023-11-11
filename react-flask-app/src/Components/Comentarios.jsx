import '../App.css';
import React,{useState, useEffect} from 'react'; 
import axios from "axios";



function Comentarios() {

  const [comentarios, setComentarios] = useState([]);

  function getComentarios() {
    axios({
      method: "GET",
      url: '/comentarios'
    })
    .then((response) => {
      const res1 = JSON.stringify(response.data)
      const res = JSON.parse(res1)
      console.log(res)
      console.log(res.length)
      console.log(typeof res) 
      setComentarios(res)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
        }
      })}

    console.log(comentarios)


  return (
    <div className="App">
      <header className="App-header">
        <p>To get your comments details: </p><button onClick={getComentarios}>Click me</button>
        {
          comentarios && <div>
            {
              comentarios.map(function(comentario){
                for(let i = 0; i < comentarios.length; i++){
                  return ('ID de empleado: ' + comentario[i] + ' ' + 'Nombre: ' + comentario[i+1] + ' ' + 'Correo: ' + ' ' + comentario[i+2] + ' ' + 'Area: ' + comentario[i+3] + ' ' + 'Tipo: ' + comentario[i+4])
                }
              }).join(' ')
            }
          </div>
        }
      </header>
    </div>
  );
}

export default Comentarios;