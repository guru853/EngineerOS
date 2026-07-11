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
    return (
        <div className="w-64 bg-slate-800 text-white min-h-screen p-5">
            <h2 className="text-xl font-bold mb-8">MENU</h2>

            <div className="space-y-5">

                <div className="flex items-center gap-3">
                    <LayoutDashboard size={20} />
                    Dashboard
                </div>

                <div className="flex items-center gap-3">
                    <Brain size={20} />
                    AI Assistant
                </div>

                <div className="flex items-center gap-3">
                    <BookOpen size={20} />
                    Study Hub
                </div>

                <div className="flex items-center gap-3">
                    <NotebookPen size={20} />
                    Notes
                </div>

                <div className="flex items-center gap-3">
                    <CalendarDays size={20} />
                    Planner
                </div>

                <div className="flex items-center gap-3">
                    <FileText size={20} />
                    Resume
                </div>

                <div className="flex items-center gap-3">
                    <Briefcase size={20} />
                    Placement
                </div>

                <div className="flex items-center gap-3">
                    <Code size={20} />
                    Coding
                </div>

            </div>
        </div>
    );
}

export default Sidebar;