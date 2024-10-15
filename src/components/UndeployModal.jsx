import React from 'react';

const UndeployModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Are you sure you want to undeploy?
                </h2>
                <p className="mb-4">
                    Undeploying will stop the app and make it unavailable to users
                </p>
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            // TODO: Implement undeploy logic
                            onClose();
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Undeploy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UndeployModal;