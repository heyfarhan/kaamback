import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Lazy loading pages
const SignupPage = lazy(() => import("./pages/SignupPage"));
const ForgotPasswordPage = lazy(() => import("./pages/ForgotPasswordPage"));
const OTPVerificationPage = lazy(() => import("./pages/OTPVerificationPage"));
const SetPasswordPage = lazy(() => import("./pages/SetPasswordPage"));
const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const Career = lazy(() => import("./pages/Career"));
const Hire = lazy(() => import("./pages/Hire"));
const YourHires = lazy(() => import("./components/YourHires"));
const CompanyDashboard = lazy(() => import("./pages/CompanyDashboard"));
// const Profile = lazy(() => import("./pages/Profile"));
const YourProjects = lazy(() => import("./components/YourProjects"));
const ForgotVerifyOtpPage = lazy(() => import("./pages/ForgotVerifyOtp"));
const HiringProcessFreelancer = lazy(
  () => import("./pages/HiringFreelancer/HiringProcess")
);
const HiringProcessCompany = lazy(
  () => import("./pages/HiringCompany/HiringProcess")
);
const GettingStarted = lazy(
  () => import("./pages/HiringFreelancer/GettingStarted")
);
const ProfessionalExperience = lazy(
  () => import("./pages/HiringFreelancer/ProfessionalExperience")
);
const ProfileSetup = lazy(
  () => import("./pages/HiringFreelancer/ProfileSetup")
);
const ApplicationReview = lazy(
  () => import("./pages/HiringFreelancer/ApplicationReview")
);
const GettingStartedCompany = lazy(
  () => import("./pages/HiringCompany/GettingStarted")
);
const ProfessionalExperienceCompany = lazy(
  () => import("./pages/HiringCompany/ProfessionalExperience")
);
const ProfileSetupCompany = lazy(
  () => import("./pages/HiringCompany/ProfileSetup")
);
const ApplicationReviewCompany = lazy(
  () => import("./pages/HiringCompany/ApplicationReview")
);
const JobPage = lazy(() => import("./pages/LookJobs"));
const ApplicationForm = lazy(() => import("./pages/OpeningApplication"));
const ApplicationSubmission = lazy(
  () => import("./pages/ApplicationSubmitted")
);
const JobSeekerPage = lazy(() => import("./pages/JobSeeker/JobSeekerPage"));
const JobSeekerDashboard = lazy(
  () => import("./pages/JobSeeker/JobSeekerDashboard")
);
const JobSeekerProfile = lazy(
  () => import("./pages/JobSeeker/JobSeekerProfile")
);
const JobSeekerMessages = lazy(
  () => import("./pages/JobSeeker/JobSeekerMessages")
);
const JobSeekerSetting = lazy(
  () => import("./pages/JobSeeker/JobSeekerSetting")
);
const JobSeekerLogout = lazy(() => import("./pages/JobSeeker/JobSeekerLogout"));

const CompanySearch = lazy(() => import("./pages/CompanySearch"));
const CompanySettings = lazy(() => import("./pages/CompanySetting"));
const Logout = lazy(() => import("./pages/Logout"));
const Messages = lazy(() => import("./pages/Messages"));
const Openings = lazy(() => import("./pages/Openings"));
const CreateJob = lazy(() => import("./pages/CreateJob"));
const JobDetails = lazy(() => import("./pages/JobDetails"));
const EditProfile = lazy(() => import("./pages/CompanyProfile"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/otp-verification"
              element={<PrivateRoute element={OTPVerificationPage} />}
            />
            <Route
              path="/forgot-verify-otp"
              element={<PrivateRoute element={ForgotVerifyOtpPage} />}
            />
            <Route path="/set-password" element={<SetPasswordPage />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/career" element={<Career />} />

            {/* Hiring route */}
            <Route
              path="/hiring/set-freelancer"
              element={<HiringProcessFreelancer />}
            >
              <Route path="gettingStarted" element={<GettingStarted />} />
              <Route
                path="professionalExperience"
                element={<ProfessionalExperience />}
              />
              <Route path="profileSetup" element={<ProfileSetup />} />
            </Route>
            <Route
              path="/hiring/set-freelancer/applicationSubmitted"
              element={<ApplicationReview />}
            />

            {/* Hiring company route */}
            <Route
              path="/hiring/set-company"
              element={<HiringProcessCompany />}
            >
              <Route
                path="gettingStarted"
                element={<GettingStartedCompany />}
              />
              <Route
                path="professionalExperience"
                element={<ProfessionalExperienceCompany />}
              />
              <Route path="profileSetup" element={<ProfileSetupCompany />} />
            </Route>
            <Route
              path="/hiring/set-company/applicationSubmitted"
              element={<ApplicationReviewCompany />}
            />

            {/* Company Routes */}
            <Route path="/company-dashboard" element={<CompanyDashboard />} />
            <Route
              path="/company-dashboard/your-hires"
              element={<YourHires />}
            />
            <Route
              path="/company-dashboard/your-projects"
              element={<YourProjects />}
            />
            {/* <Route path="/company-dashboard/profile" element={<Profile />} /> */}
            <Route path="/openings" element={<Openings />} />
            <Route path="/application/:jobId" element={<ApplicationForm />} />
            <Route path="/submitted" element={<ApplicationSubmission />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/lookjobs" element={<JobPage />} />
            <Route
              path="/company-dashboard/create-job"
              element={<CreateJob />}
            />
            <Route path="/company-profile" element={<EditProfile />} />
            <Route path="/search" element={<CompanySearch />} />
            <Route path="/settings" element={<CompanySettings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/messages" element={<Messages />} />

            {/* Job Seeker Routes */}
            <Route path="/job/details/:jobId" element={<JobDetails />} />
            <Route path="/jobseeker" element={<JobSeekerPage />}>
              <Route path="dashboard" element={<JobSeekerDashboard />} />
              <Route path="profile" element={<JobSeekerProfile />} />
              <Route path="messages" element={<JobSeekerMessages />} />
              <Route path="setting" element={<JobSeekerSetting />} />
              <Route path="logout" element={<JobSeekerLogout />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
