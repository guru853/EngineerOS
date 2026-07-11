import {
    Bell,
    Moon,
    Search,
    UserCircle,
} from "lucide-react";

function Navbar() {
    return (
        <nav className="h-16 bg-slate-900 text-white flex items-center justify-between px-6 shadow-md">

            {/* Left */}
            <div className="text-xl font-bold">
                Engineer<span className="text-blue-400">OS</span>
            </div>

            {/* Center */}
            <div className="flex-1 flex justify-center px-10">
                <div className="relative w-full max-w-lg">
                    <Search
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                        type="text"
                        placeholder="Search anything..."
                        className="w-full rounded-lg bg-slate-800 py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-5">

                <button className="hover:text-blue-400 transition">
                    <Moon size={20} />
                </button>

                <button className="hover:text-blue-400 transition relative">
                    <Bell size={20} />

                    <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
                </button>

                <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">

                    <UserCircle size={28} />

                    <div className="hidden md:block">
                        <p className="text-sm font-semibold">
                            Guru
                        </p>

                        <p className="text-xs text-gray-400">
                            AI & DS
                        </p>
                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;