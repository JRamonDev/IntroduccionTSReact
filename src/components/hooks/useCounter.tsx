import { useState } from "react";

export const useCounter = (inicial: number = 0) => {

    const [contador, setcontador] = useState(inicial);

    const acumular = (numero: number) => {
        setcontador(contador + numero);
    }
    return {
        contador,
        acumular

    }

}
