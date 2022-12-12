import styled from 'styled-components';

export const Btn = styled.button`
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.medium};
  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.accent};
  }
`;
