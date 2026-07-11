import { BookOpen, Brain, FileText, Calendar } from "lucide-react";

function QuickActions() {
    const actions = [
        { icon: <BookOpen size={22} />, title: "Start Study" },
        { icon: <Brain size={22} />, title: "Ask AI" },
        { icon: <FileText size={22} />, title: "New Note" },
        { icon: <Calendar size={22} />, title: "Planner" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {actions.map((action) => (
                <button
                    key={action.title}
                    className="
            bg-white
            dark:bg-slate-800
            border
            border-gray-200
            dark:border-slate-700
            rounded-xl
            p-6
            transition-all
            duration-300
            hover:border-blue-500
            hover:-translate-y-1
            hover:shadow-xl
          "
                >
                    <div className="flex flex-col items-center gap-3 text-slate-900 dark:text-white">
                        <div className="text-blue-500">
                            {action.icon}
                        </div>

                        <span className="font-semibold">
                            {action.title}
                        </span>
                    </div>
                </button>
            ))}
        </div>
    );
}

export default QuickActions;