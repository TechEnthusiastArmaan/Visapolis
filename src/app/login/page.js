// src/app/login/page.js
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { login } from './actions';

function LoginButton() {
	const { pending } = useFormStatus();
	return <button type="submit" disabled={pending} style={{ width: '100%', padding: '10px', backgroundColor: '#392757', color: 'white' }}>
        {pending ? 'Logging in...' : 'Login'}
    </button>;
}

export default function LoginPage() {
    const [state, action] = useFormState(login, null);

    return (
        <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Admin Login</h2>
            <form action={action}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Email</label>
                    <input type="email" name="email" required style={{ width: '100%', padding: '8px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Password</label>
                    <input type="password" name="password" required style={{ width: '100%', padding: '8px' }}/>
                </div>
                {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
                <LoginButton />
            </form>
        </div>
    );
}