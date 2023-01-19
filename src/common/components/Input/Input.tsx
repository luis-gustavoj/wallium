import type { ForwardRefRenderFunction, InputHTMLAttributes } from "react";
import { forwardRef } from "react";
import * as S from "./Input.styles";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, id, ...props },
  ref
) => {
  return (
    <>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.Input id={id} ref={ref} {...props} />
    </>
  );
};

export const Input = forwardRef(InputBase);
