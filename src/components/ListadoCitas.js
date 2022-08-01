import Cita from './components/Cita'

export default function ListadoCitas(citas) {
    return(
        citas.forEach(cita => {
            <Cita mascota="cita.mascota" dueño="cita.dueño" fecha="cita.fecha" hora="cita.hora" sintomas="cita.sintomas"></Cita>
        })
    )
}

const crearCita = () => {
    
}