import React from "react";
import { ButtonContainer } from "./style";

interface ButtonProps {
  label: string;
  type?: "operator" | "function" | "result";
  isZero?: boolean;
  onClick?: () => void;
}

export const Btn: React.FC<ButtonProps> = ({label, type, isZero, onClick}) => {
  return (
    <ButtonContainer
      className={`${type ?? ""} ${isZero ? "zero" : ""}`}
      onClick={onClick}
    >
      <div className="buttonContainer">{label}</div>
    </ButtonContainer>
  );
};
