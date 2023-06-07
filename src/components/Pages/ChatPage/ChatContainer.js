import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import Chatinput from './Chatinput';
import { FaEllipsisV, FaUserCircle } from 'react-icons/fa';
import { serverLink, socketLink } from './../../../utilities/links';
import Lottie from 'lottie-web';
import lottieData from './27649-lets-chat.json';
import Loading from '../../Shared/Loading';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';
import { animateScroll } from 'react-scroll';
import ChatContainerHeader from './miniComponent/ChatContainerHeader';

const ChatContainer = () => {
  const saveToken = sessionStorage.getItem("accessToken");
  const [messages, setMessages] = useState([]);
  const [msgLoading, setMsgLoading] = useState(true);
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const messageContainerRef = useRef(null);


  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
      containerId: 'messageContainer',
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  useEffect(() => {
    // Scroll to bottom when a new message arrives
    scrollToBottom();
  }, [messages, arrivalMessage]);


  // from context
  const { currentChatId, currentChatName } = useContext(useCompanyStore);

  useEffect(() => {
    const fetchChatMessages = async () => {
      if (currentChatId) {
        setMsgLoading(true);
        try {
          const response = await axios.get(`${serverLink}/chat/get/messages/${currentChatId}`, {
            headers: {
              'Authorization': 'Token ' + saveToken,
            },
          });
          setMessages(response?.data?.results);
        } catch (error) {
          console.error(error);
        }
        setMsgLoading(false);
      }
    };

    fetchChatMessages();
  }, [currentChatId]);

  useEffect(() => {
    setArrivalMessage([]); // Set the state to an empty array when the ID changes
  }, [currentChatId]);

  // lottie animation
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    });
  }, []);

  const anime = useRef(null);
  const socket = useRef(null);

  // fetch all chat and connect socket
  useEffect(() => {
    if (currentChatId) {
      socket.current = new WebSocket(`${socketLink}/${currentChatId}/?token=${saveToken}`);

      socket.current.onmessage = function (e) {
        const data = JSON.parse(e.data);
        const sender = data?.sender;
        const bot_message = data?.message;
        setArrivalMessage(prevArrivalMessages => [...prevArrivalMessages, { bot_message, sender }]);
      };
    }

    return () => {
      if (socket.current) {
        socket.current.close();
      }
    };
  }, [currentChatId, saveToken]);

  // send message to the socket
  const handleSendMsg = async (msg) => {
    if (socket.current) {
      socket.current.send(JSON.stringify({
        'message': msg,
        'sender': 'bot',
      }));
    }
  };
  // for message sorting to the update date
  messages?.sort((a, b) => new Date(a?.updated_at) - new Date(b?.updated_at));

  return (
    <div className="w-100">
      {currentChatId !== 0 && (
        <div>
          {/* chat header */}
          <ChatContainerHeader 
          currentChatId={currentChatId}
          currentChatName={currentChatName} 
          />


          {msgLoading ? (
            <Loading></Loading>
          ) : (
            <>
              {/* chat body */}
              <div id="messageContainer" ref={messageContainerRef} className="message-body overflow-x-hidden overflow-y-auto h-[calc(100vh-240px)]">
                {messages?.map((message) => {
                  return (
                    <div>
                      {message?.customer_message && (
                        <div
                          className={`message ${message?.customer_message ? 'recieved' : 'sended'}`}
                        >
                          <div className="content">
                            <p>{message?.customer_message}</p>
                          </div>
                        </div>
                      )}
                      {message?.bot_message && (
                        <div className={`message ${message?.bot_message ? 'sended' : 'recieved'}`}>
                          <div className="content">
                            <p>{message?.bot_message}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                {/* for arrival message */}
                {arrivalMessage?.map((message) => {
                  return (
                    <div>
                      {message?.sender && (
                        <div className={`message ${message?.sender === 'bot' ? 'sended' : 'recieved'}`}>
                          <div className="content">
                            <p>{message?.bot_message}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <Chatinput handleSendMsg={handleSendMsg} />
        </div>
      )}
      {/* when not selecting the chat id thek show the section */}
      {currentChatId === 0 && (
        <>
          <h2 className="text-center text-3xl my-5 font-bold">Select your Chat</h2>

          <div
            className="overflow-hidden mx-auto"
            style={{ height: 400, width: 600 }}
            ref={anime}
          ></div>
        </>
      )}
    </div>
  );
};

export default ChatContainer;
