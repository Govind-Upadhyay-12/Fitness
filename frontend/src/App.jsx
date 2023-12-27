import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Nav/Navbar";

import { Route, Routes } from "react-router-dom";

import Classes from "./Pages/Classes";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";
import Schedule from "./Pages/Schedule/Schedule";
import Monday from "./Pages/Schedule/Monday";
import Tuesday from "./Pages/Schedule/Tuesday";
import Wednesday from "./Pages/Schedule/Wednesday";
import Thursday from "./Pages/Schedule/Thursday";
import Friday from "./Pages/Schedule/Friday";
import Saturday from "./Pages/Schedule/Saturday";
import Sunday from "./Pages/Schedule/Sunday";
import Gallery from "./Pages/Gallery/Gallery";
import GalleryPage1 from "./Pages/Gallery/GalleryPage1";
import GalleryPage2 from "./Pages/Gallery/GalleryPage2";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import Forgetpassword from "./Pages/Forgetpassword";
import ResetPassword from "./Pages/ResetPassword";
import Weight from "./Pages/Weight";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="SignIn" element={<SignIn />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="forgetpassword" element={<Forgetpassword />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="classes" element={<Classes />} />
          <Route path="pricing" element={<Price />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="weight" element={<Weight />} />

          <Route path="schedule" element={<Schedule />}>
            <Route path="monday" element={<Monday />} />
            <Route path="tuesday" element={<Tuesday />} />
            <Route path="wednesday" element={<Wednesday />} />
            <Route path="thursday" element={<Thursday />} />
            <Route path="friday" element={<Friday />} />
            <Route path="saturday" element={<Saturday />} />
            <Route path="sunday" element={<Sunday />} />
          </Route>
        </Route>

        <Route path="gallery" element={<Gallery />}>
          <Route path="page-1" element={<GalleryPage1 />} />
          <Route path="page-2" element={<GalleryPage2 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
