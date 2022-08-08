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
            <div className="one-half column">
                <h2>Crear mi Cita</h2>
                <form onSubmit={Submit}>
                    <label>Nombre Mascota</label>
                    <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota" value={mascota} onChange={e => setMascota(e.target.value)} required></input>
                    <label>Nombre Dueño</label>
                    <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota" value={dueño} onChange={e => setDueño(e.target.value)} required></input>
                    <label>Fecha</label>
                    <input type="date" name="fecha" className="u-full-width" value={fecha} onChange={e => setFecha(e.target.value)} required></input>
                    <label>hora</label>
                    <input type="time" name="hora" className="u-full-width" value={hora} onChange={e => setHora(e.target.value)} required></input>
                    <label>Sintomas</label>
                    <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={e => setSintomas(e.target.value)} required></textarea>
                    <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
                </form>
            </div>
        </>
    )
}