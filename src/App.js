/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProfileDNA from "./pages/ProfileDNA";
import PersonalDNA from "./pages/PersonalDNA";
import CareerAspirations from "./pages/CareerAspirations";
import Module1_Interest from "./pages/Module1_Interest";
import Module2_Aptitude from "./pages/Module2_Aptitude";
import Module3_Personality from "./pages/Module3_Personality";
import Module4_Values from "./pages/Module4_Values";
import Module5_WorkStyle from "./pages/Module5_WorkStyle";
import Module6_AcademicTrack from "./pages/Module6_AcademicTrack";
import Scoring from "./pages/Scoring";
import CareerMatch from "./pages/CareerMatch";
import StreamRecommendation from "./pages/StreamRecommendation";
import Roadmap from "./pages/Roadmap";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfileDNA />} />
        <Route path="/personal-dna" element={<PersonalDNA />} />
        <Route path="/career-aspirations" element={<CareerAspirations />} />
        <Route path="/module1" element={<Module1_Interest />} />
        <Route path="/module2" element={<Module2_Aptitude />} />
        <Route path="/module3" element={<Module3_Personality />} />
        <Route path="/module4" element={<Module4_Values />} />
        <Route path="/module5" element={<Module5_WorkStyle />} />
        <Route path="/module6" element={<Module6_AcademicTrack />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/career-match" element={<CareerMatch />} />
        <Route path="/stream-recommendation" element={<StreamRecommendation />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;