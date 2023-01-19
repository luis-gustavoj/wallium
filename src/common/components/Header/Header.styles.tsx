import styled from "styled-components";
import { UnstyledButton } from "@components/Button";
import { MaxWidthWrapper } from "../MaxWidthWrapper";

export const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;

  nav {
    flex: 1;
  }
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
`;

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  gap: 16px;
`;

export const NavLink = styled.a`
  --background-color: transparent;
  --color: var(--color-gray-600);

  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1em;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-regular);
  background-color: var(--background-color);
  color: var(--color);

  &[data-active="true"] {
    --background-color: var(--color-blue-500);
    --color: #ffffff;
    font-weight: var(--font-weight-medium);
  }
`;

export const IconButton = styled(UnstyledButton)`
  --icon-size: 18px;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  background-color: var(--color-gray-200);

  svg {
    stroke: var(--color-gray-400);
    width: var(--icon-size);
    height: var(--icon-size);
  }

  &:not(:first-of-type) {
    margin-left: 16px;
  }
`;
