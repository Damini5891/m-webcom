import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="loginEmail" className="form-label">Email address</label>
        <input type="email" className="form-control" id="loginEmail" />
      </div>
      <div className="mb-3">
        <label htmlFor="loginPassword" className="form-label">Password</label>
        <input type="password" className="form-control" id="loginPassword" />
      </div>
      <button type="submit" className="btn btn-primary text-blue-600">Login</button>
    </form>
  );
};

export default LoginForm;
