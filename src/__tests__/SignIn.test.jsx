import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import SignIn from 'Components/PublicApp/SignInPage/SignIn';

describe('SignIn form', () => {
  const mock = { email: 'john.doe@email.com', password: '1234' };
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(<SignIn onSubmit={onSubmit} />);
  });

  it('displays alert message on empty inputs', async () => {
    const submit = screen.getByRole('button', /sign in/i);
    user.click(submit);

    const alert = await screen.findAllByRole('alert');
    expect(alert).toHaveLength(2);
    expect(alert[0].textContent).toMatchInlineSnapshot(`"Enter a valid email"`);
    expect(alert[1].textContent).toMatchInlineSnapshot(
      `"Enter a valid password"`
    );
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  it('displays alert message on invalid email', async () => {
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', /sign in/i);

    user.type(email, 'invalid email');
    user.type(password, mock.password);
    user.click(submit);

    const alert = await screen.findAllByRole('alert');
    expect(alert).toHaveLength(1);
    expect(alert[0].textContent).toMatchInlineSnapshot(
      `"email must be a valid email"`
    );
    await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
  });

  it('calls onSubmit when inputs are valid', async () => {
    const email = screen.getByLabelText(/email/i);
    const password = screen.getByLabelText(/password/i);
    const submit = screen.getByRole('button', /sign in/i);

    user.type(email, mock.email);
    user.type(password, mock.password);
    user.click(submit);

    await waitFor(() => expect(onSubmit).toHaveBeenCalledWith(mock));

    /* ---------- EQUIVALENT ---------- */
    // await act(async () => {
    //   fireEvent.change(email, { target: { value: mock.email } });
    //   fireEvent.change(password, { target: { value: mock.password } });
    // });
    // await act(async () => {
    //   fireEvent.click(submit);
    // });
    // expect(onSubmit).toHaveBeenCalledWith(mock);
  });
});
