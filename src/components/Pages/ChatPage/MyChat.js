import React, { useContext, useEffect, useState } from 'react';
import SingleProfile from './SingleProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Loading from '../../Shared/Loading';
import axios from 'axios';
import { serverLink } from '../../../utilities/links';
import { useParams } from 'react-router-dom'


const MyChat = () => {
  const [contracts, setContracts] = useState([])
  const saveToken = sessionStorage.getItem("accessToken");

  // get id from params
  let { id } = useParams();


  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${serverLink}/chat/get/contacts/${id}`, {
          headers: {
            'Authorization': 'Token ' + saveToken,
          }
        });
        // Handle the response data
        setContracts(response?.data?.results);
      } catch (error) {
        // Handle the error
        console.error(error);
      }
    };

    fetchContacts();
  }, [id]);



  return (
    <div className="lg:mx-2 pt-2">
      {/* My contacts header start*/}
      <div className="flex justify-between  my-border rounded">
        <h2 className="text-3xl lg:px-2 mt-1 font-bold ">My Chats</h2>
        <div className="drawer-content text-right text-black">
          <label
            for="my-drawer"
            className="m-2 btn-sm btn my-border hover:bg-sky-400  bg-sky-500 text-white"
          >
            <FontAwesomeIcon icon={faSearch} />{' '}
            <span className=" px-2"> Search Chat</span>
          </label>
        </div>
      </div>
      {/*My contracts header end*/}

      {/* load all contacts  */}
      <div className="overflow-x-hidden  overflow-y-auto ">
        {
          contracts && contracts?.length !== 0 ? (contracts?.map((contact) => <SingleProfile
            saveToken={saveToken}
            // key={contact?.id}
            contact={contact}
          />)) : (contracts ? < Loading ></Loading> : "No contracts found")

        }

      </div>
    </div >
  );
};

export default MyChat;
