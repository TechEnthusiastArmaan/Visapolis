// src/app/(public)/components/contact-sections/ContactForm.js
"use client";
import { useActionState, useEffect } from 'react';
import { submitContactForm } from '@/app/contact/actions'; // Import the new server action
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  // ==========================================================
  // STEP 2: Call the hook directly.
  //         'require' is no longer needed.
  // ==========================================================
  const { pending } = useFormStatus();

  return (
    <button type="submit" name="submit" id="submit" className="btn-style-one circle" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'} <span></span>
    </button>
  );
}

export default function ContactForm() {
    // Initial state for the form action
    const initialState = { message: null, isError: false };
    
    // The useActionState hook manages form state and server communication
    const [state, formAction] = useActionState(submitContactForm, initialState);

    return (
        <div className="contact-form-style-one">
            <h2>Fill Details</h2>
            {/* The form now calls the server action directly */}
            <form action={formAction}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" name="name" placeholder="Name" type="text" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="email" placeholder="Email*" type="email" required />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" name="phone" placeholder="Phone" type="text" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" name="message" placeholder="Your Message" required></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                       {/* This can be a separate client component for better UX with a pending state */}
                       <SubmitButton />
                    </div>
                </div>
                {/* Alert Message */}
                {state?.message && (
                    <div className="col-lg-12 alert-notification">
                        <div className={`alert-msg mt-30 ${state.isError ? 'text-danger' : 'text-success'}`}>
                            {state.message}
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}