import styled from 'styled-components';

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;

export const Input = styled.input`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  border-bottom: 1px dashed ${p => p.theme.colors.white};
`;
