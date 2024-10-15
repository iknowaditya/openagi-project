import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import TopNav from './components/TopNav';
import ChatInterface from './components/ChatInterface';
import UndeployModal from './components/UndeployModal';

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
      <TopNav onUndeploy={handleUndeploy} onRun={handleRun} />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
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