import React from 'react';

const InputNode = () => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">INPUT</h3>
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Write the input/ question you want to ask"
                rows="4"
            ></textarea>
        </div>
    );
};

export default InputNode;