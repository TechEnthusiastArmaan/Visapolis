// src/app/admin/bookings/DeleteButton.js
'use client';

import { deleteBooking } from './actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" disabled={pending} style={{ color: 'red', background: 'none', border: '1px solid red', cursor: 'pointer', padding: '5px 10px', borderRadius: '5px' }}>
            {pending ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default function DeleteButton({ bookingId }) {
    const handleDelete = async (formData) => {
        const confirmed = window.confirm('Are you sure you want to delete this booking?');
        if (confirmed) {
            await deleteBooking(bookingId);
        }
    };

    return (
        <form action={handleDelete}>
            <SubmitButton />
        </form>
    );
}