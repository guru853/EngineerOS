const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const API_URL =
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

export async function sendMessage(prompt: string) {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            }),
        });

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        return (
            data.candidates?.[0]?.content?.parts?.[0]?.text ??
            "No response received."
        );
    } catch (error) {
        console.error(error);
        return "Something went wrong.";
    }
}