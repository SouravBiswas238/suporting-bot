import { useContext, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';

const ThreeDotComponent = (id) => {
  const [showMenu, setShowMenu] = useState(false);
  const { setDeleteID } = useContext(useCompanyStore);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handelDelete = async (singId) => {
    setDeleteID(singId)
  };

  const handelEdit = (singId) => {
    // setShowMenu(!showMenu);
  };


  return (
    <div className='relative'>
      <div onClick={toggleMenu}>
        {
          !showMenu ? <BsThreeDotsVertical /> : <AiOutlineClose />
        }

      </div>

      {showMenu && (
        <div className="absolute right-2 top-6  bg-white border border-gray-200 rounded shadow">
          <button onClick={() => handelEdit(id?.id)} className="mx-2 text-left flex items-center space-x-3"><AiOutlineEdit />   <span className='mx-2'> Edit </span></button>
          <button onClick={() => handelDelete(id?.id)} className="mx-2 text-left flex items-center space-x-3"><RiDeleteBinLine /> <span className='mx-2'> Delete </span></button>
        </div>
      )}
    </div>
  );
};

export default ThreeDotComponent;
