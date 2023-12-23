const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to start the interview
app.post('/start-interview', async (req, res) => {
  try {
    // Assuming the user sends the interview audio as base64 encoded string
    const audioData = req.body.audioData;

    // Call the OpenAI API to get response
    const openaiResponse = await getOpenAIResponse(audioData);

    // Send the OpenAI response back to the client
    res.json({ success: true, response: openaiResponse });
  } catch (error) {
    console.error('Error during interview:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Function to call OpenAI API
async function getOpenAIResponse(audioData) {
  const openaiApiKey = process.env.OpenAIKey;
  const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${openaiApiKey}`
  };

  const data = {
    prompt: 'Interviewer: "Ask a question or start the conversation."\nUser:',
    max_tokens: 150,
    stop: '\n',
    temperature: 0.7,
    audio_input: `data:audio/wav;base64,${audioData}`
  };

  const response = await axios.post(openaiEndpoint, data, { headers });
  return response.data.choices[0].text.trim();
}

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
