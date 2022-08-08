export default function Cita(cita) {
    return(
        <>
            <div className="cita">
                <p>Mascota: {cita.mascota}</p>
                <p>Dueño: {cita.dueño}</p>
                <p>Fecha: {cita.fecha}</p>
                <p>Hora: {cita.hora}</p>
                <p>Sintomas: {cita.sintomas}</p>
                <button onClick={cita.delete} className="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    )
}