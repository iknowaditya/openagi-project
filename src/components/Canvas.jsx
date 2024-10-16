import React, { useCallback, useState } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Background,
    Controls,
    MiniMap,
} from 'react-flow-renderer';
import InputNode from './nodes/InputNode';
import LLMEngineNode from './nodes/LLMEngineNode';
import OutputNode from './nodes/OutputNode';
import { toast } from 'react-toastify';

const nodeTypes = {
    input: InputNode,
    llmEngine: LLMEngineNode,
    output: OutputNode,
};

const Canvas = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [connections, setConnections] = useState({});

    const onConnect = useCallback(
        (params) => {
            if (params.source && params.target) {
                setConnections(prev => ({
                    ...prev,
                    [params.source]: params.target
                }));
                setEdges((eds) => addEdge(params, eds));
            }
        },
        []
    );

    const onNodeDragStop = useCallback((event, node) => {
        // Update node position in the state
        setNodes(nds => nds.map(n => n.id === node.id ? { ...n, position: node.position } : n));
    }, [setNodes]);

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
            const type = event.dataTransfer.getData('application/reactflow');
            const position = { x: event.clientX, y: event.clientY };

            const newNode = {
                id: `${type}-${nodes.length + 1}`,
                type,
                position,
                data: { label: `${type} node`, connections },
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [nodes, connections]
    );

    return (
        <div className="h-full w-full">
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeDragStop={onNodeDragStop}
                onDragOver={onDragOver}
                onDrop={onDrop}
                nodeTypes={nodeTypes}
            >
                <Background />
                <MiniMap />
                <Controls className='z-10 bg-white shadow left-1/4 absolute' />
            </ReactFlow>
        </div>
    );
};

export default Canvas;