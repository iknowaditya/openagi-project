import React from 'react';

const LLMEngineNode = () => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">LLM ENGINE</h3>
            <div className="space-y-2">
                <div>
                    <label className="block text-sm">Model Name</label>
                    <select className="w-full p-2 border rounded">
                        <option>gpt-3.5</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm">OpenAI API Base</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                        value="https/openai.base.link"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm">OpenAI Key</label>
                    <input
                        type="password"
                        className="w-full p-2 border rounded"
                        value="************************"
                        readOnly
                    />
                </div>
                <div>
                    <label className="block text-sm">Max Tokens</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value="2000"
                    />
                </div>
                <div>
                    <label className="block text-sm">Temperature</label>
                    <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value="0.5"
                        step="0.1"
                        min="0"
                        max="1"
                    />
                </div>
            </div>
        </div>
    );
};

export default LLMEngineNode;