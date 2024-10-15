import React from 'react';

const TopNav = ({ onDeploy, onRun }) => {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-semibold">OpenAGI</div>
            <div className="space-x-2">
                <button
                    onClick={onDeploy}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Deploy
                </button>
                <button
                    onClick={onRun}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                    Run
                </button>
            </div>
        </nav>
    );
};

export default TopNav;