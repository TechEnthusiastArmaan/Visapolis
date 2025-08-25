// src/app/admin/bookings/DeleteButton.js
'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="btn btn-gradient-danger btn-sm" disabled={pending}>
            {pending ? 'Deleting...' : 'Delete'}
        </button>
    );
}

export default function DeleteButton({ bookingId, deleteAction }) {
    // We bind the ID to the action
    const deleteBookingWithId = deleteAction.bind(null, bookingId);
    
    const handleDelete = (event) => {
        if (!confirm('Are you sure you want to delete this booking?')) {
            event.preventDefault();
        }
    };

    return (
        // Using a form is the standard way to invoke a server action that modifies data.
        <form action={deleteBookingWithId} onSubmit={handleDelete}>
            <SubmitButton />
        </form>
    );
}