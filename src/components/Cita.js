export default function Cita(cita) {
    return(
        <>
            <div class="cita">
                <p>Mascota: {cita.mascota}</p>
                <p>Dueño: {cita.dueño}</p>
                <p>Fecha: {cita.fecha}</p>
                <p>Hora: {cita.hora}</p>
                <p>Sintomas: {cita.sintomas}</p>
                <button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    )
}