import React, { useState, useEffect } from 'react';
import input from "../../assets/input.svg";
import Dots from "../../assets/indicator.svg";
import { Handle, Position } from 'react-flow-renderer';

const InputNode = ({ id, data, isConnectable }) => {
    const [inputValue, setInputValue] = useState('');
    const [isConnected, setIsConnected] = useState(false);

    // Effect to check if input field is empty and update the dot color
    const dotColor = !inputValue
        ? 'red'   // Red if input is empty
        : isConnected
            ? 'green' // Green if node is connected to another node
            : 'gray'; // Default color

    // Function to handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Function to handle node connection
    const onConnect = (params) => {
        setIsConnected(true); // Update when the node gets connected
    };

    return (
        <div className="w-[325px] h-[288px] bg-white rounded-xl shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={input} alt="input icon" className="w-6 h-6 mr-3" />
                    <h3 className="font-semibold">INPUT</h3>
                </div>
                {/* Change the dot color dynamically */}
                <img
                    src={Dots}
                    alt="dots icon"
                    className="w-3 h-3"
                    style={{ filter: `drop-shadow(0px 0px 5px ${dotColor})` }}
                />
            </div>

            <div className="bg-blue-50 p-2">
                <span className="w-full text-sm">Write the input/ question you want to ask</span>
            </div>

            <div className="p-4">
                <label className="block text-sm text-start mb-2">Input</label>
                <input
                    className="w-full h-10 p-2 border border-gray-300 rounded"
                    placeholder="Typing Something..."
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </div>

            <Handle
                type="source"
                position={Position.Right} // Keep it as right or use 'Position.Left' for left side
                className="!bg-teal-500"
                style={{ top: '40%', height: 10, width: 10, transform: 'translateY(-50%)' }}
                onConnect={onConnect}
                isConnectable={isConnectable}
            />
        </div>
    );
};

export default InputNode;
