# Build a Drag-and-Drop Workflow UI for LLM Applications

This project is designed to provide a visual drag-and-drop interface for creating workflows that interact with large language models (LLMs). The interface allows users to configure inputs, LLM engines, and outputs through nodes that can be connected dynamically in a graphical interface. The user-friendly interface was built using React and React Flow, with custom nodes and connectors that manage data flows between the nodes.


## Tech Stack

- React: The UI is built using React for component-based architecture and efficient rendering.
- React Flow: React Flow is used to implement the drag-and-drop functionality and node-based workflow creation.
- Tailwind CSS: For styling, ensuring a clean and responsive UI.
- Zustand: State management for React Flow and managing node/edge data.
- JavaScript: For custom logic handling node interaction and connection.


## Features

 
- Drag-and-Drop Interface: Allows users to drag components (input nodes, LLM engines, and output nodes) into the canvas and connect them to define a workflow.

- Custom Node Components: Developed custom React components for Input, LLM Engine, and Output nodes, each styled using Tailwind CSS and supporting adjustable parameters.

- Dynamic Connections: The nodes can be connected dynamically, with custom positioning of connection handles.

- Visual Feedback: Input validation with color-coded indicators (red, normal, green) based on whether an input is empty, valid, or connected to another node.

- Responsive Design: The application is fully responsive and maintains functionality across different screen sizes.

- Integration with React Flow: Leveraged React Flow for node-based workflow generation, including adding edges, managing node positions, and controlling node connections.

- Custom Node Interaction: Developed a system where the input dot color changes based on different conditions (e.g., red when empty, green when connected).


## Node Types

1. **Input Node**:
   - Contains a label for user input.
   - Displays an interactive input box for users to type a question or message.
   - Connects to the LLM Engine or Output node through a source handle.
   - Dot color changes:
        - Red: When the input is empty.
        - Normal: When there's text input but no connection.
        - Green: When connected to another node.

2. **LLM Engine Node**
    - Allows selection of an LLM model (e.g., GPT-3.5) and input for API keys.
    - Input fields for configuration settings like max tokens and temperature.
    - Connects to Input and Output nodes.

3. **Output Node**
    - Receives the processed output from the LLM Engine.
    - Displays the result of the LLM processing.


## Demo

    ![alt text](<Screenshot 2024-10-16 054821.png>)

## File Structure

    src/
│
├── assets/                     # Contains icons and images used in nodes
├── components/
│   ├── Canvas.jsx              # Main canvas component for React Flow rendering
│   ├── nodes/
│   │   ├── InputNode.jsx       # Custom Input Node component
│   │   ├── LLMEngineNode.jsx   # Custom LLM Engine Node component
│   │   └── OutputNode.jsx      # Custom Output Node component
│   └── Sidebar.jsx             # Sidebar (if needed for future development)
├── App.js                      # Entry point for the app
└── index.js                    # App entry point

