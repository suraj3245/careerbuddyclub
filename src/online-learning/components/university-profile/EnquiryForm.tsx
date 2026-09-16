"use client";

import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

interface Program {
  id: number | string;
  name: string;
}

interface EnquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  universityName: string;
  programs: Program[];
  preselectedProgram?: string;
}

export default function EnquiryForm({ isOpen, onClose, universityName, programs, preselectedProgram }: EnquiryFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: preselectedProgram || '',
    city: '',
    consent: false
  });

  useEffect(() => {
    if (preselectedProgram) {
      setFormData(prev => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setFormData({
          name: '', phone: '', email: '', program: preselectedProgram || '', city: '', consent: false
        });
        onClose();
      }, 3000);
    }, 2000);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="upEnquiryOverlay" onClick={handleOverlayClick}>
      <div className="upEnquiryModal">
        <button className="upEnquiryClose" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        <h2 className="upEnquiryTitle">Enquire Now</h2>
        <p>Get details about {universityName}</p>

        {status === 'success' ? (
          <div className="upFormSuccess">
            <Check size={48} color="green" style={{ margin: '0 auto 16px' }} />
            <p>Thank you! Our counsellor will contact you within 24 hours.</p>
          </div>
        ) : (
          <form className="upEnquiryForm" onSubmit={handleSubmit}>
            <div className="upFormGroup">
              <label htmlFor="name" className="upFormLabel">Full Name *</label>
              <input type="text" id="name" name="name" className="upFormInput" required value={formData.name} onChange={handleChange} />
            </div>

            <div className="upFormGroup">
              <label htmlFor="phone" className="upFormLabel">Mobile Number *</label>
              <input type="tel" id="phone" name="phone" className="upFormInput" required pattern="[0-9]{10}" title="10 digit mobile number" value={formData.phone} onChange={handleChange} />
            </div>

            <div className="upFormGroup">
              <label htmlFor="email" className="upFormLabel">Email *</label>
              <input type="email" id="email" name="email" className="upFormInput" required value={formData.email} onChange={handleChange} />
            </div>

            <div className="upFormGroup">
              <label htmlFor="program" className="upFormLabel">Program of Interest</label>
              <select id="program" name="program" className="upFormSelect" required value={formData.program} onChange={handleChange}>
                <option value="">Select a Program</option>
                {programs.map(p => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>

            <div className="upFormGroup">
              <label htmlFor="city" className="upFormLabel">City *</label>
              <input type="text" id="city" name="city" className="upFormInput" required value={formData.city} onChange={handleChange} />
            </div>

            <div className="upFormGroup">
              <label className="upFormCheckboxLabel">
                <input type="checkbox" name="consent" className="upFormCheckbox" required checked={formData.consent} onChange={handleChange} />
                I agree to receive counselling calls, emails, and updates. View Privacy Policy.
              </label>
            </div>

            {status === 'error' && (
              <div className="upFormError">Something went wrong. Please try again.</div>
            )}

            <button type="submit" className={`upFormSubmit ${status === 'submitting' ? 'upFormSubmitting' : ''}`} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Submit Enquiry'}
            </button>
            <p className="upFormPrivacy">Your information is secure and will only be used for counselling purposes.</p>
          </form>
        )}
      </div>
    </div>
  );
}
