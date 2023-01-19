import * as S from "./Modal.styles";
import type { DialogProps } from "@reach/dialog";
import { X } from "react-feather";

type ModalProps = { title: string } & DialogProps;

export const Modal = ({ title, children, onDismiss, ...props }: ModalProps) => {
  return (
    <S.ModalOverlay onDismiss={onDismiss} {...props}>
      <S.ModalContent aria-label={title}>
        <S.CloseButton onClick={onDismiss}>
          <X />
        </S.CloseButton>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
