// src/app/admin/contact-queries/QueriesTable.js
'use client';

import { useState } from 'react';

// A simple client component for the delete button
const DeleteButton = ({ submissionId, deleteAction }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (confirm('Are you sure you want to delete this query?')) {
            setIsDeleting(true);
            const result = await deleteAction(submissionId);
            if (!result.success) {
                alert(result.message || 'Failed to delete query.');
                setIsDeleting(false);
            }
            // The revalidatePath in the server action will handle the UI update
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
    // We don't need a local state for submissions because revalidatePath will refresh the whole page
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
                    {initialSubmissions.length > 0 ? (
                        initialSubmissions.map(sub => (
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