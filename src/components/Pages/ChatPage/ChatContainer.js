import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import Chatinput from './Chatinput';
import { serverLink, socketLink } from './../../../utilities/links';
import Lottie from 'lottie-web';
import lottieData from './27649-lets-chat.json';
import Loading from '../../Shared/Loading';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';
import { animateScroll } from 'react-scroll';
import ChatContainerHeader from './miniComponent/ChatContainerHeader';
import FileDownload from './miniComponent/FileDownload';

const ChatContainer = () => {
  const saveToken = sessionStorage.getItem("accessToken");
  const [messages, setMessages] = useState([]);
  const [msgLoading, setMsgLoading] = useState(true);
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const messageContainerRef = useRef(null);

  // onclick scroll to bottom in the msg
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
  const { currentChatId, currentChatName, activeBot } = useContext(useCompanyStore);

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
        console.log("data=>", data)
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
        "message": {
          "type": "text",
          "text": msg
        },
        'sender': 'bot',
      }));
    }
  };

  // for message sorting to the update date
  messages?.sort((a, b) => new Date(a?.updated_at) - new Date(b?.updated_at));

  const formateDate = (dateString) => {
    const currentDate = new Date();
    const date = new Date(dateString);

    const diffInDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) {
      return null;
    } else if (diffInDays === 1) {
      return `Yesterday`;
    } else if (diffInDays <= 7) {
      const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return daysOfWeek[date.getDay()];
    } else {
      return date.toLocaleString([], { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
  };

  const msgTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleDownload = (mediaId) => {
    const link = document.createElement('a');
    link.href = `https://aisalesteams.com/message/media/${mediaId}`;
    link.download = 'image.jpg';
    link.click();
  };

  return (
    <div className="w-100">
      {currentChatId !== 0 && (
        <div>
          {/* chat header */}
          <ChatContainerHeader
            currentChatId={currentChatId}
            currentChatName={currentChatName}
            activeBot={activeBot}
          />

          {msgLoading ? (
            <Loading></Loading>
          ) : (
            <>
              {/* chat body */}
              <div id="messageContainer" ref={messageContainerRef} className="message-body overflow-x-hidden overflow-y-auto h-[calc(100vh-240px)]">
                {messages?.map((message, index) => {
                  return (
                    <div key={index}>
                      {message?.customer_message && (
                        <div
                          className={`message ${message?.customer_message ? 'recieved' : 'sended'}`}
                        >
                          <div className="content">
                            <span className="tooltiptext">{formateDate(message?.updated_at)}</span>
                            <p className="p-2 pb-0">{message?.customer_message}</p>
                            <p className="text-[11px] px-2 text-right my-0 pt-1">{msgTime(message?.updated_at)}</p>
                          </div>
                        </div>
                      )}
                      {message?.customer_media_message && (
                        <div
                          className={`message ${message?.customer_media_message ? 'recieved' : 'sended'}`}
                        >
                          <div className="content p-0">
                            <span className="tooltiptext">{formateDate(message?.updated_at)}</span>
                            {/* <div onClick={() => handleDownload(message?.customer_media_message?.media_id)}>
                              
                              <img src={`https://aisalesteams.com/message/media/${message?.customer_media_message?.media_id}`} alt="W3Schools" />
                            </div> */}
                            <a href={`https://aisalesteams.com/message/media/${message?.customer_media_message?.media_id}`} target="_blank" onClick={() => handleDownload(message?.customer_media_message?.media_id)}>
                              <img src={`https://aisalesteams.com/message/media/${message?.customer_media_message?.media_id}`} alt={message?.customer_media_message?.fileName} />
                            </a>


                            <p className="text-[11px] px-2 text-right my-0 pt-1">{msgTime(message?.updated_at)}</p>
                          </div>
                        </div>
                      )}
                      {message?.bot_message && (
                        <div className={`message ${message?.bot_message ? 'sended' : 'recieved'}`}>
                          <div className="content">
                            <span className="tooltiptext">{formateDate(message?.updated_at)}</span>
                            <p className="p-2 pb-0">{message?.bot_message}</p>
                            <p className="text-[11px] px-2 text-right my-0 pt-1">{msgTime(message?.updated_at)}</p>
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
                      {message?.bot_message?.type === 'text' ? (
                        <div className={`message ${message?.sender === 'bot' ? 'sended' : 'recieved'}`}>
                          <div className="content">
                            <span className="tooltiptext">{formateDate(message?.updated_at)}</span>
                            <p>{message?.bot_message?.text}</p>
                            <p className="text-[11px] px-2 text-right my-0 pt-1">{msgTime(message?.updated_at)}</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`message ${message?.sender === 'bot' ? 'sended' : 'recieved'}`}>
                          <div className="content">
                            <span className="tooltiptext">{formateDate(message?.updated_at)}</span>
                            <FileDownload fileName={message?.bot_message?.fileName} />
                            <p className="text-[11px] px-2 text-right my-0 pt-1">{msgTime(message?.updated_at)}</p>
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

      {/* when not selecting the chat id then show this section */}
      {currentChatId === 0 && (
        <>
          <h2 className="text-center text-3xl my-5 font-bold">Select your Chat</h2>

          <div className="overflow-hidden mx-auto" style={{ height: 400, width: 600 }} ref={anime}></div>
        </>
      )}
    </div>
  );
};

export default ChatContainer;
