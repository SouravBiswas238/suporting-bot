import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';



const SingleProfile = ({ contact }) => {


  const { setCurrentChatId, setCurrentChatName } = useContext(useCompanyStore);

  const singleUserSelect = async (contactId, contactName) => {
    setCurrentChatId(contactId)
    setCurrentChatName(contactName);

  };

  return (
    <div for="my-modal-3" className=" ">
      <div onClick={() => singleUserSelect(contact?.id, contact?.customer)} className="my-2 cursor-pointer lg:flex justify-between rounded my-border bg-sky-50 hover:bg-sky-100">
        <div className="flex justify-start items-center">
          <div className="avatar p-2 ">
            <div className="w-[40px] rounded-full">
              <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
            </div>
          </div>
          <div className="mx-2 my-auto">
            <h2 className="py-0 uppercase font-semibold">
              {contact?.customer}
            </h2>
            <p className="font-bold text-sm">

              <span className="font-normal">
                {contact?.latest_message_text.length >= 120 ? contact?.latest_message_text.slice(0, 120) + "  ..." : contact?.latest_message_text}


              </span>{' '}
            </p>
          </div>
        </div>


      </div>


    </div>
  );
};

export default SingleProfile;
