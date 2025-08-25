// src/app/admin/blog/new/page.js
import { createPost } from '../actions';
import BlogPostForm from '../BlogPostForm';
import Link from 'next/link';

export default function NewPostPage() {
  return (
    <>
        {/* Page Header (not strictly necessary but good for consistency) */}
        <div className="page-header">
            <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                    <i className="mdi mdi-pencil"></i>
                </span> Create Post
            </h3>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/admin/dashboard">Dashboard</Link></li>
                    <li className="breadcrumb-item"><Link href="/admin/blog">Blog Management</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">New Post</li>
                </ol>
            </nav>
        </div>

        {/* Main Form Card */}
        <div className="row">
            <div className="col-12 grid-margin stretch-card">
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">New Blog Post Details</h4>
                        <p className="card-description">
                            Fill out the form below to create a new post for your website&apos;s blog.
                        </p>
                        
                        {/* 
                          Your existing BlogPostForm is rendered here.
                          No changes needed to the form itself.
                        */}
                        <BlogPostForm formAction={createPost} intent="publish" />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}