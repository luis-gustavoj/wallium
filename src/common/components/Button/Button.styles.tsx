import styled from "styled-components";

type UnstyledButtonProps = {
  display?: "block" | "inline-block";
};

export const UnstyledButton = styled.button<UnstyledButtonProps>`
  display: ${(props) => props.display || "block"};
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;

export const Button = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  line-height: 1em;
  padding: var(--padding);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size);
  color: var(--color-gray-700);
  background-color: var(--background-color);
  width: var(--width);
  gap: var(--gap);

  > svg {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;
