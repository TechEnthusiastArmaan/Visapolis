"use client";
import { useState } from "react";
// import { useTemplateScripts } from "../hooks/useTemplateScripts";
import { bookAppointment } from "../appointment/actions"; 


export default function AssessmentForm() {
    // This hook ensures plugins like NiceSelect are ready.
    useTemplateScripts();

    // The state management for the form remains the same.
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        citizenship: '',
        age: '',
        inCanada: '',
        canadaStatus: [],
        education: [],
        relativesInCanada: '',
        studiedInCanada: '',
        englishProficiency: [],
        frenchProficiency: [],
        workExperienceOutside: '0',
        jobOffer: '',
        workExperienceInside: '0',
        refugeeStatus: '',
        complications: '',
    });
    
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prevState => ({
                ...prevState,
                [name]: checked 
                    ? [...prevState[name], value] 
                    : prevState[name].filter(item => item !== value)
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');
        
        // This is a direct server action call, passing the entire state
        const result = await bookAppointment(formData);
        
        if (result.success) {
            setStatus('Assessment submitted successfully!');
            // Reset the form after a successful submission
            setFormData({
                name: '', phone: '', email: '', citizenship: '', age: '',
                inCanada: '', canadaStatus: [], education: [], relativesInCanada: '',
                studiedInCanada: '', englishProficiency: [], frenchProficiency: [],
                workExperienceOutside: '0', jobOffer: '', workExperienceInside: '0',
                refugeeStatus: '', complications: '',
            });
        } else {
            // Display the specific error message from the server action
            setStatus(`Error: ${result.error || 'An unknown error occurred.'}`);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="wow fadeInUp appoinment-style-one-info">
            {/* --- SECTION 1: PERSONAL INFORMATION --- */}
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input className="form-control" name="name" id="name" placeholder="John Doe" type="text" onChange={handleChange} value={formData.name} required />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input className="form-control" name="phone" id="phone" placeholder="123-456-7890" type="tel" onChange={handleChange} value={formData.phone} required />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="email">Email *</label>
                        <input className="form-control" name="email" id="email" placeholder="example@email.com" type="email" onChange={handleChange} value={formData.email} required />
                    </div>
                </div>
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="citizenship">Country of Citizenship *</label>
                        <input className="form-control" name="citizenship" id="citizenship" placeholder="e.g., India" type="text" onChange={handleChange} value={formData.citizenship} required />
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="age">Age *</label>
                        <input className="form-control" name="age" id="age" placeholder="e.g., 30" type="number" onChange={handleChange} value={formData.age} required />
                    </div>
                </div>
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-3 d-block">Are you currently in Canada?</label>
                        <div className="d-flex" style={{gap: '2rem'}}>
                           <label className="custom-form-check is-radio">Yes
                              <input type="radio" name="inCanada" value="Yes" onChange={handleChange} checked={formData.inCanada === 'Yes'} />
                              <span className="checkmark"></span>
                            </label>
                           <label className="custom-form-check is-radio">No
                              <input type="radio" name="inCanada" value="No" onChange={handleChange} checked={formData.inCanada === 'No'} />
                              <span className="checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* --- SECTION 2: STATUS & EDUCATION --- */}
            <div className="row">
                <div className="col-lg-12 form-group">
                    <label className="fw-bold mb-2 d-block">Current Status in Canada (select all that apply)</label>
                    <div className="row mt-2">
                        <div className="col-md-4"><label className="custom-form-check">Visitor<input type="checkbox" name="canadaStatus" value="Visitor" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Student<input type="checkbox" name="canadaStatus" value="Student" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Worker<input type="checkbox" name="canadaStatus" value="Worker" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Permanent Resident<input type="checkbox" name="canadaStatus" value="Permanent Resident" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Citizen<input type="checkbox" name="canadaStatus" value="Citizen" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Out of Status<input type="checkbox" name="canadaStatus" value="Out of Status" onChange={handleChange} /><span className="checkmark"></span></label></div>
                    </div>
                     <div className="form-group mt-3"><input className="form-control" type="text" placeholder="Other..." onChange={(e) => handleChange({ target: { name: 'canadaStatus', value: `Other: ${e.target.value}`, type: 'checkbox', checked: !!e.target.value }})}/></div>
                </div>
            </div>
             <div className="row">
                 <div className="col-lg-12 form-group">
                    <label className="fw-bold mb-2 d-block">Highest Level of Education Completed</label>
                     <div className="row mt-2">
                        <div className="col-md-4"><label className="custom-form-check">High School<input type="checkbox" name="education" value="High School" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Certificate<input type="checkbox" name="education" value="Certificate" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Diploma<input type="checkbox" name="education" value="Diploma" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Bachelor&apos;s Degree<input type="checkbox" name="education" value="Bachelor's Degree" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Master&apos;s Degree<input type="checkbox" name="education" value="Master's Degree" onChange={handleChange} /><span className="checkmark"></span></label></div>
                        <div className="col-md-4"><label className="custom-form-check">Ph.D.<input type="checkbox" name="education" value="PhD" onChange={handleChange} /><span className="checkmark"></span></label></div>
                    </div>
                    <div className="form-group mt-3"><input className="form-control" type="text" placeholder="Other..." onChange={(e) => handleChange({ target: { name: 'education', value: `Other: ${e.target.value}`, type: 'checkbox', checked: !!e.target.value }})}/></div>
                </div>
            </div>

            {/* --- SECTION 3: LANGUAGE & EXPERIENCE --- */}
            <div className="row">
                 <div className="col-lg-6 form-group">
                    <label className="fw-bold mb-3 d-block">Do you have any relatives in Canada?</label>
                    <div className="d-flex" style={{gap: '2rem'}}>
                        <label className="custom-form-check is-radio">Yes<input type="radio" name="relativesInCanada" value="Yes" onChange={handleChange} checked={formData.relativesInCanada === 'Yes'} /><span className="checkmark"></span></label>
                        <label className="custom-form-check is-radio">No<input type="radio" name="relativesInCanada" value="No" onChange={handleChange} checked={formData.relativesInCanada === 'No'}/><span className="checkmark"></span></label>
                    </div>
                </div>
                <div className="col-lg-6 form-group">
                    <label className="fw-bold mb-3 d-block">Have you ever studied in Canada?</label>
                     <div className="d-flex" style={{gap: '2rem'}}>
                        <label className="custom-form-check is-radio">Yes<input type="radio" name="studiedInCanada" value="Yes" onChange={handleChange} checked={formData.studiedInCanada === 'Yes'}/><span className="checkmark"></span></label>
                        <label className="custom-form-check is-radio">No<input type="radio" name="studiedInCanada" value="No" onChange={handleChange} checked={formData.studiedInCanada === 'No'}/><span className="checkmark"></span></label>
                    </div>
                </div>
            </div>
            <div className="row">
                 <div className="col-lg-6 form-group">
                    <label className="fw-bold mb-2 d-block">English Language Proficiency Level</label>
                    <label className="custom-form-check">Beginner<input type="checkbox" name="englishProficiency" value="Beginner" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">Intermediate<input type="checkbox" name="englishProficiency" value="Intermediate" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">Advanced<input type="checkbox" name="englishProficiency" value="Advanced" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">I don&apos;t speak English<input type="checkbox" name="englishProficiency" value="None" onChange={handleChange}/><span className="checkmark"></span></label>
                </div>

                <div className="col-lg-6 form-group">
                    <label className="fw-bold mb-2 d-block">French Language Proficiency Level</label>
                    <label className="custom-form-check">Beginner<input type="checkbox" name="frenchProficiency" value="Beginner" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">Intermediate<input type="checkbox" name="frenchProficiency" value="Intermediate" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">Advanced<input type="checkbox" name="frenchProficiency" value="Advanced" onChange={handleChange}/><span className="checkmark"></span></label>
                    <label className="custom-form-check">I don&apos;t speak French<input type="checkbox" name="frenchProficiency" value="None" onChange={handleChange}/><span className="checkmark"></span></label>
                </div>
            </div>

            <div className="row">
                 <div className="col-lg-6"><div className="form-group"><label htmlFor="workExperienceOutside" className="fw-bold mb-2 d-block">Work Experience Outside Canada</label><select className="form-select" id="workExperienceOutside" name="workExperienceOutside" onChange={handleChange} value={formData.workExperienceOutside}><option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option></select></div></div>
                 <div className="col-lg-6"><div className="form-group"><label htmlFor="workExperienceInside" className="fw-bold mb-2 d-block">Work Experience in Canada</label><select className="form-select" id="workExperienceInside" name="workExperienceInside" onChange={handleChange} value={formData.workExperienceInside}><option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option></select></div></div>
            </div>
                
            <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-3 d-block">Do you have a valid job offer in Canada?</label>
                        <div className="d-flex" style={{gap: '2rem'}}>
                            <label className="custom-form-check is-radio">Yes<input type="radio" name="jobOffer" value="Yes" onChange={handleChange} checked={formData.jobOffer === 'Yes'}/><span className="checkmark"></span></label>
                            <label className="custom-form-check is-radio">No<input type="radio" name="jobOffer" value="No" onChange={handleChange} checked={formData.jobOffer === 'No'}/><span className="checkmark"></span></label>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-6">
                     <div className="form-group">
                        <label className="fw-bold mb-3 d-block">Applied for refugee status before?</label>
                        <div className="d-flex" style={{gap: '2rem'}}>
                            <label className="custom-form-check is-radio">Yes<input type="radio" name="refugeeStatus" value="Yes" onChange={handleChange} checked={formData.refugeeStatus === 'Yes'}/><span className="checkmark"></span></label>
                            <label className="custom-form-check is-radio">No<input type="radio" name="refugeeStatus" value="No" onChange={handleChange} checked={formData.refugeeStatus === 'No'}/><span className="checkmark"></span></label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                     <div className="form-group">
                        <label className="fw-bold mb-3 d-block">Do you have complications (refusals, criminal records, etc)?</label>
                        <div className="d-flex" style={{gap: '2rem'}}>
                           <label className="custom-form-check is-radio">Yes<input type="radio" name="complications" value="Yes" onChange={handleChange} checked={formData.complications === 'Yes'}/><span className="checkmark"></span></label>
                            <label className="custom-form-check is-radio">No<input type="radio" name="complications" value="No" onChange={handleChange} checked={formData.complications === 'No'}/><span className="checkmark"></span></label>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-lg-12">
                    <button className="btn-style-one circle mt-30" type="submit" name="submit" id="submit">
                        Submit Assessment <span></span>
                    </button>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className={status ? 'alert-msg mt-30' : ''}>{status}</div>
                </div>
            </div>
        </form>
    );
}