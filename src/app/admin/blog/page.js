// src/app/admin/blog/page.js
import Link from 'next/link';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import DeletePostButton from './DeletePostButton'; // A confirmation button

async function getPosts() {
    await dbConnect();
    const posts = await Blog.find({}).sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(posts));
}

export default async function ManageBlogPage() {
    const posts = await getPosts();

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Manage Blog Posts</h1>
                <Link href="/admin/blog/new" style={{ padding: '10px 15px', backgroundColor: '#392757', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    + New Post
                </Link>
            </div>

            <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'left' }}>Title</th>
                        <th style={{ textAlign: 'left' }}>Status</th>
                        <th style={{ textAlign: 'left' }}>Created At</th>
                        <th style={{ textAlign: 'left' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post._id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '10px 0' }}>{post.title}</td>
                            <td>{post.isPublished ? 'Published' : 'Draft'}</td>
                            <td>{new Date(post.createdAt).toLocaleDateString()}</td>
                            <td>
                                <Link href={`/admin/blog/edit/${post._id}`} style={{ marginRight: '10px' }}>Edit</Link>
                                <DeletePostButton postId={post._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}