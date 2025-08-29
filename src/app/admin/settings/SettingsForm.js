// src/app/admin/settings/SettingsForm.js
'use client';
import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { updateSiteSettings } from "./actions";

function SubmitButton() {
    const { pending } = useFormStatus();
    return <button type="submit" className="btn btn-gradient-primary me-2" disabled={pending}>{pending ? 'Saving...' : 'Save Settings'}</button>;
}

const FormField = ({ label, name, placeholder, defaultValue }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input type="text" className="form-control" name={name} id={name} placeholder={placeholder} defaultValue={defaultValue} />
    </div>
);

export default function SettingsForm({ initialData }) {
    const [state, formAction] = useActionState(updateSiteSettings, { message: null });

    useEffect(() => {
        if (state?.message) {
            window.swal("Status", state.message, state.message.includes('success') ? "success" : "error");
        }
    }, [state]);

    return (
        <form className="forms-sample mt-4" action={formAction}>
            <h4>Contact Information</h4>
            <FormField label="Phone Number" name="phoneNumber" placeholder="+1 123 456 7890" defaultValue={initialData?.phoneNumber} />
            <FormField label="Email Address" name="email" placeholder="info@example.com" defaultValue={initialData?.email} />
            <FormField label="Physical Address" name="address" placeholder="123 Street, City, Country" defaultValue={initialData?.address} />
            <FormField label="Google Maps Embed URL" name="googleMapsUrl" placeholder="https://www.google.com/maps/embed?..." defaultValue={initialData?.googleMapsUrl} />
            <FormField label="Working Hours" name="workingHours" placeholder="Mon-Fri: 9:00AM - 5:00PM" defaultValue={initialData?.workingHours} />

            <h4 className="mt-4">Social Media Links</h4>
            <FormField label="Facebook URL" name="facebookUrl" placeholder="https://facebook.com/your-page" defaultValue={initialData?.facebookUrl} />
            <FormField label="Twitter/X URL" name="twitterUrl" placeholder="https://twitter.com/your-handle" defaultValue={initialData?.twitterUrl} />
            <FormField label="LinkedIn URL" name="linkedinUrl" placeholder="https://linkedin.com/in/your-profile" defaultValue={initialData?.linkedinUrl} />
            
            <SubmitButton />
        </form>
    );
}