
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../Auth/Authprovider';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const Login = () => {

  const {login, googleLogin}  = useContext(Authcontext)
  const location = useLocation()
  const navigate = useNavigate()
  
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // login func call
        login(email , password)
        .then(res => {
          console.log(res.user)
        navigate(location.state? location.state :  '/')

          toast.success("Login Success !", {
            position: "top-center"
          });
        })
        .catch(err => {
          toast.success("There is an error !", {
            position: "top-center"
          });
          console.log(err)
        })

    }  
    
    
    const handleGogleLogin =()=>{
      googleLogin()
      .then(res => {

        navigate(location.state? location.state :  '/')


        
        toast.success("Login Success !", {
          position: "top-center"
        });




      })
      .catch(err => {
        toast.error(err.message, {
          position: "top-center"
        });
        console.log(err.message)
      })
    }




    return (
        <div className="hero bg-base-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2 mr-12">
            <img src={img} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
            <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-xl text-center font-bold text-indigo-600">Login </h1>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type='submit' className="btn bg-indigo-900  text-white hover:bg-indigo-700">Login</button>
              </div>
            </form>
            <div className='flex items-center justify-center'>
            <button onClick={handleGogleLogin} className='btn btn-ghost'>Google</button>
            <button className='btn btn-ghost'>Github</button>
            </div>

            <p className='my-4 text-center'>New to <span className='font-semibold'>Blogaa ?</span> <Link to='/register' className='link mx-2  text-indigo-600'>Register</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;