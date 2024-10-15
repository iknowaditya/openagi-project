import React from 'react';

const Sidebar = () => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="w-64 bg-white shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Components</h2>
            <div className="space-y-2">
                <div
                    className="bg-blue-100 p-2 rounded cursor-move"
                    onDragStart={(event) => onDragStart(event, 'input')}
                    draggable
                >
                    Input
                </div>
                <div
                    className="bg-green-100 p-2 rounded cursor-move"
                    onDragStart={(event) => onDragStart(event, 'llmEngine')}
                    draggable
                >
                    LLM Engine
                </div>
                <div
                    className="bg-yellow-100 p-2 rounded cursor-move"
                    onDragStart={(event) => onDragStart(event, 'output')}
                    draggable
                >
                    Output
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;