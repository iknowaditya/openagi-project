import axios from 'axios';

const BASE_URL = 'https://api.openai.com/v1';

export const runLLMWorkflow = async (input, config) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat/completions`,
            {
                model: config.model,
                messages: [{ role: 'user', content: input }],
                max_tokens: config.maxTokens,
                temperature: config.temperature,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.apiKey}`,
                },
            }
        );

        return response.data.choices[0].message.content;
    } catch (error) {
        throw new Error(`LLM API Error: ${error.response?.data?.error?.message || error.message}`);
    }
};