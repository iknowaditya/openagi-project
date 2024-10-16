import React from 'react';
import inputIcon from '../assets/input.svg';
import llmIcon from '../assets/LLMIcon.svg';
import outputIcon from '../assets/output.svg';
import Dots from '../assets/threeDot.svg';
import { useDnD } from '../context/DnDContext';

const Sidebar = () => {
    const [, setType] = useDnD(); // Use correct destructuring, removed unused variable

    const onDragStart = (event, nodeType) => {
        setType(nodeType);
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-[251px] h-[85vh] 2xl:h-[792px] bg-white shadow-xl p-4 overflow-y-auto ml-6 my-4 rounded-xl">
            <h2 className="text-lg font-medium mb-2">Components</h2>
            <hr className="mb-4 h-px bg-gray-200 text-gray-500" />
            <div className="space-y-2">
                <div className="mb-6">
                    <h1 className="text-[#44444480] text-base">Drag and Drop</h1>
                </div>
                <div
                    className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-lg cursor-move"
                    onDragStart={(event) => onDragStart(event, 'input')}
                    draggable
                >
                    <div className="flex items-center gap-2 text-sm">
                        <img
                            src={inputIcon}
                            alt="input icon"
                            className="w-4 h-4"
                        />
                        Input
                    </div>
                    <img
                        src={Dots}
                        alt="dots icon"
                        className="w-4 h-4"
                    />
                </div>
                <div
                    className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-lg cursor-move"
                    onDragStart={(event) => onDragStart(event, 'llmEngine')}
                    draggable
                >
                    <div className="flex items-center gap-2 text-sm">
                        <img
                            src={llmIcon}
                            alt="LLM icon"
                            className="w-4 h-4"
                        />
                        LLM Engine
                    </div>
                    <img
                        src={Dots}
                        alt="dots icon"
                        className="w-4 h-4"
                    />
                </div>
                <div
                    className="flex items-center justify-between gap-2 border border-gray-300 p-2 rounded-lg cursor-move"
                    onDragStart={(event) => onDragStart(event, 'output')}
                    draggable
                >
                    <div className="flex items-center gap-2 text-sm">
                        <img
                            src={outputIcon}
                            alt="output icon"
                            className="w-4 h-4"
                        />
                        Output
                    </div>
                    <img
                        src={Dots}
                        alt="dots icon"
                        className="w-4 h-4"
                    />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
