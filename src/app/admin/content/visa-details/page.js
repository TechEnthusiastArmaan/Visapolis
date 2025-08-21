// src/app/(admin)/content/visa-details/page.js
import dbConnect from '@/lib/dbconnect';
import PageContent from '@/models/PageContent';
import { updatePageContent } from '../actions';

async function getContent() {
    await dbConnect();
    let content = await PageContent.findOne({ pageIdentifier: 'visa-details' });
    if (!content) {
        // Provide default empty values if no content exists yet
        content = { title: '', content: '', imageUrl: '' };
    }
    return JSON.parse(JSON.stringify(content));
}

export default async function EditVisaDetailsPage() {
    const content = await getContent();
    const action = updatePageContent.bind(null, 'visa-details');

    return (
        <div>
            <h1>Edit Visa Details Page Content</h1>
            <form action={action}>
                <div>
                    <label>Page Title</label>
                    <input type="text" name="title" defaultValue={content?.title} required style={{ width: '100%' }} />
                </div>
                <div>
                    <label>Main Content</label>
                    <textarea name="content" defaultValue={content?.content} required style={{ width: '100%', minHeight: '400px' }}></textarea>
                </div>
                <div>
                    <label>Image URL</label>
                    <input type="text" name="imageUrl" defaultValue={content?.imageUrl} style={{ width: '100%' }} />
                </div>
                <button type="submit">Save Content</button>
            </form>
        </div>
    );
}