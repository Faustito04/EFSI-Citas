export default function Cita(mascota, dueño, fecha, hora, sintomas) {
    return(
        <>
            <div class="cita">
                <p>Mascota: {mascota}</p>
                <p>Dueño: {dueño}</p>
                <p>Fecha: {fecha}</p>
                <p>Hora: {hora}</p>
                <p>Sintomas: {sintomas}</p>
                <button class="button elimnar u-full-width">Eliminar ×</button>
            </div>
        </>
    )
}