// src/app/admin/users/UserForm.js
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function SubmitButton({ isEditing }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update User' : 'Create User')}
    </button>
  );
}

export default function UserForm({ formAction, user }) {
  const [state, action] = useActionState(formAction, { message: null });
  const isEditing = !!user;

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{isEditing ? `Edit User: ${user.name}` : 'Create New User'}</h3>
      </div>
      <form action={action}>
        <div className="card-body">
          {state?.message && <div className="alert alert-danger">{state.message}</div>}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" name="name" className="form-control" defaultValue={user?.name} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" name="email" className="form-control" defaultValue={user?.email} required />
          </div>

          <div className="mb-3">
            <label htmlFor="role" className="form-label">Role</label>
            <select id="role" name="role" className="form-control" defaultValue={user?.role || 'editor'} required>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" id="password" name="password" className="form-control" />
            {isEditing && <small className="form-text text-muted">Leave blank to keep the current password.</small>}
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" className="form-control" />
          </div>

        </div>
        <div className="card-footer">
          <SubmitButton isEditing={isEditing} />
          <Link href="/admin/users" className="btn btn-secondary ms-2">Cancel</Link>
        </div>
      </form>
    </div>
  );
}