interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion
}
interface Direccion {
    pais: string;
    casa: string;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombreCompleto: 'Ramon',
        edad: 21,
        direccion: {
            pais: 'Nicaragua',
            casa: 'Blanca'
        }
    }
    return (
        <>
            <h3>Objetos Literales</h3>
            <code>
                <pre>{JSON.stringify(persona, null, 2)}</pre>
            </code>

        </>
    )
}
