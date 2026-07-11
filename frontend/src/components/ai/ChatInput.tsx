import { useState } from "react";
import { Send } from "lucide-react";

type Props = {
    onSend: (message: string) => void;
};

function ChatInput({ onSend }: Props) {

    const [text, setText] = useState("");

    function handleSend() {

        if (!text.trim()) return;

        onSend(text);

        setText("");

    }

    return (

        <div className="bg-white rounded-xl shadow border p-4 mt-6">

            <div className="flex gap-3">

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    type="text"
                    placeholder="Ask EngineerOS AI..."
                    className="flex-1 border rounded-lg px-4 py-3 outline-none"
                />

                <button
                    onClick={handleSend}
                    className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
                >
                    <Send />
                </button>

            </div>

        </div>

    );

}

export default ChatInput;