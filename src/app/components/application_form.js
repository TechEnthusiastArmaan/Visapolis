// src/app/components/ApplicationForm.js
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { format } from 'date-fns';
import { createBooking } from '@/app/booking/actions'; // <-- IMPORT THE SERVER ACTION

// A small component for the submit button to show a pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="btn btn-theme effect btn-md">
      {pending ? 'Scheduling...' : 'Schedule Now'}
    </button>
  );
}

export default function ApplicationForm({ selectedDate, selectedTime }) {
  const initialState = { message: null, success: false };
  // Bind the selected date and time to the server action
  const createBookingWithDetails = createBooking.bind(null, selectedDate, selectedTime);
  const [state, dispatch] = useFormState(createBookingWithDetails, initialState);

  // If the booking is successful, show a confirmation message
  if (state.success) {
    return (
      <div className="text-center p-8 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Appointment Confirmed!</h2>
        <p className="text-green-700">A confirmation email has been sent to the address provided.</p>
        <p className="mt-4 text-sm text-gray-600">
          We look forward to seeing you on <br/>
          <strong>{format(selectedDate, 'MMMM do, yyyy')} at {selectedTime}</strong>.
        </p>
      </div>
    );
  }

  return (
    <div className="appoinment-style-two-form">
      <div className="heading">
        <h2 className="title">Step 3: Your Details</h2>
        <p className="text-gray-700 mb-6 text-lg">
            Appointment on: <strong>{format(selectedDate, 'EEEE, MMMM do, yyyy')}</strong> at <strong>{selectedTime}</strong>
        </p>
      </div>

      {/* The form now uses the server action */}
      <form action={dispatch}>
        <div className="row">
          {/* MAKE SURE EACH INPUT/SELECT HAS A `name` ATTRIBUTE */}
          <div className="col-md-12">
            <div className="form-group">
              <input className="form-control" id="name" name="name" placeholder="Full Name" type="text" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" id="email" name="email" placeholder="Email Address" type="email" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control" id="phone" name="phone" placeholder="Phone Number" type="tel" required />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <select className="form-control" id="visa-type" name="visaType" required>
                <option value="">Select Visa Type</option>
                <option value="student">Student Visa</option>
                <option value="tourist">Tourist Visa</option>
                <option value="work">Work Visa</option>
                <option value="business">Business Visa</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group comments">
              <textarea className="form-control" id="comments" name="notes" placeholder="Tell Us About Your Query"></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <SubmitButton />
          </div>
        </div>
        {/* Display server-side error messages */}
        {state.message && !state.success && (
          <p className="mt-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">{state.message}</p>
        )}
      </form>
    </div>
  );
}