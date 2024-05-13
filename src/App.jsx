import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import SignUp from "./assets/pages/SignUp";
import PALS from "./assets/pages/PALS";
import ACLS from "./assets/pages/ACLS";
import CPRTraining from "./assets/pages/CPRTraining";
import NotFound from "./assets/pages/NotFound";
import SignIn from "./assets/pages/SignIn";
import AdminDashboard from "./assets/pages/AdminDashboard";
import AdminProfile from "./assets/pages/AdminProfile";
import UserProfile from "./assets/pages/UserProfile";
import CreateClass from "./assets/pages/CreateClass";
import ViewClass from "./assets/pages/ViewClass";
import CourseBooking from "./assets/pages/CourseBooking";
import Test from "./assets/pages/Test";
import MyClasses from "./assets/pages/MyClasses";
import AdminLogin from "./assets/pages/AdminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pals" element={<PALS />} />
        <Route path="/acls" element={<ACLS />} />
        <Route path="/cpr-training" element={<CPRTraining />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/user/profile" element={<UserProfile />} />
        <Route path="/admin/classes/create" element={<CreateClass />} />
        <Route path="/admin/classes/:id" element={<ViewClass />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/courses/:id/book" element={<CourseBooking />} />
        <Route path="my-classes" element={<MyClasses />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
