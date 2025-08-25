// src/app/login/page.js
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Image from 'next/image';
import { login } from './actions';

// This sub-component for the button remains the same
function LoginButton() {
	const { pending } = useFormStatus();

	return (
    <button 
      type="submit" 
      disabled={pending} 
      className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
    >
        {pending ? 'SIGNING IN...' : 'SIGN IN'}
    </button>
  );
}

// The main login page component
export default function LoginPage() {
    const [state, formAction] = useActionState(login, null);

    return (
      <div className="container-scroller">
        {/* CSS links remain the same */}
        <link rel="stylesheet" href="/admin-purple/vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="/admin-purple/vendors/css/vendor.bundle.base.css" />
        <link rel="stylesheet" href="/admin-purple/css/style.css" />

        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo text-center">
                    {/* You can replace this with your actual logo */}
                    <Image src="/assets/img/logo2.svg" alt="logo" width={150} height={40} />
                  </div>
                  <h4 className="text-center">Admin Panel</h4>
                  <h6 className="font-weight-light text-center">Sign in to continue.</h6>
                  
                  <form className="pt-3" action={formAction}>
                    
                    <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="mdi mdi-account-outline"></i></span>
                          </div>
                          <input 
                            type="email" 
                            name="email"
                            className="form-control form-control-lg" 
                            placeholder="Email" 
                            required 
                          />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="input-group">
                          <div className="input-group-prepend">
                              <span className="input-group-text"><i className="mdi mdi-lock-outline"></i></span>
                          </div>
                          <input 
                            type="password" 
                            name="password"
                            className="form-control form-control-lg" 
                            placeholder="Password" 
                            required 
                          />
                      </div>
                    </div>

                    {/* Server-side errors will be displayed here */}
                    {state?.error && (
                        <div className="alert alert-danger mt-3" role="alert">
                            {state.error}
                        </div>
                    )}
                    
                    <div className="mt-3">
                      <LoginButton />
                    </div>
                    
                    {/* 
                      --- THE FOLLOWING SECTIONS HAVE BEEN REMOVED ---
                      - "Keep me signed in" checkbox
                      - "Forgot password?" link
                      - "Go back to Main Site" link
                    */}

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}