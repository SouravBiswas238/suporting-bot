import { useContext, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';
import { useCompanyStore } from '../../../stateManagement/CompanyStore';

const ThreeDotComponent = ({ id, handleOpenEditModal }) => {

  const [showMenu, setShowMenu] = useState(false);
  const { setDeleteID } = useContext(useCompanyStore);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handelDelete = (singId) => {
    console.log(singId)
    setDeleteID(singId)
  };




  return (
    <div className='relative'>
      <div onClick={toggleMenu}>
        {
          !showMenu ? <BsThreeDotsVertical /> : <AiOutlineClose />
        }

      </div>



      {showMenu && (
        <div className="absolute right-2 top-6  bg-white border border-gray-200 rounded shadow py-2">
          <button
            onClick={() => handleOpenEditModal(id)}
            className="mx-2 text-left flex items-center space-x-3"><AiOutlineEdit />   <span className='mx-2'> Edit </span></button>
          <button onClick={() => handelDelete(id)} className="mx-2 text-left flex items-center space-x-3  z-40 text-red-500"><RiDeleteBinLine /> <span className='mx-2 '> Delete </span></button>
        </div>
      )}
    </div>
  );
};

export default ThreeDotComponent;
