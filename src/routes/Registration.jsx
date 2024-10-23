import { Form } from 'react-router-dom';
import { z } from 'zod';

const RegistrationSchema = z.object({
  email: z
    .string()
    .email('invalid-email')
    .transform((email) => email.toLowerCase()),
  password: z.string().min(8, 'password-to-short'),
});

export const action = async ({ request }) => {
  const formData = await request.formData();
  const result = await RegistrationSchema.safeParseAsync({
    email: formData.get('username'),
    password: formData.get('password'),
  });

  if (!result.success) {
    console.error(result.error);
    return null;
  }

  const { email, password } = result.data;
  console.log('EMAIL AND PASSWORD: ', email, password);
  console.log('TO BE CONTINUED!!!!');
  return null;
};

const Registration = () => {
  return (
    <>
      <h2>Register for cool stuff</h2>
      <Form action='/register' method='POST'>
        <label>
          Your Email Address
          <input
            name='username'
            type='email'
            placeholder='you@supercoolhuman.com'
            autoComplete='email'
            required
          />
        </label>
        <label>
          Password
          <input
            name='password'
            type='password'
            placeholder='s0m3HARD2GUESS!Passw0rd!'
            autoComplete='password'
            required
          />
        </label>
        <button type='submit'>Register</button>
      </Form>
    </>
  );
};

export default Registration;