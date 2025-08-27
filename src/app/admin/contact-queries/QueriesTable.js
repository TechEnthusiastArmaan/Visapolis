// src/app/admin/contact-queries/QueriesTable.js
'use client';

import { useState } from 'react';

// A simple client component for the delete button, now with SweetAlert
const DeleteButton = ({ submissionId, deleteAction, onDeleted }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        const willDelete = await window.swal({
            title: "Are you sure?",
            text: "This contact query will be permanently deleted.",
            icon: "warning",
            buttons: ["Cancel", "Yes, delete it!"],
            dangerMode: true,
        });

        if (willDelete) {
            setIsDeleting(true);
            const result = await deleteAction(submissionId);
            if (result.success) {
                // Call the onDeleted callback to update the UI instantly
                if (onDeleted) {
                    onDeleted(submissionId);
                }
                // The revalidatePath will handle the long-term data refresh
            } else {
                window.swal("Error!", result.message || 'Failed to delete query.', "error");
            }
            setIsDeleting(false); // Reset deleting state
        }
    };

    return (
        <button
            onClick={handleDelete}
            className="btn btn-gradient-danger btn-sm"
            disabled={isDeleting}
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    );
};


export default function QueriesTable({ initialSubmissions, deleteAction }) {
    // Add a local state to manage the list of submissions for instant UI updates
    const [submissions, setSubmissions] = useState(initialSubmissions);

    // A handler to filter the local state when a query is deleted
    const handleQueryDeleted = (deletedId) => {
        setSubmissions(currentSubmissions => 
            currentSubmissions.filter(sub => sub._id !== deletedId)
        );
    };

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th> Received On </th>
                        <th> Name </th>
                        <th> Email </th>
                        <th> Phone </th>
                        <th style={{ minWidth: '300px' }}> Message </th>
                        <th className="text-end"> Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over the local 'submissions' state variable */}
                    {submissions.length > 0 ? (
                        submissions.map(sub => (
                            <tr key={sub._id}>
                                <td>{new Date(sub.createdAt).toLocaleString()}</td>
                                <td>{sub.name}</td>
                                <td>{sub.email}</td>
                                <td>{sub.phone || 'N/A'}</td>
                                <td className="text-wrap">{sub.message}</td>
                                <td className="text-end">
                                    <DeleteButton
                                        submissionId={sub._id.toString()}
                                        deleteAction={deleteAction}
                                        onDeleted={handleQueryDeleted} // Pass the handler as a prop
                                    />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">No submissions yet.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}