import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import PasswordStrengthBar from 'react-password-strength-bar';
import makeId from './SuggestPass';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-web';
import regisLottie from './lottie1.json';
import axios from 'axios';
import { serverLink } from '../../../utilities/links';
import Loading from '../../Shared/Loading';
// import useFetch from "react-fetch-hook"

const Register = () => {
  // for lottie
  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: regisLottie,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
    // More logic goes here
  }, []);
  const accType = localStorage.getItem('accountType');
  const navigate = useNavigate();

  const [passwordBar, setPasswordBar] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [customError, setCustomError] = useState('');
  const [loading, setLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    if (data.password1 === data.password2) {
      console.log(data)
      try {
        // Post data to the API
        const response = await axios.post(`${serverLink}/account/registration`, data);
        console.log(response)

        response.status && setLoading(false);
        response.status && setCustomError('');
        if (response.status === 204) {
          navigate('/') && toast('user create successfully');
        }

        // Save access token in session storage FXpGTuJC1g@&3
        const { key } = response.data;
        console.log(key);
        // Save access token in session storage
        sessionStorage.setItem("accessToken", key);
        console.log("Access token saved in session storage:", key);
        // response.data.status === 204 && navigate('/');


        // Perform additional actions after successful login, if needed
      } catch (error) {
        error.message && setLoading(false);
        console.error("Error logging in:", error);
        error.message && setCustomError(error.message);
        error.response.data?.non_field_errors && setCustomError(error.response.data?.non_field_errors);
        error.response?.data?.email && setCustomError(error.response?.data?.email);



      }

    } else {
      setCustomError("Password not matched")
    }
  };
  console.log(customError);

  if (loading) {
    return <Loading />;
  }

  // fetch data FXpGTuJC1g@&3

  // const { isLoading, apiData, apiError } = useFetch(
  //   "GET",
  //   "https://jsonplaceholder.typicode.com/users",
  //   {}
  // );
  // console.log(isLoading, apiData, apiError)

  // const { isLoading, apiError, data } = useFetch("https://jsonplaceholder.typicode.com/users");
  // console.log(data, isLoading, apiError);


  return (
    <div>
      <div className="min-h-[100vh] py-10 dark:bg-[#0D1425] bg-[#F3F3F3]">
        <div className="conatiner container max-w-[1349px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className=" ">
              <div className="card flex-shrink-0 w-full order-last md:order-first">
                {/* form for submit */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                    <h1 className="text-[2.5rem] font-bold text-center dark:text-white text-[#334155]">
                      <span className="text-[#3878DF] dark:text-[#38BDF8] capitalize">
                        {accType}
                      </span>{' '}
                      Registration
                    </h1>
                    {/* user email   */}
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                          Email
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                        {...register('email', { required: true })}
                      />
                    </div>
                    {errors?.email?.type === 'required' && (
                      <p className="label-text-alt text-red-500 text-lg">
                        Email is Required
                      </p>
                    )}
                    <div className="form-control">
                      {/* Password */}
                      <label className="label">
                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155] my-1">
                          Password
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="hidden input input-bordered text-xl"
                      />
                      <input
                        value={passwordBar}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Input Password"
                        name="password1"
                        className="input-customize dark:border-[#0D1425]  
                                                dark:bg-[#1E293B] dark:text-white dark:outline-0"
                        {...register('password1', {
                          required: true,
                          // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        })}
                        onChange={(e) => setPasswordBar(e.target.value)}
                      />
                      {errors?.password1?.type === 'required' && (
                        <span className="label-text-alt text-red-500 text-lg">
                          Password is Required
                        </span>
                      )}

                      {/*Confirm Password */}
                      <label className="label">
                        <p className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155] my-1">
                          Confirm Password
                        </p>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="hidden input input-bordered text-xl"
                      />
                      <input

                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        name="password2"
                        className="input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                        {...register('password2', {
                          required: true,
                        })}

                      />
                      {errors?.password2?.type === 'required' && (
                        <span className="label-text-alt text-red-500 text-lg">
                          Password is Required
                        </span>
                      )}


                      <div className="text-md flex  justify-between mt-4  md:items-center xs:flex-col-reverse">
                        <div>
                          <button
                            className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]"
                            onClick={() => setPasswordBar(makeId(10))}
                          >
                            Suggest a Strong Password
                          </button>
                        </div>
                        <div className="text-xl flex justify-end">
                          <div className="form-control ">
                            <label className="label cursor-pointer  ">
                              <div className="flex justify-around gap-2 items-center ">
                                <p className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                  Show Password
                                </p>
                                <input
                                  onChange={() =>
                                    setShowPassword(!showPassword)
                                  }
                                  type="checkbox"
                                  checked={showPassword}
                                  className="checkbox"
                                />
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      <PasswordStrengthBar password={passwordBar} />

                      <label className="label">
                        {errors.password1?.type && errors.password2?.type === 'pattern' && (
                          <span className="label-text-alt text-red-500 text-lg text-[.8rem]">
                            Password must be atleast 6 characters containing
                            both capital and small letter, a Number, 1 special
                            characters
                          </span>
                        )}

                      </label>


                    </div>



                    {
                      customError && <span className="label-text-alt text-red-500 text-lg">
                        {customError}
                      </span>
                    }

                    <div className="mt-4 flex justify-between items-center">

                      <button className="bg-[#0F172A] dark:bg-[#0284C7] font-bold btn-login text-white  uppercase">
                        Register
                      </button>

                      <label>
                        <Link
                          to="/login"
                          className="label-text pointer font-semibold dark:text-[#8C9BB6] text-[#334155]"
                        >
                          Already have an account? Login
                        </Link>
                      </label>
                    </div>

                    {/* continu with google part */}
                    {/* <div className="flex justify-center items-center my-5">
                      <div className=" text-center border-2  w-full text-[#474d59]"></div>
                      <div className=" text-center mx-2 dark:text-[#8C9BB6]">OR</div>
                      <div className=" text-center border-2  w-full text-[#8C9BB6]"></div>
                    </div>
                    <div className="form-control mt-4 ">
                      <button
                        className=" py-2  flex justify-center items-center input-border dark:border-0 font-semibold bg-transparent text-[#334155] dark:text-[#8C9BB6] dark:bg-[#1E293B] w-full "
                      >
                        <img src={googleLogo} alt="" />
                        <span className="text-[#334155] dark:text-[#8C9BB6]  ml-2">
                          Continue With Google
                        </span>
                      </button>
                    </div> */}
                  </div>
                </form>

              </div>

            </div>

            {/* right side animation */}
            <div className="flex justify-center items-center">
              <div className="w-fit mx-auto">
                <div
                  className="overflow-hidden"
                  style={{
                    height: '600px',
                    width: '100%',
                    overflow: 'hidden',
                    outline: 'none',
                    margin: '0 auto',
                  }}
                  ref={anime}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
