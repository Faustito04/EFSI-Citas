<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';

let listadoCitas = []

const [citas, setCitas] = useState([{
  mascota: "Nina",
  owner: "Martin",
  fecha: "2021-08-05",
  hora: "08:20",
  sintomas: "Le duele la pierna"
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div class="container">
      <div class="row">
        <div class="one-half column">
          <Formulario></Formulario>
        </div>
        <div class="one-half column">
          <h2>Administra tus citas</h2>
          <ListadoCitas citas={listadoCitas}></ListadoCitas>
        </div>
      </div>
    </div>
  </React.StrictMode>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';

let listadoCitas = []

const [citas, setCitas] = useState([{
  mascota: "Nina",
  owner: "Martin",
  fecha: "2021-08-05",
  hora: "08:20",
  sintomas: "Le duele la pierna"
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div class="container">
      <div class="row">
        <div class="one-half column">
          <Formulario></Formulario>
        </div>
        <div class="one-half column">
          <h2>Administra tus citas</h2>
          <ListadoCitas citas={listadoCitas}></ListadoCitas>
        </div>
      </div>
    </div>
  </React.StrictMode>
>>>>>>> d66edab3bfaf2b7f54be590b7cdbaf31ec4a7d2c
)