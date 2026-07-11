import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Content from "../components/layout/Content";

function MainLayout() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex" }}>
                <Sidebar />
                <Content />
            </div>
        </>
    );
}

export default MainLayout;