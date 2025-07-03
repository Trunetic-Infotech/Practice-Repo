import dotenv from "dotenv";
import Groq from "groq-sdk";
dotenv.config();
console.log("first agent");
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function callAgent() {
  const completion = await groq.chat.completions
    .create({
      messages: [{
        role:"assistant"
      },
        {
          role: "user",
          content: "Explain the importance of fast language models",
        },
      ],
      model: "llama-3.3-70b-versatile",
    })
    .then((chatCompletion) => {
      console.log(chatCompletion.choices[0]?.message?.content || "");
    });

    console.log(completion);
    
}

callAgent();