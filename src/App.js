import { useState } from "react"
import Formulario from './components/Formulario';
import ListadoCitas from './components/ListadoCitas';

export default function App() {
    const [citas, setCitas] = useState([{
    mascota: "Nina",
    owner: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  }])

  return (
      <>
        <h1>ADMINISTRADOR DE PACIENTES</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario setCitas={setCitas}></Formulario>
            </div>
            <div className="one-half column">
              <h2>Administra tus citas</h2>
              <ListadoCitas citas={citas} setCitas={setCitas}></ListadoCitas>
            </div>
          </div>
        </div>
      </>
    )
}
