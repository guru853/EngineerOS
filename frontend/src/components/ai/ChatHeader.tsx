import { Bot } from "lucide-react";

function ChatHeader() {
    return (
        <div className="bg-white rounded-xl shadow border p-6 mb-6">
            <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                    <Bot className="text-blue-600" size={28} />
                </div>

                <div>
                    <h1 className="text-2xl font-bold">
                        EngineerOS AI Assistant
                    </h1>

                    <p className="text-gray-500">
                        Your intelligent engineering learning companion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;