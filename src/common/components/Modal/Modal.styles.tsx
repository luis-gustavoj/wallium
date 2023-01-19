import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { UnstyledButton } from "../Button";

export const ModalOverlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray-900-alpha);
`;

export const ModalContent = styled(DialogContent)`
  position: relative;
  width: min(100%, 400px);
  padding: 24px;
  background: var(--color-white);
  border-radius: 8px;
`;

export const CloseButton = styled(UnstyledButton)`
  padding: 16px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 8px;
  right: 8px;
  color: var(--color-gray-800);
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1em;
  margin-bottom: 12px;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-500);
`;

export const Content = styled.div``;
