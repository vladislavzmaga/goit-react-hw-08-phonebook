import { ErrorMessage } from 'components/error.styled';
import {
  FormButton,
  FormInput,
  FormLable,
  Forms,
} from 'components/Form/Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from 'redux/operationSlice';

export const RegistrationForm = () => {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(registration(user));
    form.reset();
  };

  return (
    <>
      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Forms onSubmit={handleSubmit}>
        <FormLable>
          Name
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required="required"
          />
        </FormLable>
        <FormLable>
          Email
          <FormInput
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required="required"
          />
        </FormLable>
        <FormLable>
          Password
          <FormInput
            type="password"
            name="password"
            pattern=".{5,}"
            required="required"
          />
        </FormLable>
        <FormButton type="submit">Register </FormButton>
      </Forms>
    </>
  );
};
