import React, { useEffect, useState } from 'react';
import llm from "../../assets/LLMIcon.svg";
import Dots from "../../assets/indicator.svg";
import { Handle, Position } from 'react-flow-renderer';

const LLMEngineNode = ({ id, data }) => {
    const [isInputConnected, setIsInputConnected] = useState(false);
    const [isOutputConnected, setIsOutputConnected] = useState(false);

    useEffect(() => {
        if (data.connections) {
            setIsInputConnected(Object.values(data.connections).includes(id));
            setIsOutputConnected(data.connections[id] !== undefined);
        }
    }, [data.connections, id]);

    const dotColor = isInputConnected && isOutputConnected ? 'green' : 'gray';
    return (
        <div className="bg-white w-[325.28px] h-[530px] p-5 rounded-xl shadow-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <img src={llm} alt="LLM icon" className="w-6 h-6 mr-3" />
                    <h3 className="font-semibold text-lg">LLM ENGINE</h3>
                </div>
                <img src={Dots} alt="dots icon" className="w-3 h-3" />
            </div>

            <div className="bg-blue-50 p-2 mb-4 rounded">
                <span className="w-full text-sm">Lorem ipsum sic dolar amet</span>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Model Name</label>
                    <select className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200">
                        <option>gpt-3.5</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium">OpenAI API Base</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        value="https/openai.base.link"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">OpenAI Key</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        value="************************"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Max Tokens</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        value="2000"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Temperature</label>
                    <input
                        type="number"
                        className="w-full p-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
                        value="0.5"
                        step="0.1"
                        min="0"
                        max="1"
                    />
                </div>
            </div>
            <img
                src={Dots}
                alt="dots icon"
                className="w-3 h-3"
                style={{ filter: `drop-shadow(0px 0px 5px ${dotColor})` }}
            />
            <Handle
                type="target"
                position={Position.Left}
                className="w-16 !bg-teal-500"
                style={{ top: '50%', height: 10, width: 10, transform: 'translateY(-50%)' }}
            />
            <Handle
                type="source"
                position={Position.Right}
                className="w-16 !bg-teal-500"
                style={{ top: '50%', height: 10, width: 10, transform: 'translateY(-50%)' }}
            />
        </div>
    );
};

export default LLMEngineNode;
