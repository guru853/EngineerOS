import { useEffect, useState } from "react";
import {
    Bell,
    Moon,
    Search,
    Sun,
    UserCircle,
} from "lucide-react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    function toggleDarkMode() {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }

        setDarkMode(!darkMode);
    }

    return (
        <nav className="h-16 bg-white dark:bg-slate-950 text-slate-900 dark:text-white flex items-center justify-between px-6 shadow-md border-b border-gray-200 dark:border-slate-800">

            {/* Logo */}
            <div className="text-xl font-bold">
                Engineer
                <span className="text-blue-500">OS</span>
            </div>

            {/* Search */}
            <div className="flex-1 flex justify-center px-10">
                <div className="relative w-full max-w-lg">

                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="
              w-full
              rounded-lg
              bg-gray-100
              dark:bg-slate-800
              text-slate-900
              dark:text-white
              placeholder:text-gray-500
              dark:placeholder:text-gray-400
              py-2
              pl-10
              pr-4
              outline-none
              border
              border-gray-300
              dark:border-slate-700
              focus:ring-2
              focus:ring-blue-500
            "
                    />

                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                <button
                    onClick={toggleDarkMode}
                    className="hover:text-blue-500 transition"
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button className="relative hover:text-blue-500 transition">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">

                    <UserCircle size={28} />

                    <div className="hidden md:block">
                        <p className="text-sm font-semibold">
                            Guru
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            AI & DS
                        </p>
                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;