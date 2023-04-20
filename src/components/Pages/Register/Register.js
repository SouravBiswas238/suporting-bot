import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';

import PasswordStrengthBar from 'react-password-strength-bar';
import makeId from './SuggestPass';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import googleLogo from '../../../images/google.png';
import Lottie from 'lottie-web';
import regisLottie from './lottie1.json';
import AccountTypePage from './AccountTypePage';

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

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [passwordBar, setPasswordBar] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [usernameAvailable, setUsernameAvailable] = useState(null);
  const [showAccType, setShowAccType] = useState(false);
  const [username, setUsername] = useState('');
  let loading;

  //Token
  const onSubmit = async (data) => {
    if (data.password === data.confirmPassword) {
      console.log(data)

    } else {
      console.log("password not matched")
    }
  };




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
                    <div className="form-control mb-">
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

                    <div className="form-control">
                      {/* Password */}
                      <label className="label">
                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
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
                        name="password"
                        className="input-customize dark:border-[#0D1425]  
                                                dark:bg-[#1E293B] dark:text-white dark:outline-0"
                        {...register('password', {
                          required: true,
                          // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        })}
                        onChange={(e) => setPasswordBar(e.target.value)}
                      />

                      {/*Confirm Password */}
                      <label className="label">
                        <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                          Confirm Password
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Email"
                        className="hidden input input-bordered text-xl"
                      />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        className="input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                        {...register('confirmPassword', {
                          required: true,
                          // pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                        })}
                      />

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
                        {errors.password?.type == 'pattern' && (
                          <span className="label-text-alt text-red-500 text-lg">
                            Password must be atleast 6 characters containing
                            both capital and small letter, a Number, 1 special
                            character
                          </span>
                        )}
                        {errors?.password?.type === 'required' && (
                          <span className="label-text-alt text-red-500 text-lg">
                            Password is Required
                          </span>
                        )}
                      </label>


                    </div>



                    <div className="mt-4 flex justify-between items-center">
                      {loading ? (
                        <button className="bg-[#0F172A] dark:bg-[#0284C7] font-bold btn-login text-white  uppercase">
                          Register
                        </button>
                      ) : (
                        <button className="bg-[#0F172A] dark:bg-[#0284C7] font-bold btn-login text-white  uppercase">
                          Register
                        </button>
                      )}
                      <label>
                        <Link
                          to="/login"
                          className="label-text pointer font-semibold dark:text-[#8C9BB6] text-[#334155]"
                        >
                          Already have an account? Login
                        </Link>
                      </label>
                    </div>
                    <div className="flex flex-col w-full border-opacity-50">
                      <div className="divider dark:text-[#8C9BB6]">OR</div>
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
                    </div>
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
