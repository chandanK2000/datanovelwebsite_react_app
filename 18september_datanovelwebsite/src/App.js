import React from "react";
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/header/Header";
import Home from './pages/home/Home';
import Footer from "./components/footer/Footer";
import ScrollToTopButton from "./pages/scrollTotop/ScrollToTopButton";
import DataQuality from "./pages/solutions/dataquality/DataQuality";
import CaseStudies from "./pages/whoweare/casestudies/CaseStudies";
import AwardsAndEvents from "./pages/whoweare/awardsAndevents/AwardsAndEvents";
import Products from "./pages/products/Products";
import ContactUs from "./pages/contactus/ContactUs";
import ScrollTotopcomponents from "./components/ScrollTotopcomponents";
import ChatBot from "./components/chatbot/ChatBot";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import Faqs from "./components/faqs/Faqs";
import AboutUs from "./pages/whoweare/aboutus/AboutUs";
import Blogs from "./pages/blogs/Blogs";
import DataEngineerings from "./pages/solutions/datamanagement/dataEngineerings/DataEngineerings";
import CaseStudyDetail from "./pages/whoweare/casestudies/CaseStudyDetail";
// import LoginForm from "./components/login/LoginForm";
// import RegisterForm from "./components/registerform/RegisterForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoAnalaytics from "./pages/solutionPage/videoanalaytics/VideoAnalaytics";
// import ProtectedRoute from "./components/ProtectedRoute";
import DigitalTransformationTechniques from "./pages/solutions/enterprises/DigitalTransformation/DigitalTransformationTechniques";
import ApplicationDevelopment from "./pages/solutions/enterprises/applicatinDevelopment/ApplicationDevelopment";
import GenerativeAi from "./pages/solutions/artificialintelligence/generativeai/GenerativeAi";
import Nlp from "./pages/solutions/artificialintelligence/nlp/Nlp";
import ComputerVision from "./pages/solutions/artificialintelligence/computervision/ComputerVision";
import AgenticAi from "./pages/solutions/artificialintelligence/agenticai/AgenticAi";
import PackageImplementation from "./pages/solutions/enterprises/packageImplementatin/PackageImplementation";
import DataArchitecture from "./pages/solutions/datamanagement/dataArchitecture/DataArchitecture";
import DataVisualization from "./pages/solutions/datamanagement/datavisualization/DataVisualization";
import Datagovernance from "./pages/solutions/datamanagement/datagovernance/Datagovernance";
import RiskAndCompliance from "./pages/solutions/cybersecurity/risk&compliance/RiskAndCompliance";
import ApplicationSecurity from "./pages/solutions/cybersecurity/applicationsecurity/ApplicationSecurity";
import DataPrivacyAndSecurity from "./pages/solutions/cybersecurity/dataPrivacy&security/DataPrivacyAndSecurity";
import IdentityandAccess from "./pages/solutions/cybersecurity/identity&access/IdentityandAccess";
import DataMigration from "./pages/solutionPage/datamigration/DataMigration";
import CloudServices from "./pages/solutions/enterprises/cloud/CloudServices";
// import EmailVerifiedSuccess from "./components/EmailVerifiedSuccess";

function App() {

  return (
    <HashRouter>
      <ScrollTotopcomponents />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dataQuality" element={<DataQuality />} />

        <Route exact path="/digital-transformation" element={<DigitalTransformationTechniques />} />
        <Route exact path="/application-development" element={<ApplicationDevelopment />} />
        <Route exact path="/package-implementation" element={<PackageImplementation />} />
        <Route exact path="/cloud" element={<CloudServices />} />

        <Route exact path="/generative-ai" element={<GenerativeAi />} />
        <Route exact path="/agentic-ai" element={<AgenticAi />} />
        <Route exact path="/nlp" element={<Nlp />} />
        <Route exact path="/computer-vision" element={<ComputerVision />} />

        <Route exact path="/data-architecture" element={<DataArchitecture />} />
        <Route exact path="/data-engineering" element={<DataEngineerings />} />
        <Route exact path="/data-visualization" element={<DataVisualization />} />
        <Route exact path="/data-governance" element={<Datagovernance />} />

         <Route exact path="/identity-access-management" element={<IdentityandAccess />} />
        <Route exact path="/data-privacy-security" element={<DataPrivacyAndSecurity />} />
        <Route exact path="/application-security" element={<ApplicationSecurity />} />
        <Route exact path="/risk-compliance" element={<RiskAndCompliance />} />

        <Route exact path="/casestudies" element={<CaseStudies />} />
        <Route exact path="/awardsandevents" element={<AwardsAndEvents />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/casestudy/:id" element={<CaseStudyDetail />} />

        <Route exact path="/data-quality" element={<DataQuality />} />
        <Route exact path="/data-migration" element={<DataMigration />} />
        <Route exact path="/video-analaytics" element={<VideoAnalaytics />} />
        {/* <Route  exact path="/email-verified-success" element={<EmailVerifiedSuccess />} /> */}

        {/* <Route
          exact
          path="/videoAnalaytics"
          element={
            <ProtectedRoute>
              <VideoAnalaytics />
            </ProtectedRoute>
          }
        /> */}



      </Routes>
      <Footer />
      <ScrollToTopButton />
      <ChatBot />
      <ToastContainer position="top-right" autoClose={3000} />

    </HashRouter>
  );
}

export default App;
