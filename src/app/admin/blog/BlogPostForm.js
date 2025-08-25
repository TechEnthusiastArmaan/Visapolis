// src/app/admin/blog/BlogPostForm.js
'use client';

// Correctly import useActionState from 'react' and useFormStatus from 'react-dom'
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// Dynamically import the editor to prevent SSR issues
const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then(mod => mod.Editor), // Explicitly access the 'Editor' property
  { 
    ssr: false,
    // Optional but good for UX: Show a loading message while the editor is loading
    loading: () => <p>Loading editor...</p> 
  }
);

// A sub-component for the submit button to show a pending state
function SubmitButton({ label = 'Publish' }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-gradient-primary me-2">
      {pending ? 'Saving…' : label}
    </button>
  );
}

// The main form component
export default function BlogPostForm({
  formAction,
  initialData = {},
  intent,
}) {
  // Use the correct `useActionState` hook
  const [state, action] = useActionState(formAction, { message: null });
  
  // Use `useState` for reliable control over the editor's content
  const [content, setContent] = useState(initialData?.content || '');
  
  // State for the image preview
  const [preview, setPreview] = useState(initialData?.imageUrl || '');

  // Ref to hold the editor instance for any advanced interactions
  const editorRef = useRef(null);

  // Effect to show alert messages from server actions
  useEffect(() => {
    if (state?.message && !state.message.includes('success')) {
      alert(state.message);
    }
  }, [state]);

  // Handler for image selection to update the preview
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(initialData?.imageUrl || ''); // Reset to the initial image if selection is cancelled
    }
  };

  return (
    <form
      className="forms-sample mt-4"
      action={action}
      encType="multipart/form-data"
    >
      {/* Hidden input to pass the editor's content reliably */}
      <input type="hidden" name="content" value={content} />

      {/* --- Fields you wanted --- */}
      {/* 1. Title */}
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={initialData?.title}
          required
          className="form-control"
          placeholder="Enter a compelling title"
        />
      </div>

      {/* 2. Featured Image */}
      <div className="form-group">
        <label htmlFor="image">Featured Image</label>
        <input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
        />
        {preview && (
          <div className="mt-3">
            <p className="card-description">Image Preview:</p>
            <Image
              src={preview}
              alt="Image Preview"
              width={600}
              height={338}
              style={{ width: '100%', height: 'auto', maxWidth: 400, borderRadius: '5px' }}
            />
          </div>
        )}
      </div>

      {/* 3. WYSIWYG Editor */}
      <div className="form-group">
        <label>Content</label>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'}
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={initialData?.content || ''}
          onEditorChange={(newContent) => {
            setContent(newContent);
          }}
          init={{
            height: 400,
            menubar: true,
            plugins: 'preview image link lists code table media wordcount',
            toolbar: 'undo redo | formatselect | bold italic underline forecolor | ' +
                     'alignleft aligncenter alignright alignjustify | ' +
                     'bullist numlist outdent indent | link image media table | ' +
                     'removeformat | code preview',
            branding: false
          }}
        />
      </div>

      {/* The "Content (Plain Text)" field has been completely removed as requested. */}

      {/* Publish Checkbox */}
      <div className="form-check form-check-flat form-check-primary">
          <label className="form-check-label">
              <input
                  type="checkbox"
                  name="isPublished"
                  className="form-check-input"
                  defaultChecked={
                    typeof initialData?.isPublished === 'boolean'
                        ? initialData.isPublished
                        : true
                  }
              /> Publish this post <i className="input-helper"></i>
          </label>
      </div>
      
      {intent ? <input type="hidden" name="intent" value={intent} /> : null}

      {/* Action Buttons */}
      <div className="mt-4">
          <SubmitButton label={initialData?._id ? 'Save Changes' : 'Publish Post'} />
          <Link href="/admin/blog" className="btn btn-light">
              Cancel
          </Link>
      </div>
    </form>
  );
}