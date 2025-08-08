// index.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: 'YOUR_API_KEY', // 🔐 Replace with your actual key
});

async function chat() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o", 
    messages: [
      { role: "user", content: "Hello, how are you?" }
    ],
  });

  console.log(response.choices[0].message.content);
}

chat();
