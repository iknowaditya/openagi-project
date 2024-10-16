import React, { useState } from 'react';
import Canvas from './components/Canvas';
import TopNav from './components/TopNav';
import ChatInterface from './components/ChatInterface';
import UndeployModal from './components/UndeployModal';
import Sidebar from './components/Sidebar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showUndeployModal, setShowUndeployModal] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleUndeploy = () => {
    setShowUndeployModal(true);
  };

  const handleRun = () => {
    setShowChat(true);
  };

  return (
    <div className="flex flex-col h-screen">
      <ToastContainer />
      <TopNav onUndeploy={handleUndeploy} onRun={handleRun} />
      <div className="flex flex-grow overflow-hidden">
        <div className="absolute bottom-0 left-0 z-10 ">
          <Sidebar />
        </div>
        <div className="flex-grow box-shadow">
          {showChat ? <ChatInterface /> : <Canvas />}
        </div>
      </div>
      {showUndeployModal && (
        <UndeployModal onClose={() => setShowUndeployModal(false)} />
      )}
    </div>
  );
}

export default App;