import Loading from '../../Shared/Loading';
import './SingleChat.css';
const SingleChatModal = ({ chat, chatModalId }) => {
  // console.log(chatModalId.id)
  // if (!chat.id) {
  //   return <Loading></Loading>;
  // }
  return (
    <div className="App">
      <label
        for="my-modal-3"
        className="btn btn-sm btn-circle absolute right-2 top-2"
      >
        ✕
      </label>

      <div className="joinChatContainer">
        <h3>Join A Chat</h3>

        <input
          className="p-2 my-2 border-red-100 border-2 rounded"
          type="text"
          placeholder="Enter your Name"
        />

        {chat?._id !== '' ? (
          <label
            className="btn btn-sm text-white"
            for="my-modal-3"
          >
            Join A Room
          </label>
        ) : (
          <button className="btn my-2 py-2" disabled>
            Join A Room
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleChatModal;
