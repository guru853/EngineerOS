import ChatHeader from "../components/ai/ChatHeader";
import ChatMessages from "../components/ai/ChatMessages";
import SuggestedPrompts from "../components/ai/SuggestedPrompts";
import ChatInput from "../components/ai/ChatInput";

function AIAssistant() {
    return (
        <div className="p-8">
            <ChatHeader />

            <ChatMessages />

            <SuggestedPrompts />

            <ChatInput />
        </div>
    );
}

export default AIAssistant;