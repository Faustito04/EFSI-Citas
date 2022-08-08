import Cita from './Cita'

export default function ListadoCitas({citas, setCitas}) {
    return(
        citas.map((cita, i) => <Cita
            {...cita}
            key={i}
            delete={() => {
                const copy = [...citas]
                copy.splice(i, 1)
                setCitas(copy)
            }}
        />)
    )
}
