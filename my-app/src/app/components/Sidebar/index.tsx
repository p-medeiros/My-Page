import { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiMenu } from 'react-icons/fi';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`flex ${isOpen ? 'w-64' : 'w-20'} h-screen bg-gray-800 text-white transition-width duration-300`}>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h1 className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'}`}>MyApp</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FiMenu size={24} />
          </button>
        </div>
        <div className="flex-grow p-4">
          <nav className="space-y-4">
            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
              <FiHome size={24} />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Home</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
              <FiUser size={24} />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Profile</span>
            </a>
            <a href="#" className="flex items-center p-2 rounded hover:bg-gray-700">
              <FiSettings size={24} />
              <span className={`ml-4 ${isOpen ? 'block' : 'hidden'}`}>Settings</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
