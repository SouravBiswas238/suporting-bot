import React from 'react';
import { useForm } from 'react-hook-form';


const Modal = ({ isOpen, onClose }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,

    } = useForm();
    const onSubmit = async (data) => {

        console.log(data)
    }
    return (
        <div className={`z-10 absolute w-[70%] py-10 bg-white dark:bg-[#182133]  transition-all duration-500 shadow-lg dark:text-gray-100  ${isOpen ? 'block' : 'hidden'}`}>
            <div className='relative '>
                {/* Your modal content here */}
                <label onClick={onClose} className="btn btn-sm btn-circle absolute right-2 -top-2">✕</label>
                <h2 className="text-2xl font-semibold dark:text-[#E2E8F0] text-center ">Please Submit the form</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">

                        {/* user email   */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                    Name
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input-customize dark:border-[#0D1425]  
                                    dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register('name', { required: true })}
                            />

                            {errors?.name?.type === 'required' && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Name is Required
                                </span>
                            )}
                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                    About
                                </span>
                            </label>
                            <textarea
                                className="input-customize dark:border-[#0D1425]  
                                   dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register("about", {
                                    maxLength: {
                                        value: 300,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.about?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 300 word
                                </span>
                            )}



                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                    FQA
                                </span>
                            </label>
                            <textarea
                                className="input-customize dark:border-[#0D1425]  
                                   dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register("fqa", {
                                    maxLength: {
                                        value: 500,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.fqa?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 500 word
                                </span>
                            )}
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                    Inventory
                                </span>
                            </label>
                            <textarea
                                className="input-customize-textarea dark:border-[#0D1425]  
                                   dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register("inventory ", {
                                    maxLength: {
                                        value: 750,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.inventory?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 750 word
                                </span>
                            )}
                        </div>

                        <input className='bg-[#0F172A] dark:bg-[#0284C7] font-bold  text-white  uppercase btn btn-primary-blue' type="submit" />

                    </div>
                </form>


            </div>
        </div>

    );
};

export default Modal;
