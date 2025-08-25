// src/app/admin/blog/page.js
import Link from 'next/link';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import DeletePostButton from './DeletePostButton'; // Your component for the delete button

// --- THIS SERVER-SIDE LOGIC REMAINS UNCHANGED ---
async function getPosts() {
    await dbConnect();
    const posts = await Blog.find({}).sort({ createdAt: -1 });
    // This serialization is crucial for passing data from Server to Client Components.
    return JSON.parse(JSON.stringify(posts));
}
// --------------------------------------------------

export default async function ManageBlogPage() {
    const posts = await getPosts();

    return (
        // Use a React Fragment as the root, as we have multiple sibling elements
        <>
            {/* 1. Page Header (from basic-table.html) */}
            <div className="page-header">
                <h3 className="page-title">
                    {/* The template often uses icons in headers, which is a nice touch */}
                    <span className="page-title-icon bg-gradient-primary text-white me-2">
                        <i className="mdi mdi-post-outline"></i>
                    </span> 
                    Blog Management
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/admin/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Manage Posts</li>
                    </ol>
                </nav>
            </div>

            {/* 2. Main Content Card (from basic-table.html) */}
            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            {/* Card header containing the title and the "New Post" button */}
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="card-title">All Blog Posts</h4>
                                <Link href="/admin/blog/new" className="btn btn-gradient-primary btn-fw">
                                    + New Post
                                </Link>
                            </div>

                            {/* The table now sits inside a responsive container */}
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th> Title </th>
                                            <th> Status </th>
                                            <th> Created At </th>
                                            <th className="text-end"> Actions </th> {/* Align actions to the right */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {posts.map(post => (
                                            <tr key={post._id}>
                                                <td>{post.title}</td>
                                                <td>
                                                    {/* Using the template's badges for a better UI */}
                                                    {post.isPublished 
                                                        ? <label className="badge badge-success">Published</label>
                                                        : <label className="badge badge-warning">Draft</label>
                                                    }
                                                </td>
                                                <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                                                <td className="text-end">
                                                    {/* Applying the template's button styles to actions */}
                                                    <Link href={`/admin/blog/edit/${post._id}`} className="btn btn-gradient-info btn-sm me-2">Edit</Link>
                                                    
                                                    {/* IMPORTANT: Make sure your DeletePostButton component's button also uses these classes! */}
                                                    <DeletePostButton postId={post._id} />
                                                </td>
                                            </tr>
                                        ))}
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