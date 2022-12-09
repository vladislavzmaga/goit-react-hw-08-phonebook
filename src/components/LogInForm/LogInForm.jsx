import {
  FormButton,
  FormInput,
  FormLable,
  Forms,
} from 'components/Form/Form.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operationSlice';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const user = {
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(logIn(user));
    form.reset();
  };

  return (
    <>
      <Forms onSubmit={handleSubmit}>
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
        <FormButton type="submit">log in </FormButton>
      </Forms>
    </>
  );
};
