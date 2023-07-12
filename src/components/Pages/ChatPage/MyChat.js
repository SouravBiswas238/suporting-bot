import React, { useContext, useEffect, useState } from 'react';
import SingleProfile from './SingleProfile';
import Loading from '../../Shared/Loading';
import axios from 'axios';
import { serverLink } from '../../../utilities/links';
import { useParams } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
import FileDownload from './miniComponent/FileDownload';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';
import SearchNewChat from './miniComponent/SearchNewChat';
import ContractsHeader from './miniComponent/ContractsHeader';


const MyChat = () => {
  const [contracts, setContracts] = useState([])
  const saveToken = sessionStorage.getItem("accessToken");

  // get id from params
  let { id } = useParams();
  const { currentChatId, currentChatName, activeBot } = useContext(useCompanyStore);



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
  }, [id, saveToken, activeBot]);

  // console.log(contracts)
  contracts?.sort((a, b) => new Date(a?.updated_at) - new Date(b?.updated_at));


  return (
    <div className="lg:ms-2 pt-0 bg-white">
      {/* My contacts header start*/}
      <div className='sticky top-0 bg-white z-40'>

        <ContractsHeader />
        <SearchNewChat />
      </div>

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
