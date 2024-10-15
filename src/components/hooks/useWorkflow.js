import { useState, useCallback } from 'react';
import { runLLMWorkflow } from '../services/llmService';

const useWorkflow = () => {
    const [workflowState, setWorkflowState] = useState({
        input: '',
        llmConfig: {
            apiKey: '',
            model: 'gpt-3.5-turbo',
            maxTokens: 100,
            temperature: 0.5,
        },
        output: '',
        isRunning: false,
        error: null,
    });

    const updateInput = useCallback((input) => {
        setWorkflowState((prev) => ({ ...prev, input }));
    }, []);

    const updateLLMConfig = useCallback((config) => {
        setWorkflowState((prev) => ({
            ...prev,
            llmConfig: { ...prev.llmConfig, ...config },
        }));
    }, []);

    const runWorkflow = useCallback(async () => {
        setWorkflowState((prev) => ({ ...prev, isRunning: true, error: null }));
        try {
            const output = await runLLMWorkflow(
                workflowState.input,
                workflowState.llmConfig
            );
            setWorkflowState((prev) => ({ ...prev, output, isRunning: false }));
        } catch (error) {
            setWorkflowState((prev) => ({
                ...prev,
                error: error.message,
                isRunning: false,
            }));
        }
    }, [workflowState.input, workflowState.llmConfig]);

    return {
        workflowState,
        updateInput,
        updateLLMConfig,
        runWorkflow,
    };
};

export default useWorkflow;