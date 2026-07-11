import { Outlet } from "react-router-dom";

function Content() {
    return (
        <main className="flex-1 min-h-screen bg-slate-900 p-8 overflow-y-auto">
            <Outlet />
        </main>
    );
}

export default Content;