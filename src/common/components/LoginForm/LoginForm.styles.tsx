import styled from "styled-components";

export const Container = styled.div`
  max-width: calc(320 / 16 * 1rem);
  position: relative;
  top: 50%;
  transform: translateY(-60%);
  margin: 0 auto;

  h1,
  h2 {
    text-align: center;
    line-height: 1em;
    font-weight: var(--font-weight-medium);
  }
`;

export const Heading = styled.h1`
  font-size: 2rem;
`;

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  margin-top: 12px; ;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 36px 0 0;

  label {
    &:not(:first-child) {
      margin-top: 22px;
    }
  }

  button {
    margin-top: 22px;
  }
`;

export const Details = styled.div`
  text-align: center;
  margin-top: 36px;
  color: var(--color-gray-500);
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);

  a {
    text-decoration: none;
    line-height: 1em;
    color: var(--color-blue-400);
    font-weight: var(--font-weight-medium);
  }
`;

export const Divider = styled.div`
  margin: 24px 0;
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    color: var(--color-gray-500);
  }

  &::before,
  &::after {
    flex: 1;
    content: " ";
    display: block;
    height: 1px;
    background-color: var(--color-gray-300);
  }
`;
