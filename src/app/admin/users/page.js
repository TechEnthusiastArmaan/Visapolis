// src/app/admin/users/page.js
import Link from 'next/link';
import { getUsers, deleteUser } from './actions';
import DeleteUserButton from './DeleteUserButton'; // We will create this next

export default async function ManageUsersPage() {
  const users = await getUsers();

  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h3 className="card-title">Manage Users</h3>
        <Link href="/admin/users/new" className="btn btn-primary btn-sm">
          Add New User
        </Link>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th style={{ width: '120px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td><span className={`badge ${user.role === 'admin' ? 'bg-success' : 'bg-info'}`}>{user.role}</span></td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link href={`/admin/users/edit/${user._id}`} className="btn btn-warning btn-sm me-2">
                      Edit
                    </Link>
                    <DeleteUserButton userId={user._id} deleteAction={deleteUser} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">No users found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}