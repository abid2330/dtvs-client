import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layouts
import LoginLayout from '../Layouts/LoginLayout';
import MainLayout from '../Layouts/MainLayout';
import UpdateLayout from '../Layouts/UpdateLayout';
import DashboardLayout from '../Layouts/DashboardLayout';

// Main Pages
import Home from '../Layouts/MainLayout/Pages/Home';
import DegreeValidation from '../Layouts/MainLayout/Pages/DegreeValidation';
import AboutUs from '../Layouts/MainLayout/Pages/AboutUs';
import ContactUs from '../Layouts/MainLayout/Pages/ContactUs';
import NotFound from '../Layouts/MainLayout/Pages/PageNotFound';

//Dashboard Pages
import Dashboard from '../Layouts/DashboardLayout/Pages/Dashboard';
import ManageStudent from '../Layouts/DashboardLayout/Pages/ManageStudent';
import ManageUser from '../Layouts/DashboardLayout/Pages/ManageUser';
import ManageDepartment from '../Layouts/DashboardLayout/Pages/ManageDepartment';
import DegreeApplications from '../Layouts/DashboardLayout/Pages/DegreeApplications';
import ViewContact from '../Layouts/DashboardLayout/Pages/ViewContact';
import ViewFeedback from '../Layouts/DashboardLayout/Pages/ViewFeedback';
import ApplyApplication from '../Layouts/DashboardLayout/Pages/ApplyApplication';
import ViewStatus from '../Layouts/DashboardLayout/Pages/ViewStatus';
import DownloadChalan from '../Layouts/DashboardLayout/Pages/DownloadChalan';
import SendFeedback from '../Layouts/DashboardLayout/Pages/SendFeedback';
import Applications from '../Layouts/DashboardLayout/Pages/Applications';
import PageNotFound from '../Layouts/DashboardLayout/Pages/PageNotFound';

//Login Pages
import Login from '../Layouts/LoginLayout/Pages/Login';
import ForgetPassword from '../Layouts/LoginLayout/Pages/ForgetPassword';
import ChangePassword from '../Layouts/LoginLayout/Pages/ChangePassword';

//Update Pages
import UpdateStudent from '../Layouts/UpdateLayout/Pages/UpdateStudent';
import UpdateUser from '../Layouts/UpdateLayout/Pages/UpdateUser';
import UpdateDepartment from '../Layouts/UpdateLayout/Pages/UpdateDepartment';
import UploadChalan from '../Layouts/UpdateLayout/Pages/UploadChalan';
import UploadPaidChalan from '../Layouts/UpdateLayout/Pages/UploadPaidChalan';
import ShowDocuments from '../Layouts/UpdateLayout/Pages/ShowDocuments';
import ShowPaidChalan from '../Layouts/UpdateLayout/Pages/ShowPaidChalan';
import UpdatePassword from '../Layouts/UpdateLayout/Pages/UpdatePassword';
import UpdateStatus from '../Layouts/UpdateLayout/Pages/UpdateStatus';

//Protected Routes
import { DashboardProtected } from '../Layouts/Reusable Components/Protected';
import { LoginProtected } from '../Layouts/Reusable Components/Protected';

const AppRouter = () => {
  return (
    <>
      {/* Main Routes */}
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='degree-validation' element={<DegreeValidation />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Route>

        {/* Dashboard Routes */}
        <Route element={<DashboardProtected />}>
          <Route path='/app' element={<DashboardLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='manage-student' element={<ManageStudent />} />
            <Route path='manage-user' element={<ManageUser />} />
            <Route path='manage-department' element={<ManageDepartment />} />
            <Route
              path='degree-Applications'
              element={<DegreeApplications />}
            />
            <Route path='view-feedback' element={<ViewFeedback />} />
            <Route path='view-contact' element={<ViewContact />} />
            <Route path='apply-application' element={<ApplyApplication />} />
            <Route path='view-status' element={<ViewStatus />} />
            <Route path='download-chalan' element={<DownloadChalan />} />
            <Route path='send-feedback' element={<SendFeedback />} />
            <Route path='applications' element={<Applications />} />
            <Route path='pagenotfound' element={<PageNotFound />} />
          </Route>
          <Route path='/update' element={<UpdateLayout />}>
            <Route path='update-student/:id' element={<UpdateStudent />} />
            <Route path='update-user/:id' element={<UpdateUser />} />
            <Route
              path='update-department/:id'
              element={<UpdateDepartment />}
            />
            <Route path='upload-chalan/:id' element={<UploadChalan />} />
            <Route
              path='upload-paid-chalan/:id'
              element={<UploadPaidChalan />}
            />
            <Route path='update-password/:id' element={<UpdatePassword />} />
            <Route path='update-status/:id' element={<UpdateStatus />} />
            <Route path='show-documents/:id' element={<ShowDocuments />} />
            <Route path='show-paid-chalan/:id' element={<ShowPaidChalan />} />
          </Route>
        </Route>

        {/* Login Routes */}
        <Route element={<LoginProtected />}>
          <Route path='/login' element={<LoginLayout />}>
            <Route path='app' element={<Login />} />
            <Route path='forget-password' element={<ForgetPassword />} />
            <Route
              path='change-password/:resetToken'
              element={<ChangePassword />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
