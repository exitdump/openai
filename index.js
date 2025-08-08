// index.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function stream() {
  const response = await openai.chat.completions.create({
    model: "gpt-4o", 
    messages: [
      { role: msg.role, content: "Hello, how are you?" }
    ],
  });



  
  console.log(response.choices[0].message.content);
}

stream();
