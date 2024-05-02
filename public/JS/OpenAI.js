import OpenAI from "openai";

const openai = new OpenAI();

let topic;

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: "You are a helpful assistant designed to output JSON.",
            },
            { role: "user", content: `These are the facts I have about ${topic}: ${facts}. Tell me more facts about ${topic} that I don't have` },
        ],
        model: "gpt-3.5-turbo-0125",
        response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
}

main();