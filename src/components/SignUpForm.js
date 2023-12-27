import React from 'react';
import './SignUpForm.css'; 

const SignUpForm = () => {
  return (
    <div className="signup-container">
      <h2>Create your account</h2>
      <form>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Phone" aria-label="Email" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon3" />
        </div>
        <button type="submit" className="btn btn-primary text-blue-600">Create account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
