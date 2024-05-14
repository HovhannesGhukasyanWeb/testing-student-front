import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const Home = React.lazy(() => import('./pages/home'));
const Layout = React.lazy(() => import('./layout'));
const NotFound = React.lazy(() => import('./pages/not-found'));
const Login = React.lazy(() => import('./pages/login'));
const Users = React.lazy(() => import('./pages/users'));
const ManagerSubjects = React.lazy(() => import('./pages/manager/subjects'));
const ManagerTeachers = React.lazy(() => import('./pages/manager/teachers'));

const MainRouter = () => {
    const { isAuthenticated } = useSelector((state) => state.user);
    return (
      <Router basename="/">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/login">
              <Route
                index
                element={isAuthenticated ? <Navigate to="/" /> : <Login />}
              />
              {/* <Route path="reset-password" element={<ResetPassword />} /> */}
            </Route>
  
            <Route
              path="/"
              element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
            >
              <Route index element={<Home />} />;
              <Route path="/users" element={<Users />} />
              <Route path="/manager/subjects" element={<ManagerSubjects />} />
              <Route path="/manager/teachers" element={<ManagerTeachers />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    )
}

export default MainRouter;
