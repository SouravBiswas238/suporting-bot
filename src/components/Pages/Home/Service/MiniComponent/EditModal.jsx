import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useCompanyStore } from '../../../../../stateManagement/CompanyStore';
import { toast } from 'react-toastify';



const EditModal = ({ singleCompany, isOpenEdit, handleCloseEditModal }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset
    } = useForm();


    const { setEditData, updatedData, isLoading } = useContext(useCompanyStore);

    const onSubmit = async (data) => {

        setEditData(data);
        reset({});

        if (updatedData.status === 200) {
            toast.success("Data updated successfully");
            handleCloseEditModal();
        }
    }
    useEffect(() => {
        // Initialize the form with default data from the company
        setValue('name', singleCompany?.name);
        setValue('whatsapp_number', singleCompany?.whatsapp_number);
        setValue('about', singleCompany?.about);
        setValue('faq', singleCompany?.faq);
        setValue('inventory', singleCompany?.inventory);

    }, [singleCompany, setValue]);

    if (isLoading) {
        handleCloseEditModal()
    }


    return (
        <div className={` z-10 mx-5 rounded-lg absolute w-[70%]  bg-white dark:bg-[#182133]  transition-all duration-500 shadow-lg dark:text-gray-100  ${isOpenEdit ? 'block' : 'hidden'}`}>
            <div className='relative mt-5'>
                {/* Your modal content here */}
                <label onClick={handleCloseEditModal} className="dark:text-[#E2E8F0]  flex items-center justify-center border-2 border-primary text-2xl btn-circle absolute right-2 top-0">✕</label>
                <h2 className="text-2xl font-semibold dark:text-[#E2E8F0] text-center ">Edit the form for {singleCompany?.name}</h2>

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
                                defaultValue={singleCompany?.name}
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
                                defaultValue={singleCompany?.whatsapp_number}
                                {...register("whatsapp_number", {
                                    maxLength: {
                                        message: 'error message'
                                    },
                                    validate: {
                                        wordCount: value => {
                                            const wordArray = value.trim().split(/\s+/);
                                            return wordArray.length <= 100 || 'Max 100 words';
                                        }
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
                                defaultValue={singleCompany?.about}
                                {...register("about", {
                                    maxLength: {
                                        message: 'error message'
                                    },
                                    validate: {
                                        wordCount: value => {
                                            const wordArray = value.trim().split(/\s+/);
                                            return wordArray.length <= 300 || 'Max 300 words';
                                        }
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
                                defaultValue={singleCompany?.faq}

                                {...register("faq", {
                                    maxLength: {
                                        message: 'error message'
                                    },
                                    validate: {
                                        wordCount: value => {
                                            const wordArray = value.trim().split(/\s+/);
                                            return wordArray.length <= 900 || 'Max 900 words';
                                        }
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
                                defaultValue={singleCompany?.inventory}

                                {...register("inventory", {
                                    maxLength: {
                                        message: 'error message'
                                    },
                                    validate: {
                                        wordCount: value => {
                                            const wordArray = value.trim().split(/\s+/);
                                            return wordArray.length <= 950 || 'Max 950 words';
                                        }
                                    }
                                })}
                            />
                            {errors?.inventory?.message && (
                                <span className="label-text-alt text-red-500 text-lg">
                                    Max 950 word
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

export default EditModal;
