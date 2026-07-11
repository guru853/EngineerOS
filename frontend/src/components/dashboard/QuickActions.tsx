import { BookOpen, Brain, FileText, Calendar } from "lucide-react";

function QuickActions() {
    const actions = [
        { icon: <BookOpen size={22} />, title: "Start Study" },
        { icon: <Brain size={22} />, title: "Ask AI" },
        { icon: <FileText size={22} />, title: "New Note" },
        { icon: <Calendar size={22} />, title: "Planner" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
            {actions.map((action) => (
                <button
                    key={action.title}
                    className="bg-white rounded-xl shadow border p-6 hover:shadow-lg transition"
                >
                    <div className="flex flex-col items-center gap-3">
                        {action.icon}
                        <span className="font-semibold">{action.title}</span>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default QuickActions;