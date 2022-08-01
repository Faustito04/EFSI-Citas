import React from 'react';
import ReactDOM from 'react-dom/client';
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';

let listadoCitas = []

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
)

const agregarCita = (mascota, dueño, fecha, hora, sintomas) => {
  listadoCitas.push({mascota, dueño, fecha, hora, sintomas})
}