'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((m) => m.Editor),
  { ssr: false }
);

function SubmitButton({ label = 'Publish' }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-primary">
      {pending ? 'Saving…' : label}
    </button>
  );
}

export default function BlogPostForm({
  formAction,
  initialData = {},
  intent, // pass "publish" on the create page
}) {
  const [state, action] = useFormState(formAction, { message: null });
  const contentRef = useRef(initialData?.content || '');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    if (state?.message && !state.message.includes('success')) {
      alert(state.message);
    }
  }, [state]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
    else setPreview('');
  };

  return (
    <form
      action={async (fd) => {
        fd.set('content', contentRef.current || '');
        return action(fd);
      }}
      encType="multipart/form-data"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        maxWidth: 800,
        marginTop: 20,
      }}
    >
      {/* Title */}
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          defaultValue={initialData?.title}
          required
          className="form-control"
        />
      </div>

      {/* Plain content */}
      <div>
        <label htmlFor="rawContent">Content (Plain Text)</label>
        <textarea
          id="rawContent"
          name="rawContent"
          defaultValue={initialData?.rawContent}
          className="form-control"
          style={{ minHeight: 160 }}
        />
      </div>

      {/* Image */}
      <div>
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
            <Image
              src={preview}
              alt="Preview"
              width={600}
              height={338}
              style={{ width: '100%', height: 'auto', maxWidth: 600 }}
            />
          </div>
        )}
      </div>

      {/* WYSIWYG */}
      <div>
        <label>Content (Rich Text)</label>
        <Editor
          apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY || 'no-api-key'}
          initialValue={initialData?.content || ''}
          onEditorChange={(v) => (contentRef.current = v)}
          init={{
            height: 400,
            menubar: true,
            plugins:
              'preview image link lists code table media wordcount',
            toolbar:
              'undo redo | formatselect | bold italic underline forecolor | ' +
              'alignleft aligncenter alignright alignjustify | ' +
              'bullist numlist outdent indent | link image media table | ' +
              'removeformat | code preview',
            branding: false,
          }}
        />
        <input type="hidden" name="content" value="" />
      </div>

      {/* Publish checkbox */}
      <div>
        <label>
          <input
            type="checkbox"
            name="isPublished"
            defaultChecked={
              typeof initialData?.isPublished === 'boolean'
                ? initialData.isPublished
                : true // default to true on create
            }
            style={{ marginRight: 8 }}
          />
          Publish this post
        </label>
      </div>

      {/* Intent (only include for create to force publish) */}
      {intent ? <input type="hidden" name="intent" value={intent} /> : null}

      <SubmitButton label={intent === 'publish' ? 'Publish' : 'Save'} />
    </form>
  );
}
