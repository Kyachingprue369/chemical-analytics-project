import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';

const Register = () => {

  const navigate = useNavigate();

  const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    //firebase sign up option
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        navigate("/")
      })
      .catch(error => {
        console.log(error.message)
      })
  }
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignUp} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" className="input" name='name' placeholder="Enter your name" required />
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Enter your email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Enter your password" required />
                <button className="btn btn-neutral mt-4">Register</button>
                <p className='pt-3'>Already have an Account? Please <Link className='text-blue-500 underline' to="/login">Login</Link> now</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;