import React from 'react';
import runIcon from "../assets/Run.svg"
import logo from "../assets/Logo.svg"

const TopNav = ({ onDeploy, onRun }) => {
    return (
        <nav className="bg-white shadow-md p-4 px-10 flex justify-between items-center">
            <div className="text-xl font-semibold flex items-center">
                <img
                    src={logo}
                    alt="run icon"
                    className="w-8 h-8 inline-block text-center mr-1"
                />
                OpenAGI</div>
            <div className="space-x-2">
                <button
                    onClick={onDeploy}
                    className="bg-[#0000004D] text-white px-4 py-1 rounded-xl hover:bg-[#00000033] transition-transform duration-500 ease-in-out"
                >
                    Deploy
                </button>
                <button
                    onClick={onRun}
                    className="bg-[#44924C] text-white px-4 py-1 font-normal rounded-xl hover:bg-[#5fb868] transition-transform duration-500 ease-in-out"
                >
                    <img
                        src={runIcon}
                        alt="run icon"
                        className="w-4 h-4 inline-block text-center mr-1"
                    />
                    Run
                </button>
            </div>
        </nav>
    );
};

export default TopNav;