// src/app/(public)/components/contact-sections/ContactForm.js
"use client";

import { useActionState, useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/contact/actions';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" name="submit" id="submit" className="btn-style-one circle" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'} <span></span>
    </button>
  );
}

export default function ContactForm() {
    const initialState = { message: null, isError: false, isSuccess: false };
    const [state, formAction] = useActionState(submitContactForm, initialState);
    const formRef = useRef(null);

    useEffect(() => {
        if (state?.message) {
            if (state.isSuccess) {
                swal({
                    title: "Message Sent!",
                    text: state.message,
                    icon: "success",
                });
                formRef.current?.reset();
            } else if (state.isError) {
                swal({
                    title: "Submission Error!",
                    text: state.message,
                    icon: "error",
                });
            }
        }
    }, [state]);

    const handleClientValidation = (event) => {
        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();

        // 1. A simple regex to check for a basic email pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 2. First, check if fields are empty
        if (!name || !email || !message) {
            event.preventDefault(); 
            window.swal("Incomplete Form", "Please fill out all required fields (Name, Email, and Message).", "warning");
            return; // Stop the function here
        }
        
        // 3. If they are not empty, THEN check if the email format is valid
        if (!emailRegex.test(email)) {
            event.preventDefault(); // Stop the form submission
            window.swal("Invalid Email", "Please enter a valid email address.", "warning");
            return; // Stop the function here
        }
    };

    return (
        <div className="contact-form-style-one">
            <h2>Fill Details</h2>
            {/* 
              --- THIS IS THE FIX ---
              The noValidate attribute disables the browser's default validation tooltips,
              allowing our onSubmit handler to run first.
            */}
            <form 
                ref={formRef}
                action={formAction}
                onSubmit={handleClientValidation}
                noValidate 
            >
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" name="name" placeholder="Name*" type="text" required />
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
                            <textarea className="form-control" name="message" placeholder="Your Message*" required></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                       <SubmitButton />
                    </div>
                </div>
            </form>
        </div>
    );
}