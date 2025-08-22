// src/app/admin/content/visa-details/page.js

// Using relative paths to avoid any alias issues
import dbConnect from "../../../../lib/dbconnect";
import PageContent from "../../../../models/PageContent";
import { updatePageContent } from "../../actions/contentActions"; // We'll create this action file next

// Server-side function to get the current content from the DB
async function getContent() {
    await dbConnect();
    // Find the specific document for the visa-details page
    let content = await PageContent.findOne({ pageIdentifier: 'visa-details' });
    
    // If it's the first time, provide default empty values for the form
    if (!content) {
        content = { title: '', content: '', imageUrl: '' };
    }
    return JSON.parse(JSON.stringify(content));
}

export default async function EditVisaDetailsPage() {
    const content = await getContent();
    
    // Bind the pageIdentifier to the server action so it knows which document to update
    const updateAction = updatePageContent.bind(null, 'visa-details');

    return (
        <div>
            <h1>Edit Visa Details Page Content</h1>
            <p>The content you enter here will be displayed on the public-facing Visa Details page.</p>

            <form action={updateAction} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', marginTop: '20px' }}>
                <div>
                    <label htmlFor="title">Page Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        defaultValue={content.title} 
                        required 
                        style={{ width: '100%', padding: '8px' }} 
                    />
                </div>
                
                <div>
                    <label htmlFor="content">Main Content (Markdown supported)</label>
                    <textarea 
                        id="content" 
                        name="content" 
                        defaultValue={content.content} 
                        required 
                        style={{ width: '100%', minHeight: '400px', padding: '8px' }}
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="imageUrl">Header Image URL (Optional)</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl" 
                        defaultValue={content.imageUrl} 
                        style={{ width: '100%', padding: '8px' }} 
                    />
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#392757', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', alignSelf: 'flex-start' }}>
                    Save Content
                </button>
            </form>
        </div>
    );
}