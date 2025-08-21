// src/app/(admin)/blog/page.js
import Link from 'next/link';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import { deletePost } from './actions';

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
                <Link href="/blog/new" style={{ padding: '10px 15px', backgroundColor: 'blue', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
                    Create New Post
                </Link>
            </div>
            
            <table style={{ width: '100%', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Published</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post._id}>
                            <td>{post.title}</td>
                            <td>{post.isPublished ? 'Yes' : 'No'}</td>
                            <td>
                                <Link href={`/blog/edit/${post._id}`}>Edit</Link>
                                <form action={deletePost.bind(null, post._id)} style={{ display: 'inline', marginLeft: '10px' }}>
                                    <button type="submit" style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}