import { useState } from "react";

import ChatHeader from "../components/ai/ChatHeader";
import ChatMessages from "../components/ai/ChatMessages";
import ChatInput from "../components/ai/ChatInput";
import SuggestedPrompts from "../components/ai/SuggestedPrompts";

import type { ChatMessage } from "../types/chat";

function AIAssistant() {

    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: 1,
            sender: "ai",
            message: "👋 Hello Guru! I'm EngineerOS AI. Ask me anything."
        }
    ]);

    function sendMessage(text: string) {

        const userMessage: ChatMessage = {
            id: Date.now(),
            sender: "user",
            message: text
        };

        const aiReply: ChatMessage = {
            id: Date.now() + 1,
            sender: "ai",
            message: "This is a demo AI response. Soon I'll be connected to a real AI model."
        };

        setMessages((prev) => [...prev, userMessage, aiReply]);

    }

    return (
        <div className="p-8">

            <ChatHeader />

            <ChatMessages messages={messages} />

            <SuggestedPrompts />

            <ChatInput onSend={sendMessage} />

        </div>
    );

}

export default AIAssistant;