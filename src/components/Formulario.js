import { useState } from "react"

export default function Formulario({ setCitas }) {
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")
    const [fecha, setFecha] = useState("")
    const [hora, setHora] = useState("")
    const [sintomas, setSintomas] = useState("")
    
    const Submit = (a) => {
        a.preventDefault();
        setCitas(prev => [...prev, {
            mascota,
            dueño,
            fecha,
            hora,
            sintomas
        }])
        setMascota("")
        setDueño("")
        setFecha("")
        setHora("")
        setSintomas("")
    }

    return(
        <>
            <div class="one-half column">
                <h2>Crear mi Cita</h2>
                <form onSubmit={Submit}>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" class="u-full-width" placeholder="Nombre Mascota" value=""></input>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" class="u-full-width" placeholder="Nombre dueño de la mascota" value=""></input>
                    <label>Fecha</label>
                    <input type="date" name="fecha" class="u-full-width" value=""></input>
                    <label>hora</label>
                    <input type="time" name="hora" class="u-full-width" value=""></input>
                    <label>Sintomas</label>
                    <textarea name="sintomas" class="u-full-width"></textarea>
                    <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
                </form>
            </div>
        </>
    )
}