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
      <p>
        'name: 'localhost', email: 'localhost4848@mail.com', password:
        'local4848''
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required="required"
          />
        </label>
        <hr></hr>
        <label>
          Password
          <input
            type="password"
            name="password"
            pattern=".{5,}"
            required="required"
          />
        </label>
        <hr></hr>
        <button type="submit">log in </button>
      </form>
    </>
  );
};
