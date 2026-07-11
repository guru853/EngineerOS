import { Bot, User } from "lucide-react";

function ChatMessages() {
    return (
        <div className="bg-white rounded-xl shadow border p-6 h-[420px] overflow-y-auto space-y-6">

            {/* AI Message */}
            <div className="flex gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                    <Bot size={20} className="text-blue-600" />
                </div>

                <div className="bg-gray-100 rounded-xl p-4 max-w-xl">
                    👋 Hello Guru!

                    <br /><br />

                    I'm EngineerOS AI.

                    Ask me anything about:

                    <ul className="list-disc ml-5 mt-2">
                        <li>Programming</li>
                        <li>AI & ML</li>
                        <li>DBMS</li>
                        <li>Operating System</li>
                        <li>Resume</li>
                        <li>Placements</li>
                    </ul>
                </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end gap-3">

                <div className="bg-blue-600 text-white rounded-xl p-4 max-w-md">
                    Explain Binary Search.
                </div>

                <div className="bg-blue-100 p-2 rounded-full">
                    <User size={20} className="text-blue-700" />
                </div>

            </div>

        </div>
    );
}

export default ChatMessages;