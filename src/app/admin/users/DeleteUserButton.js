// src/app/admin/users/DeleteUserButton.js
'use client';

// This component is a client component because it uses the browser's 'window.confirm' popup.

export default function DeleteUserButton({ userId, deleteAction }) {
  
  const handleDelete = async () => {
    // Show a confirmation dialog before proceeding.
    if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      try {
        await deleteAction(userId);
        // The page will be revalidated by the server action upon success.
      } catch (error) {
        // You could add more sophisticated error handling here, like a toast notification.
        alert('Failed to delete user.');
        console.error('Delete user error:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger btn-sm">
      Delete
    </button>
  );
}