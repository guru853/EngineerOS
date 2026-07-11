import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import AIAssistant from "../pages/AIAssistant";
import StudyHub from "../pages/StudyHub";
import Notes from "../pages/Notes";
import Planner from "../pages/Planner";
import Resume from "../pages/Resume";
import Placement from "../pages/Placement";
import CodingLab from "../pages/CodingLab";
import Settings from "../pages/Settings";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="ai" element={<AIAssistant />} />
                    <Route path="study" element={<StudyHub />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="planner" element={<Planner />} />
                    <Route path="resume" element={<Resume />} />
                    <Route path="placement" element={<Placement />} />
                    <Route path="coding" element={<CodingLab />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;