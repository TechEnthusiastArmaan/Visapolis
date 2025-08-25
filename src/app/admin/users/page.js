// src/app/admin/users/page.js
import Link from 'next/link';
import { getUsers, deleteUser } from './actions';
import DeleteUserButton from './DeleteUserButton';

export default async function ManageUsersPage() {
    const users = await getUsers();

    return (
        <>
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                        <i className="mdi mdi-account-group"></i>
                    </span> User Management
                </h3>
            </div>
            
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="card-title">System Users</h4>
                                <Link href="/admin/users/new" className="btn btn-gradient-primary btn-fw">
                                    + Add New User
                                </Link>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> Name </th>
                                            <th> Email </th>
                                            <th> Role </th>
                                            <th> Created At </th>
                                            <th className="text-end"> Actions </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.length > 0 ? (
                                            users.map(user => (
                                                <tr key={user._id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>
                                                        <label className={`badge ${user.role === 'admin' ? 'badge-gradient-success' : 'badge-gradient-info'}`}>{user.role}</label>
                                                    </td>
                                                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                                                    <td className="text-end">
                                                        <Link href={`/admin/users/edit/${user._id}`} className="btn btn-gradient-info btn-sm me-2">
                                                            Edit
                                                        </Link>
                                                        <DeleteUserButton userId={user._id.toString()} deleteAction={deleteUser} />
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
                    </div>
                </div>
            </div>
        </>
    );
}