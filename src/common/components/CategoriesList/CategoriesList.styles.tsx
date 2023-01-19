import { UnstyledButton } from "@components/Button";
import styled from "styled-components";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

export const InnerContainer = styled(MaxWidthWrapper)`
  color: var(--color-gray-500);
  padding-bottom: 24px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: var(--font-weight-medium);
`;

export const CategoriesContainer = styled.ul`
  margin-top: 8px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CategoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const InfoContainer = styled.div`
  margin-right: auto;

  p {
    font-size: 0.875rem;
    line-height: 1em;
    color: var(--color-gray-800);
    font-weight: var(--font-weight-medium);

    &:not(:first-of-type) {
      font-size: 0.75rem;
      color: var(--color-gray-500);
      margin-top: 4px;
    }
  }
`;

export const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: var(--color-gray-200);
  border-radius: 8px;
  display: grid;
  place-items: center;
`;

export const IconButton = styled(UnstyledButton)`
  --icon-size: 18px;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  border: 1px solid var(--color-gray-200);

  svg {
    stroke: var(--color-gray-400);
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;
