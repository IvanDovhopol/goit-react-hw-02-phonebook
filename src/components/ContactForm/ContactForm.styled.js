import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: grid;
  justify-content: center;

  border: 1px solid ${p => p.theme.colors.black};
  border-radius: ${p => p.theme.radii.medium};
`;

export const Input = styled(Field)`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l};
  background-color: inherit;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  border-bottom: 1px dashed ${p => p.theme.colors.white};
`;

export const Label = styled.label`
  font-size: ${p => p.theme.fontSizes.l};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.white};
`;

export const TextError = styled(ErrorMessage)`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.error};
`;
