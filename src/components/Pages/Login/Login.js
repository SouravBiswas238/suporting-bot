import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import googleLogo from '../../../images/google.png';
import Lottie from 'lottie-web';
import loginLottie from './login2.json';
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { serverLink } from '../../../utilities/links';
import Loading from '../../Shared/Loading';
import { CompanyStore, useCompanyStore } from '../../../stateManagement/CompanyStore';
// import loginLottie from './login-lottie.json'

const Login = () => {
  // for lottie
  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loginLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    // More logic goes here
  }, []);

  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const [loading, setLoading] = useState(false);
  const [customError, setCustomError] = useState('');



  // React hook forms element
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  // Error State
  const navigate = useNavigate();

  const { setLoginUser } = useContext(useCompanyStore);

  // globalUser is [user]= useAuthState(auth)
  const [showPassword, setShowPassword] = useState(false);

  if (loading) {
    return <Loading />;
  }
  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      // Post data to the API
      const response = await axios.post(`${serverLink}/account/login/`, formData);
      console.log(response)
      response && setLoading(false)
      // Save access token in session storage 7nuwNVeeDh*@74
      const { key } = response.data;
      setLoginUser(key);
      // console.log(key);
      // Save access token in session storage
      sessionStorage.setItem("accessToken", key);
      // Perform additional actions after successful login, if needed
      response.status === 200 && navigate('/');

    } catch (error) {
      error && setLoading(false);
      console.log(error)
      error.message && setCustomError(error.message);
      error.response.data?.non_field_errors && setCustomError(error.response.data?.non_field_errors);
      error.response.data.email && setCustomError(error.response.data.email);
      // Handle error, if needed
    }
  };



  return (
    <div className="min-h-[100vh] py-10 dark:bg-[#0D1425] bg-[#F3F3F3]">
      <div className=" container max-w-[1349px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card flex-shrink-0 w-full order-last md:order-first">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-[2.5rem] font-bold text-center text-[#0D1425] dark:text-white">
                  {' '}
                  <span className="text-[#3878DF] dark:text-[#38BDF8]">
                    Login
                  </span>{' '}
                  Here
                </h1>
                <p className="text-[#334155] dark:text-[#8C9BB6] font-semibold text-center  text-[1.25rem]">
                  Dont share your login information
                </p>
                <div className="form-control mt-4">
                  <label className="label my-2">
                    <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="my-2 input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                    {...register('email', { required: true })}
                  />
                  <label className="label">
                    {errors?.email?.type === 'required' && (
                      <span className="label-text-alt text-lg">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text dark:text-[#8C9BB6] text-[#334155] font-semibold">
                      Password
                    </span>
                  </label>
                  <div className='flex relative'>


                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      name="password"
                      className="input-customize my-2 dark:border-[#0D1425] dark:bg-[#1E293B] dark:text-white"
                      {...register('password', {
                        required: true,
                      })}
                    ></input>



                    <label className="label cursor-pointer absolute right-1 top-3 text-[19px] ">
                      <input onChange={() => setShowPassword(!showPassword)} type="checkbox" checked={showPassword} className="checkbox " />
                    </label>
                  </div>
                  {errors?.password?.type === 'required' && (
                    <span className="label-text-alt text-red-500 text-lg">
                      Password is Required
                    </span>
                  )}
                  {
                    customError && <p className="label-text-alt text-red-500 text-lg">
                      {customError}
                    </p>
                  }
                  <div className="mt-6 flex justify-between items-center">
                    {/* <div>
                                            <label className="my-2">
                                                <Link to="/forgetPassword" className=" hover:text-primary"><span >Forgot password?</span></Link>
                                            </label>
                                        </div> */}



                    <button
                      type="submit"
                      className=" font-bold  text-white btn-login loading uppercase dark:bg-[#0284C7] bg-[#0F172A]"
                    >
                      Login
                    </button>



                    <div>
                      <label className="my-2">
                        <Link
                          to="/forgetPassword"
                          className=" text-[#3878DF] dark:text-[#38BDF8]"
                        >
                          <span>Forgot password?</span>
                        </Link>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Error Shows here */}
                {/* <div>
                  {passwordError && (
                    <p className="text-red-500">{passwordError}</p>
                  )}
                  {gError && (
                    <p value={gError} className="text-red-500 font-bold">
                      {gError.message.slice(9)}
                    </p>
                  )}
                  {error && (
                    <p className="text-red-500 font-bold">
                      {error?.message?.slice(9)}
                    </p>
                  )}
                </div> */}


              </form>
              <div className="flex justify-center items-center my-5">
                <div className=" text-center border-2  w-full text-[#474d59]"></div>
                <div className=" text-center mx-2 dark:text-[#8C9BB6]">OR</div>
                <div className=" text-center border-2  w-full text-[#8C9BB6]"></div>
              </div>
              <div className="form-control mt-4 ">
                <button
                  className=" py-2 flex justify-center items-center input-border dark:border-0 font-semibold bg-transparent text-[#334155] dark:text-[#8C9BB6] dark:bg-[#1E293B] w-full "
                >
                  <img src={googleLogo} alt="" />
                  <span className="text-[#334155] dark:text-[#8C9BB6]  ml-2">
                    Continue With Google
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-fit mx-auto">
              <div
                className="overflow-hidden"
                style={{
                  height: '500px',
                  width: '100%',
                  overflow: 'hidden',
                  outline: 'none',
                  margin: '0 auto',
                }}
                ref={anime}
              ></div>
              ;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
