import { createPost } from '../actions';
import BlogPostForm from '../BlogPostForm';

export default function NewPostPage() {
  return (
    <div>
      <h1>Create New Blog Post</h1>
      <BlogPostForm formAction={createPost} intent="publish" />
    </div>
  );
}
