import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chatinput from './Chatinput';
import { FaUserCircle } from 'react-icons/fa';
import { serverLink, socketLink } from './../../../utilities/links';
import Lottie from 'lottie-web';
import lottieData from './27649-lets-chat.json';
import Loading from '../../Shared/Loading';

const ChatContainer = ({ currentChatId }) => {

  const saveToken = sessionStorage.getItem("accessToken");
  const [messages, setMessages] = useState([]);

  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [msgLoading, setMsgLoading] = useState(true);
  const scrollRef = useRef();

  // connecting to socket
  const socket = new WebSocket(`${socketLink}/${currentChatId}/?token=${saveToken}`);

  socket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    console.log(data.message)
    const sender = data.sender;
  };

  // For lottie animation
  const anime = useRef(null);
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
    // More logic goes here
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: 'smooth' });
  }, [messages]);

  const asyncFetchDailyData = async () => {
    if (currentChatId) {
      setMsgLoading(true);
      await axios.get(`${serverLink}/chat/get/messages/${currentChatId}`, {
        headers: {
          'Authorization': 'Token ' + saveToken,
        }
      }).then(response => {
        // Handle the response data
        setMessages(response?.data?.results);
      })
        .catch(error => {
          // Handle the error
          console.error(error);
        });

      setMsgLoading(false);
    }
  };

  useEffect(() => {
    asyncFetchDailyData();
  }, [currentChatId]);

  // console.log(messages)


  const handleSendMsg = async (msg) => {
    // console.log(msg)

    socket.send(JSON.stringify({
      message: msg,
      sender: 'bot'
    }));


    //   socket.on("msg-transfer", (msg) => {
    //     setArrivalMessage({
    //       fromSelf: true,
    //       message: msg.msg
    //     });
    //   });
    //   return () => {
    //     socket.disconnect();
    //   }
    // }
    // if (socket) {
    //   socket.on("msg-transfer", (msg) => {
    //     setArrivalMessage({
    //       fromSelf: true,
    //       message: msg.msg
    //     });
    //   });
    //   return () => {
    //     socket.disconnect();
    //   }
    // }
    // const msgs = [...messages];
    // msgs.push({ fromSelf: true, message: msg });
    // setMessages(msgs);
  };

  messages?.sort((a, b) => new Date(a?.updated_at) - new Date(b?.updated_at))


  return (
    <div className="w-100">
      {currentChatId !== 0 && (
        <div>
          {/* chat header */}
          <div className="flex bg-sky-500 p-2 px-3 my-border rounded items-center">
            <div className="avatar">
              <div className="w-[50px] rounded-full">
                {<FaUserCircle className="text-4xl mr-2 cursor-pointer" />}
              </div>
            </div>
            <div className="text-white px-2 uppercase">
              <h3 className="lg:text-2xl text-sm">
                Name

              </h3>
            </div>
          </div>
          {msgLoading ? (
            <Loading></Loading>
          )
            :
            (
              <>
                {/* chat body */}
                <div className="message-body overflow-x-hidden  overflow-y-auto h-[calc(100vh-280px)]">

                  {messages?.map((message) => {
                    return (
                      <div>
                        {
                          message?.customer_message && <div
                            className={`message ${message?.customer_message ? 'recieved' : 'sended'
                              }`}
                          >
                            <div className="content ">
                              <p>{message?.customer_message}</p>
                            </div>

                          </div>
                        }
                        {
                          message?.bot_message && <div className={`message ${message?.bot_message ? 'sended' : 'recieved'}`}>
                            <div className="content ">
                              <p>{message?.bot_message}</p>
                            </div>
                          </div>
                        }
                      </div>
                    );
                  })}
                </div>
              </>
            )}

          <Chatinput handleSendMsg={handleSendMsg} />
        </div>
      )}

      {currentChatId === 0 && (
        <>
          <h2 className="text-center text-3xl my-5 font-bold">
            Select your Chat
          </h2>

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
