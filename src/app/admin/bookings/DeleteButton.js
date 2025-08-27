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

export default function DeleteButton({ bookingId, deleteAction, onDeleted }) {
    const deleteBookingWithId = deleteAction.bind(null, bookingId);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        // This makes the swal function globally available
        // if you've added the script in your layout
        const willDelete = await swal({
            title: "Are you sure?",
            text: "This booking will be permanently deleted.",
            icon: "warning",
            buttons: ["Cancel", "Delete"],
            dangerMode: true,
        });

        if (willDelete) {
            // If the user confirms, call the server action
            const result = await deleteBookingWithId(new FormData());
            
            // RevalidatePath in the action will handle the refresh, 
            // but we can show a success message.
            if (result.success) {
                // Call the onDeleted function passed from the parent table
                // This will tell the table to update its own state immediately.
                if (onDeleted) {
                    onDeleted(bookingId);
                }
                
                // You can keep the success message or remove it, as the row will now disappear instantly
                window.swal("Deleted!", "The booking has been successfully removed.", "success");
            } else {
                 window.swal("Error!", result.message || "Failed to delete the booking.", "error");
            }
        }
    };

    return (
        // Using a form is the standard way to invoke a server action that modifies data.
        <form action={deleteBookingWithId} onSubmit={handleSubmit}>
    <SubmitButton />
</form>
    );
}