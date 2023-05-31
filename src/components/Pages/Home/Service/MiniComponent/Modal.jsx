import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useCompanyStore } from '../../../../../stateManagement/CompanyStore';


const Modal = ({ isOpen, onClose }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm();

    const { setData } = useContext(useCompanyStore);

    const onSubmit = async (data) => {
        setData(data);
        reset();
    }
    return (
        <div className={` z-10 mx-5 rounded-lg absolute w-[70%]  bg-white dark:bg-[#182133]  transition-all duration-500 shadow-lg dark:text-gray-100  ${isOpen ? 'block' : 'hidden'}`}>
            <div className='relative mt-5'>
                {/* Your modal content here */}
                <label onClick={onClose} className="dark:text-[#E2E8F0]  flex items-center justify-center border-2 border-primary text-2xl btn-circle absolute right-2 top-0">✕</label>
                <h2 className="text-2xl font-semibold dark:text-[#E2E8F0] text-center ">Fill the form to create a Company</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body">

                        {/* user name   */}
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
                        {/* contact */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-[#8C9BB6] text-[#334155]">
                                    Contact
                                </span>
                            </label>
                            <textarea
                                className="input-customize dark:border-[#0D1425]  
                                   dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register("whatsapp_number", {
                                    maxLength: {
                                        value: 100,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.whatsapp_number?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 100 word
                                </span>
                            )}
                        </div>
                        {/* about */}
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
                                    FAQ
                                </span>
                            </label>
                            <textarea
                                className="input-customize dark:border-[#0D1425]  
                                   dark:bg-[#1E293B] dark:text-white dark:outline-0"
                                {...register("faq", {
                                    maxLength: {
                                        value: 900,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.faq?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 900 word
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
                                        value: 950,
                                        message: 'error message'
                                    }
                                })}
                            />
                            {errors?.inventory?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 950 word
                                </span>
                            )}
                        </div>

                        <input onClick={onClose} className='bg-[#0F172A] dark:bg-[#0284C7] font-bold  text-white  uppercase btn btn-primary-blue' type="submit" />

                    </div>
                </form>


            </div>
        </div>

    );
};

export default Modal;
