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

import { NavLink } from "react-router-dom";

function Sidebar() {
    const menus = [
        { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
        { name: "AI Assistant", icon: <Brain size={20} />, path: "/ai" },
        { name: "Study Hub", icon: <BookOpen size={20} />, path: "/study" },
        { name: "Notes", icon: <NotebookPen size={20} />, path: "/notes" },
        { name: "Planner", icon: <CalendarDays size={20} />, path: "/planner" },
        { name: "Resume", icon: <FileText size={20} />, path: "/resume" },
        { name: "Placement", icon: <Briefcase size={20} />, path: "/placement" },
        { name: "Coding", icon: <Code size={20} />, path: "/coding" },
    ];

    return (
        <aside className="w-64 bg-slate-950 border-r border-slate-800 text-white min-h-screen p-5">

            <h2 className="text-2xl font-bold mb-8">
                MENU
            </h2>

            <div className="space-y-2">

                {menus.map((menu) => (

                    <NavLink
                        key={menu.name}
                        to={menu.path}
                        className={({ isActive }) =>
                            `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                                ? "bg-blue-600 text-white"
                                : "hover:bg-slate-800 text-slate-300"
                            }`
                        }
                    >
                        {menu.icon}
                        {menu.name}
                    </NavLink>

                ))}

            </div>

        </aside>
    );
}

export default Sidebar;