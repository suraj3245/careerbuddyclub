import React from 'react';

const StudentTestResultForm: React.FC = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">Mobile</label>
        <input type="text" className="form-control" id="mobile" />
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">School Name</label>
        <input type="text" className="form-control" id="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="realisticScore" className="form-label">Realistic Score</label>
        <input type="number" className="form-control" id="realisticScore" />
      </div>
      <div className="mb-3">
        <label htmlFor="investigativeScore" className="form-label">Investigative Score</label>
        <input type="number" className="form-control" id="investigativeScore" />
      </div>
      <div className="mb-3">
        <label htmlFor="artisticScore" className="form-label">Artistic Score</label>
        <input type="number" className="form-control" id="artisticScore" />
      </div>
      <div className="mb-3">
        <label htmlFor="socialScore" className="form-label">Social Score</label>
        <input type="number" className="form-control" id="socialScore" />
      </div>
      <div className="mb-3">
        <label htmlFor="enterprisingScore" className="form-label">Enterprising Score</label>
        <input type="number" className="form-control" id="enterprisingScore" />
      </div>
      <div className="mb-3">
        <label htmlFor="conventionalScore" className="form-label">Conventional Score</label>
        <input type="number" className="form-control" id="conventionalScore" />
      </div>
      <button type="submit" className="btn btn-primary me-2">Save</button>
      <button type="button" className="btn btn-secondary">Cancel</button>
    </form>
  );
};

export default StudentTestResultForm;
