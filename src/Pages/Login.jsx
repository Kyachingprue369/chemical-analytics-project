import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const userData = result.user;
        console.log(userData);
        navigate("/")
      })
      .catch(error => {
        console.log(error.message);
      })

  }
  return (
    <div className='w-11/12 mx-auto'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSignIn} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" name='email' placeholder="Email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" name='password' placeholder="Password" required />
                <button className="btn btn-neutral mt-4">Login</button>
                <p className='pt-3'>Don't have an account? please <Link className="text-blue-500 underline" to="/register">Register</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;