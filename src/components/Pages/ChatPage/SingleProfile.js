import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { serverLink } from '../../../utilities/links';
import Loading from '../../Shared/Loading';

import SingleChatModal from './SingleChatModal';

const SingleProfile = ({ contact, saveToken, setCurrentChatId }) => {
  const [chatModalId, setChatModalId] = useState('');


  const singleUserSelect = async (contactId) => {
    setCurrentChatId(contactId)
  };


  // fetch for last message
  // const asyncFetchDailyData = async () => {
  //   if (chat) {
  //     const response = await axios.post(`${serverLink}/messages/getmsg`, {
  //       from: currentUser._id,
  //       to: chat._id,
  //     });
  //     setLastMessage(response.data);
  //   }
  // };
  // useEffect(() => {
  //   // asyncFetchDailyData();
  // }, []);

  // let lastOne = lastMessage?.slice(-1);
  // let lastMsg = lastOne[0]?.message;
  // let lastMsgLength = lastMsg?.slice(0, 15);

  return (
    <div for="my-modal-3" className=" ">
      <div onClick={() => singleUserSelect(contact?.id)} className="my-2 cursor-pointer lg:flex justify-between rounded my-border bg-sky-50 hover:bg-sky-100">
        <div className="flex justify-start">
          <div className="avatar p-2">
            <div className="w-[50px] rounded-full">
              <FaUserCircle className="text-4xl mr-2 cursor-pointer" />
            </div>
          </div>
          <div className="mx-2 my-auto">
            <h2 className="py-0">
              {'companyName'}

            </h2>
            <p className="font-bold text-sm">
              lastMsg :
              <span className="font-normal">
                {contact?.latest_message_text}

              </span>{' '}
            </p>
          </div>
        </div>


      </div>


    </div>
  );
};

export default SingleProfile;
