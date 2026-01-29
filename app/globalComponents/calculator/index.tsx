'use client'
import React, { useState } from "react";
import { Btn } from "../btn";
import { CalculatorContent } from "./style";

export const Calculator: React.FC = () => {
    
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [secondValue, setSecondValue] = useState(false);
  const [results, setResults] = useState("");
  const [error, setError] = useState(false);

    const formatToNumber = (value: string) => Number(value.replace(",", "."));

    const number = (value: string) => {
        if (error) {
            setDisplay(value);
            setResults("");
            setError(false);
            return;
        }

        if (secondValue) {
            setDisplay(value);
            setSecondValue(false);
            return;
        }

        setDisplay(display === "0" ? value : display + value);
    };

    const handleVirgula = () => {
        if (error) return;
        if (!display.includes(",")) {
            setDisplay(display + ",");
        }
    };

    const handleClear = () => {
        setDisplay("0");
        setResults("");
        setFirstValue(null);
        setOperator(null);
        setSecondValue(false);
        setError(false);
    };

    const handleDelete = () => {
        if (error) {
            handleClear();
            return;
        }
        setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    };

    const calculate = (first: number, second: number, operator: string): number | null => {
        switch (operator) {
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
                return null;
        }
    };

    const handleOperator = (op: string) => {
        if (error) return;

        const currentValue = formatToNumber(display);

        if (firstValue === null) {
            setFirstValue(currentValue);
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

        setResults(`${results} ${display} =`);
        setDisplay(String(result).replace(".", ","));
        setFirstValue(null);
        setOperator(null);
        setSecondValue(false);
    };

  return (
    <CalculatorContent>
      <div className="calculatorContent">
        <div className="calculatorContent__display">
            {results && (
                <div className="calculatorContent__display__history">
                {results}
                </div>
            )}
            <div className="calculatorContent__display__main">
                {display}
            </div>
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
