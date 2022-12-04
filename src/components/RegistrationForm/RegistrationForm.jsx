import { useDispatch, useSelector } from 'react-redux';
import { registrationUser } from 'redux/operationSlice';

export const RegistrationForm = () => {
  const error = useSelector(state => state.auth.error);

  console.log(error);
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    dispatch(registrationUser(user));
    form.reset();
  };

  return (
    <>
      <p>
        {
          "name: 'localhost', email: 'localhost4848@mail.com', password: 'local4848'"
        }
      </p>
      {error && <h2>{error}</h2>}

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required="required"
          />
        </label>
        <hr></hr>
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
        <button type="submit">Register </button>
      </form>
    </>
  );
};
