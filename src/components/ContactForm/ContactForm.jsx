import { Formik } from 'formik';
import { TextError, StyledForm, Input, Label } from './ContactForm.styled';
import { Btn } from 'components/App/App.styled';
import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

const initialValues = {
  name: '',
  number: '+' + 380,
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = ({ name, number }, { resetForm }) => {
    onSubmit(name, number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <TextError name="name" component="div" />
        </Label>

        <br />

        <Label>
          Number
          <Input type="tel" name="number" />
          <TextError name="number" component="div" />
        </Label>

        <br />
        <Btn type="sumbit">Add contact</Btn>
      </StyledForm>
    </Formik>
  );
};
