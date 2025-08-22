// src/app/admin/blog/BlogPostForm.js
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';

function SubmitButton({ isEditing = false }) {
    const { pending } = useFormStatus();
    
    return (
        <button 
            type="submit" 
            disabled={pending} 
            style={{ 
                padding: '10px 20px', 
                backgroundColor: pending ? '#ccc' : '#392757', 
                color: 'white', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer' 
            }}
        >
            {pending ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Post' : 'Create Post')}
        </button>
    );
}

// This form is used for both creating and editing a blog post
export default function BlogPostForm({ formAction, initialData = {} }) {
    const [state, action] = useFormState(formAction, { message: null });
    
    useEffect(() => {
        if (state?.message && !state.message.includes("success")) {
            alert(state.message);
        }
    }, [state]);

    return (
        <form action={action} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', marginTop: '20px' }}>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    defaultValue={initialData?.title} 
                    required 
                    style={{ width: '100%', padding: '8px' }} 
                />
            </div>

            <div>
                <label htmlFor="content">Content (Markdown is supported)</label>
                <textarea 
                    id="content" 
                    name="content" 
                    defaultValue={initialData?.content} 
                    required 
                    style={{ width: '100%', minHeight: '400px', padding: '8px' }}
                ></textarea>
            </div>

            <div>
                <label htmlFor="imageUrl">Image URL</label>
                <input 
                    type="text" 
                    id="imageUrl" 
                    name="imageUrl" 
                    defaultValue={initialData?.imageUrl} 
                    style={{ width: '100%', padding: '8px' }} 
                />
            </div>
            
            <div>
                <label>
                    <input 
                        type="checkbox" 
                        name="isPublished" 
                        defaultChecked={initialData?.isPublished ?? false} 
                        style={{ marginRight: '10px' }}
                    />
                    Publish Post
                </label>
            </div>
            
            {state?.message && <p style={{ color: 'red' }}>{state.message}</p>}
            
            <SubmitButton isEditing={!!initialData?._id} />
        </form>
    );
}