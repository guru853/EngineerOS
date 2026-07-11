import { Bot, User } from "lucide-react";
import type { ChatMessage } from "../../types/chat";

type Props = {
    messages: ChatMessage[];
};

function ChatMessages({ messages }: Props) {
    return (
        <div className="bg-white rounded-xl shadow border p-6 h-[420px] overflow-y-auto space-y-6">

            {messages.map((msg) =>

                msg.sender === "ai" ? (

                    <div key={msg.id} className="flex gap-3">

                        <div className="bg-blue-100 p-2 rounded-full">
                            <Bot size={20} className="text-blue-600" />
                        </div>

                        <div className="bg-gray-100 rounded-xl p-4 max-w-xl">
                            {msg.message}
                        </div>

                    </div>

                ) : (

                    <div key={msg.id} className="flex justify-end gap-3">

                        <div className="bg-blue-600 text-white rounded-xl p-4 max-w-md">
                            {msg.message}
                        </div>

                        <div className="bg-blue-100 p-2 rounded-full">
                            <User size={20} className="text-blue-700" />
                        </div>

                    </div>

                )

            )}

        </div>
    );
}

export default ChatMessages;