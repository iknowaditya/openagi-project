import React from 'react';

const OutputNode = () => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">OUTPUT</h3>
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Output Response"
                rows="4"
                readOnly
            ></textarea>
        </div>
    );
};

export default OutputNode;