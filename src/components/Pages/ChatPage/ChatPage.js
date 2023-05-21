import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { io } from 'socket.io-client';
import { socketLink } from '../../../utilities/links';
import Loading from '../../Shared/Loading';
import ChatContainer from './ChatContainer';
import MyChat from './MyChat';
import SingleProfile from './SingleProfile';



const ChatPage = () => {

    const [currentChatId, setCurrentChatId] = useState(Number);
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState('');


    // const socket = io.connect(`${socketLink}/${currentChatId}/?token=${saveToken}`);
    // const socket = io.connect(`ws://aisalesteams.com/ws/chat/3/?token=01efac2e32d28b2c4badd63b1b868439b390eac3`);




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
                                {
                                    <MyChat setCurrentChatId={setCurrentChatId} ></MyChat>
                                }
                            </div>

                        </div>

                        <div className='lg:col-span-2'>
                            <ChatContainer
                                key={currentChatId}
                                currentChatId={currentChatId}
                        
                            ></ChatContainer>
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
                                searchResult ? "Search your Chat" ? searchResult?.map((chat) => <SingleProfile
                                    key={chat?._id}
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