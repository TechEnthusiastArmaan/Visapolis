"use client";
import { useState } from "react";
import { useTemplateScripts } from "../hooks/useTemplateScripts";

export default function AssessmentForm() {
    useTemplateScripts();

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
        console.log("Form Data:", formData);
        
        setTimeout(() => {
            setStatus('Assessment submitted successfully!');
        }, 1500);
    };

    return (
        <form onSubmit={handleSubmit} className="wow fadeInUp appoinment-style-one-info">
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
                        <label className="fw-bold mb-2 d-block">Are you currently in Canada?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="inCanada" id="inCanadaYes" value="Yes" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="inCanadaYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="inCanada" id="inCanadaNo" value="No" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="inCanadaNo">No</label></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                     <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Current Status in Canada (select all that apply)</label>
                        <div className="row">
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Visitor" id="statusVisitor" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusVisitor">Visitor</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Student" id="statusStudent" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusStudent">Student</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Worker" id="statusWorker" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusWorker">Worker</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Permanent Resident" id="statusPR" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusPR">Permanent Resident</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Citizen" id="statusCitizen" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusCitizen">Citizen</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="canadaStatus" value="Out of Status" id="statusOutOfStatus" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="statusOutOfStatus">Out of Status</label></div></div>
                        </div>
                     </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                         <label htmlFor="canadaStatusOther" className="d-none">Other Status</label>
                        <input className="form-control mt-2" type="text" id="canadaStatusOther" name="canadaStatusOther" placeholder="Other..." onChange={(e) => handleChange({ target: { name: 'canadaStatus', value: `Other: ${e.target.value}`, type: 'checkbox', checked: !!e.target.value }})}/>
                    </div>
                </div>
            </div>
            
            <div className="row">
                 <div className="col-lg-12">
                     <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Highest Level of Education Completed</label>
                         <div className="row">
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="High School" id="eduHighSchool" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduHighSchool">High School</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="Certificate" id="eduCertificate" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduCertificate">Certificate</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="Diploma" id="eduDiploma" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduDiploma">Diploma</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="Bachelor's Degree" id="eduBachelor" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduBachelor">Bachelor&apos;s Degree</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="Master's Degree" id="eduMaster" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduMaster">Master&apos;s Degree</label></div></div>
                            <div className="col-md-4"><div className="form-check"><input className="form-check-input" type="checkbox" name="education" value="PhD" id="eduPhD" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="eduPhD">Ph.D.</label></div></div>
                        </div>
                    </div>
                 </div>
                <div className="col-lg-12">
                    <div className="form-group">
                         <label htmlFor="educationOther" className="d-none">Other Education</label>
                        <input className="form-control mt-2" type="text" id="educationOther" placeholder="Other..." onChange={(e) => handleChange({ target: { name: 'education', value: `Other: ${e.target.value}`, type: 'checkbox', checked: !!e.target.value }})}/>
                    </div>
                </div>
            </div>
            
            <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Relatives in Canada?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="relativesInCanada" id="relativesYes" value="Yes" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="relativesYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="relativesInCanada" id="relativesNo" value="No" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="relativesNo">No</label></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Ever studied in Canada?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="studiedInCanada" id="studiedYes" value="Yes" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="studiedYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="studiedInCanada" id="studiedNo" value="No" onChange={handleChange} /><label className="form-check-label fw-normal" htmlFor="studiedNo">No</label></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-2 d-block">English Proficiency</label>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="englishProficiency" value="Beginner" id="engBeginner" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="engBeginner">Beginner</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="englishProficiency" value="Intermediate" id="engIntermediate" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="engIntermediate">Intermediate</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="englishProficiency" value="Advanced" id="engAdvanced" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="engAdvanced">Advanced</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="englishProficiency" value="None" id="engNone" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="engNone">I don&apos;t speak English</label></div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-2 d-block">French Proficiency</label>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="frenchProficiency" value="Beginner" id="frBeginner" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="frBeginner">Beginner</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="frenchProficiency" value="Intermediate" id="frIntermediate" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="frIntermediate">Intermediate</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="frenchProficiency" value="Advanced" id="frAdvanced" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="frAdvanced">Advanced</label></div>
                        <div className="form-check"><input className="form-check-input" type="checkbox" name="frenchProficiency" value="None" id="frNone" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="frNone">I don&apos;t speak French</label></div>
                    </div>
                </div>
            </div>

            <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label htmlFor="workExperienceOutside" className="fw-bold mb-2 d-block">Work Experience Outside Canada</label>
                        <select className="form-select" id="workExperienceOutside" name="workExperienceOutside" onChange={handleChange} value={formData.workExperienceOutside}>
                            <option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option>
                        </select>
                    </div>
                </div>
                 <div className="col-lg-6">
                     <div className="form-group">
                        <label htmlFor="workExperienceInside" className="fw-bold mb-2 d-block">Work Experience in Canada</label>
                        <select className="form-select" id="workExperienceInside" name="workExperienceInside" onChange={handleChange} value={formData.workExperienceInside}>
                            <option value="0">0 years</option><option value="1">1 year</option><option value="2">2 years</option><option value="3+">3+ years</option>
                        </select>
                    </div>
                </div>
            </div>
                
            <div className="row">
                 <div className="col-lg-6">
                    <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Do you have a valid job offer in Canada?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="jobOffer" id="jobOfferYes" value="Yes" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="jobOfferYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="jobOffer" id="jobOfferNo" value="No" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="jobOfferNo">No</label></div>
                        </div>
                    </div>
                </div>
                 <div className="col-lg-6">
                     <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Applied for refugee status before?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="refugeeStatus" id="refugeeYes" value="Yes" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="refugeeYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="refugeeStatus" id="refugeeNo" value="No" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="refugeeNo">No</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                     <div className="form-group">
                        <label className="fw-bold mb-2 d-block">Any complications (refusals, criminal records, health issues)?</label>
                        <div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="complications" id="complicationsYes" value="Yes" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="complicationsYes">Yes</label></div>
                            <div className="form-check form-check-inline"><input className="form-check-input" type="radio" name="complications" id="complicationsNo" value="No" onChange={handleChange}/><label className="form-check-label fw-normal" htmlFor="complicationsNo">No</label></div>
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