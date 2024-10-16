import React, { useEffect, useState } from 'react';
import output from "../../assets/output.svg";
import Dots from "../../assets/indicator.svg";
import { Handle, Position } from 'react-flow-renderer';

const OutputNode = ({ id, data }) => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        if (data.connections) {
            setIsConnected(Object.values(data.connections).includes(id));
        }
    }, [data.connections, id]);

    const dotColor = isConnected ? 'green' : 'gray';
    return (
        <div className="w-[325px] h-[288px] bg-white rounded-xl shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center">
                    <img src={output} alt="input icon" className="w-6 h-6 mr-3" />
                    <h3 className="font-semibold">OUTPUT</h3>
                </div>
                <img src={Dots} alt="dots icon" className="w-3 h-3" />
            </div>

            <div className="bg-blue-50 p-2 text-start">
                <span className="w-full text-sm ml-2">Lorem ipsum sic dolar amet</span>
            </div>

            <div className="p-4">
                <label className="block text-sm text-start mb-2">Output Response</label>
                <input
                    className="w-full h-10 p-2 border border-gray-300 rounded"
                    placeholder="Typing Something..."
                />
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
                className="!bg-teal-500"
                style={{ top: '40%', height: 10, width: 10, transform: 'translateY(-50%)' }}
            />
        </div>
    );
};

export default OutputNode;