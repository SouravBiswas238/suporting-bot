import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useFormateDate } from '../../../hooks/useFormateDate';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';



const SingleProfile = ({ contact }) => {


  const { setCurrentChatId, setCurrentChatName, setActiveBot } = useContext(useCompanyStore);


  const singleUserSelect = async (contactId, contactName, activeBot) => {
    setCurrentChatId(contactId)
    setCurrentChatName(contactName);
    setActiveBot(activeBot)
    // console.log("setdata=>", activeBot)

  };
  // console.log(contact)


  // console.log(useFormateDate(contact?.updated_at))

  return (
    <div for="my-modal-3" className=" ">
      <div onClick={() => singleUserSelect(contact?.id, contact?.customer, contact?.active_bot)} className="py-2 cursor-pointer lg:flex justify-between rounded  border-b-2 hover:bg-[#F0F2F5] bg-[#FFFFFF}">
        <div className="flex justify-start items-center">
          <div className="avatar p-2 ">
            <div className="w-[40px] rounded-full">
              <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
            </div>
          </div>
          <div className="mx-2 my-auto w-[400px]">
            <div className='flex items-center justify-between'>

              <h2 className="py-0 uppercase font-semibold">
                {contact?.customer}


              </h2>
              <p className='text-[11px]'>  {
                useFormateDate(contact?.updated_at)
              }</p>


            </div>

            <p className="font-bold text-sm">

              <span className="font-normal">
                {contact?.latest_message_text.length >= 57 ? contact?.latest_message_text.slice(0, 57) + "....." : contact?.latest_message_text}


              </span>{' '}
            </p>
          </div>
        </div>


      </div>


    </div>
  );
};

export default SingleProfile;
