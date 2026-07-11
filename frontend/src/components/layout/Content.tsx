import Dashboard from "../../pages/Dashboard";

function Content() {
    return (
        <main
            className="
        flex-1
        min-h-screen
        bg-gray-100
        dark:bg-slate-900
        text-slate-900
        dark:text-white
        p-8
        overflow-y-auto
        transition-colors
        duration-300
      "
        >
            <Dashboard />
        </main>
    );
}

export default Content;