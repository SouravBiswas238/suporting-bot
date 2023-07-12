import React, { useContext } from 'react';
import { useState } from 'react';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';
import Loading from '../../Shared/Loading';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleProfile from './SingleProfile';
import './SingleChat.css';



const ChatPage = () => {

    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState('');
    const { setCurrentChatId } = useContext(useCompanyStore);


    const handelSearch = () => {
        // const fetchChats = async () => {
        //     const data = await axios.get(`${serverLink}/user/search-user?search=${search}`, {
        //         headers: {
        //             authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        //         },
        //     })
        //         .then(function (res) {
        //             setSearchResult(res?.data);
        //         })
        //         .catch(function (err) {
        //             // (err) === true && navigate('/login')
        //         })

        // }
        // fetchChats();
        setSearchResult("");
    }


    return (
        <div>
            <div className="drawer h-[calc(100vh-110px)]">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content ">
                    <div className='grid lg:grid-cols-3  py-1 chat-background ]'>
                        <div className="h-[calc(100vh-130px)] carousel carousel-vertical ">

                            <div className=''>

                                <MyChat ></MyChat>
                            </div>

                        </div>

                        <div className='lg:col-span-2'>
                            <ChatContainer />
                        </div>
                    </div>
                </div>

                {/* sidebar for search */}
                <div className="drawer-side">
                    <label for="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto lg:w-[30%] w-[90%] bg-base-100 text-base-content">
                        <li className='text-center p-2 font-bold'>Search User</li>

                        <div className='flex items-center'>
                            <input
                                type="text"
                                className='my-border p-1  mx-2 my-auto w-[70%]'
                                placeholder=' name or email'
                                onChange={(event) => {
                                    setSearch(event.target.value);
                                }}
                                onKeyPress={(event) => {
                                    event.key === "Enter" && handelSearch();
                                }}
                            />
                            <span onClick={handelSearch} className='btn-sm  btn my-auto'>Search</span>
                        </div>

                        <div>
                            {
                                searchResult ? "Search your Chat" ? searchResult?.map((chat, index) => <SingleProfile
                                    key={index}
                                    setCurrentChatId={setCurrentChatId}
                                    chat={chat} />) : <Loading></Loading> : <Loading></Loading>
                            }
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default ChatPage;