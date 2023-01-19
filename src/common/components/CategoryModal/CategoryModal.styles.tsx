import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  button {
    margin-top: 12px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
  position: relative;
`;

export const EmojiContainer = styled.div`
  display: grid;
  place-items: center;
  background-color: var(--color-gray-100);
  padding: 4px;
  border-radius: 4px;
  min-width: 32px;
  height: 32px;
`;

export const EmojiPickerContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
`;
