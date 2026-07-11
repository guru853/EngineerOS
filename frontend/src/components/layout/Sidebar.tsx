import {
    LayoutDashboard,
    Brain,
    BookOpen,
    NotebookPen,
    CalendarDays,
    FileText,
    Briefcase,
    Code,
} from "lucide-react";

function Sidebar() {
    const menuItems = [
        { icon: <LayoutDashboard size={20} />, name: "Dashboard" },
        { icon: <Brain size={20} />, name: "AI Assistant" },
        { icon: <BookOpen size={20} />, name: "Study Hub" },
        { icon: <NotebookPen size={20} />, name: "Notes" },
        { icon: <CalendarDays size={20} />, name: "Planner" },
        { icon: <FileText size={20} />, name: "Resume" },
        { icon: <Briefcase size={20} />, name: "Placement" },
        { icon: <Code size={20} />, name: "Coding" },
    ];

    return (
        <aside className="w-64 min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-r border-gray-200 dark:border-slate-800 transition-colors duration-300">

            <div className="p-6">

                <h2 className="text-xl font-bold mb-8">
                    MENU
                </h2>

                <div className="space-y-2">

                    {menuItems.map((item) => (
                        <button
                            key={item.name}
                            className="
                w-full
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                transition
                hover:bg-blue-100
                dark:hover:bg-slate-800
                hover:text-blue-600
              "
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    ))}

                </div>

            </div>

        </aside>
    );
}

export default Sidebar;