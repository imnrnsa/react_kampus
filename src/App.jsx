import "./assets/tailwind.css";
import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import React from "react";
import Loading from "./components/Loading";

function App() {

  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Orders = React.lazy(() => import("./pages/Orders"));
  const Customers = React.lazy(() => import("./pages/Customers"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const Login = React.lazy(() => import("./pages/auth/Login"));
  const Register = React.lazy(() => import("./pages/auth/Register"));
  const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
  const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
  const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
  
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
