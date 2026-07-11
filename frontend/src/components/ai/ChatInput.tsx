import { Send, Paperclip, Mic } from "lucide-react";

function ChatInput() {
    return (
        <div className="bg-white rounded-xl shadow border p-4 mt-6">

            <div className="flex gap-3">

                <input
                    type="text"
                    placeholder="Ask EngineerOS AI..."
                    className="flex-1 border rounded-lg px-4 py-3 outline-none"
                />

                <button className="border rounded-lg px-4 hover:bg-gray-100">
                    <Paperclip />
                </button>

                <button className="border rounded-lg px-4 hover:bg-gray-100">
                    <Mic />
                </button>

                <button className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700">
                    <Send />
                </button>

            </div>

        </div>
    );
}

export default ChatInput;