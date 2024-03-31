import { useState } from 'react';
import Soma from "./Soma";

function SomaComponent() {
    // Primeiro valor
    const [value1, setValue1] = useState('');

    // Segundo Valor
    const [value2, setValue2] = useState('');

    // Resultado da soma
    const [resultado, setResultado] = useState('');

    // Captura o primeiro valor
    const handleValue1Change = (e) => {
        setValue1(e.target.value);
    };


    // Captura o segundo valor
    const handleValue2Change = (e) => {
        setValue2(e.target.value);
    };

    const handleSomaClick = () => {
        // Convertendo ambos os números para inteiro
        const num1 = parseInt(value1);
        const num2 = parseInt(value2);

        // A função da operação
        if (!isNaN(num1) && !isNaN(num2)) {
            const resultadoSoma = Soma(num1, num2);
            setResultado(resultadoSoma);
        } else {
            // Se não receber os valores válidos
            setResultado('Por favor, insira números válidos.');
        }
    };

    return (
        // Front-End
        <div>
            <input
                type="number"
                value={value1}
                onChange={handleValue1Change}
                placeholder="Digite o primeiro número"
            />
            <input
                type="number"
                value={value2}
                onChange={handleValue2Change}
                placeholder="Digite o segundo número"
            />
            <button onClick={handleSomaClick}>Calcular Soma</button>
            <p>Resultado: {resultado}</p>
        </div>
    );
}

export default SomaComponent;
