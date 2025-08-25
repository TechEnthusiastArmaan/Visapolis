// src/app/admin/blog/edit/[id]/page.js
import { updatePost } from '../../actions';
import BlogPostForm from '../../BlogPostForm';
import dbConnect from '@/lib/dbconnect';
import Blog from '@/models/Blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Data fetching function remains the same
async function getPost(id) {
    await dbConnect();
    const post = await Blog.findById(id);
    if (!post) notFound();
    return JSON.parse(JSON.stringify(post));
}

export default async function EditPostPage({ params }) {
    const post = await getPost(params.id);

    // Binding the postId to the server action remains the same
    const updatePostWithId = updatePost.bind(null, post._id);

    return (
        <>
            {/* Page Header for the Edit page */}
            <div className="page-header">
                <h3 className="page-title">
                    <span className="page-title-icon bg-gradient-info text-white me-2">
                        <i className="mdi mdi-file-document"></i>
                    </span> Edit Post
                </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/admin/dashboard">Dashboard</Link></li>
                        <li className="breadcrumb-item"><Link href="/admin/blog">Blog Management</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>
            </div>

            {/* Main Form Card */}
            <div className="row">
                <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Editing: &quot;{post.title}&quot;</h4>
                            <p className="card-description">
                                Make your changes to the post below.
                            </p>
                            
                            {/* 
                              The BlogPostForm receives the initialData to pre-fill the fields.
                            */}
                            <BlogPostForm formAction={updatePostWithId} initialData={post} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}