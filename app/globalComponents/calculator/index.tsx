'use client'
import React, { useState } from "react";
import { Btn } from "../btn";
import { CalculatorContent } from "./style";

export const Calculator: React.FC = () => {
    
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [secondValue, setSecondValue] = useState(false);
  const [error, setError] = useState(false);
  //histórico da operação e resultado
  const [results, setResults] = useState("");

    //converte vírgula para ponto
    const formatToNumber = (value: string) => Number(value.replace(",", "."));


    const number = (value: string) => {
        //reseta o display e começa novo cálculo
        if (error) {
            setDisplay(value);
            setResults("");
            setError(false);
            return;
        }

        //não concatena os números
        if (secondValue) {
            setDisplay(value);
            setSecondValue(false);
            return;
        }

        //se 0, substitui, se não, concatena
        setDisplay(display === "0" ? value : display + value);
    };

    //tratamento de virgula duplicada
    const handleVirgula = () => {
        if (error) return;
        if (!display.includes(",")) {
            setDisplay(display + ",");
        }
    };

    //tecla C, limpa tudo
    const handleClear = () => {
        setDisplay("0");
        setResults("");
        setFirstValue(null);
        setOperator(null);
        setSecondValue(false);
        setError(false);
    };

    //tecla DEL, limpa caracteres da direita pra esquerda
    const handleDelete = () => {
        //limpa tudo
        if (error) {
            handleClear();
            return;
        }
        //display nunca vazio
        setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    };

    const handleOperator = (op: string) => {
        if (error) return;

        const currentValue = formatToNumber(display);

        //primeiro operador do cáculo
        if (firstValue === null) {
            setFirstValue(currentValue);
            //segundo operador
            } else if (operator) {
            const result = calculate(firstValue, currentValue, operator);

            if (result === null) {
                setDisplay("não é possível dividir por zero");
                setError(true);
                return;
            }

            setFirstValue(result);
            setDisplay(String(result).replace(".", ","));
        }

        setOperator(op);
        setSecondValue(true);
        //atualiza histórico
        setResults(`${display} ${op}`);
    };

    
    const handleEquals = () => {
        if (error || firstValue === null || !operator) return;

        const secondValue = formatToNumber(display);
        const result = calculate(firstValue, secondValue, operator);

        if (result === null) {
            setDisplay("não é possível dividir por zero");
            setError(true);
            return;
        }

        //mostra resultado e reseta cálculo
        setResults(`${results} ${display} =`);
        setDisplay(String(result).replace(".", ","));
        setFirstValue(null);
        setOperator(null);
        setSecondValue(false);
    };

    const calculate = (first: number, second: number, operator: string): number | null => {
        switch (operator) {
            //recebe os numeros e operador, e retorna os resultados calculados
            case "+":
                return first + second;
            case "−":
                return first - second;
            case "×":
                return first * second;
            case "÷":
                if (second === 0) return null;
                return first / second;
            case "%":
                return (first * second) / 100;
            default:
                //null em caso de divisão por 0
                return null;
        }
    };

  return (
    <CalculatorContent>
      <div className="calculatorContent">
        <div className="calculatorContent__display">
            {results && (
                <div className="calculatorContent__display__history">{results}</div>
            )}
            <div className="calculatorContent__display__main">{display}</div>
        </div>

        <div className="calculatorContent__buttonsGrid">
          <Btn label="C" type="function" onClick={handleClear} />
          <Btn label="DEL" type="function" onClick={handleDelete} />
          <Btn label="%" type="operator" onClick={() => handleOperator("%")} />
          <Btn label="÷" type="operator" onClick={() => handleOperator("÷")} />

          <Btn label="7" onClick={() => number("7")} />
          <Btn label="8" onClick={() => number("8")} />
          <Btn label="9" onClick={() => number("9")} />
          <Btn label="×" type="operator" onClick={() => handleOperator("×")} />

          <Btn label="4" onClick={() => number("4")} />
          <Btn label="5" onClick={() => number("5")} />
          <Btn label="6" onClick={() => number("6")} />
          <Btn label="−" type="operator" onClick={() => handleOperator("−")} />

          <Btn label="1" onClick={() => number("1")} />
          <Btn label="2" onClick={() => number("2")} />
          <Btn label="3" onClick={() => number("3")} />
          <Btn label="+" type="operator" onClick={() => handleOperator("+")} />

          <Btn label="0" isZero onClick={() => number("0")} />
          <Btn label="," onClick={handleVirgula} />
          <Btn label="=" type="result" onClick={handleEquals} />
        </div>
      </div>
    </CalculatorContent>
  );
};
