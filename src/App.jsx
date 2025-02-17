

import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";




const Home = lazy(() => import("./core/public/home"));
const Login = lazy(() => import("./core/public/pages/login"));
const Register = lazy(() => import("./core/public/pages/register"));
const ContactUs = lazy(() => import("./core/public/pages/ContactUs"));
const PrivacyPolicy = lazy(() => import("./core/public/pages/PrivacyPolicy"));
const ManageTickets = lazy(() => import("./core/public/pages/ManageTickets"));
const Dashboard = lazy(() => import("./core/private/customer/admin/pages/Dashboard"));
const ViewRoutes = lazy(() => import("./core/private/customer/admin/pages/ViewRoute"));
const AddRoute = lazy(() => import("./core/private/customer/admin/pages/AddRoute"));
const Support = lazy(() => import("./core/private/customer/admin/pages/Support"));
const Users = lazy(() => import("./core/private/customer/admin/pages/Users"));
const ViewBookings = lazy(() => import("./core/private/customer/admin/pages/ViewBookings"));
const Confirm = lazy(() => import("./core/private/customer/admin/pages/Confirm"));
const AddBuses = lazy(() => import("./core/private/customer/admin/pages/AddBuses"));
const ViewBuses = lazy(() => import("./core/private/customer/admin/pages/ViewBuses"));
const Setting = lazy(() => import("./core/private/customer/admin/pages/Setting"));
const Layout = lazy(() => import("./core/private/Layout"));
const FAQ = lazy(() => import("./core/public/pages/FAQ"));

function App() {
    const publicRoutes = [
        {
            path: "/",
            element: (
                <Suspense fallback={<div>Loading Home...</div>}>
                    <Home />
                </Suspense>
            ),
        },
        {
            path: "/login",
            element: (
                <Suspense fallback={<div>Loading Login...</div>}>
                    <Login />
                </Suspense>
            ),
        },
        {
            path: "/Register",
            element: (
                <Suspense fallback={<div>Loading Register..</div>}>
                    <Register />
                </Suspense>
            ),
        },
        {
            path: "/ContactUs",
            element: (
                <Suspense fallback={<div>Loading ContactUs..</div>}>
                    <ContactUs />
                </Suspense>
            ),
        },
        {
            path: "/PrivacyPolicy",
            element: (
                <Suspense fallback={<div>Loading PrivacyPolicy..</div>}>
                    <PrivacyPolicy />
                </Suspense>
            ),
        },
        {
            path: "/ManageTickets",
            element: (
                <Suspense fallback={<div>Loading ManageTickets..</div>}>
                    <ManageTickets />
                </Suspense>
            ),
        },
        {
            path: "/FAQ",
            element: (
                <Suspense fallback={<div>Loading FAQ..</div>}>
                    <FAQ />
                </Suspense>
            ),
        },

        { path: "*", element: <div>404: Page Not Found</div> },
    ];
    const privateRoutes = [
        {
            path: "/admin",
            element: <Layout />,
            children: [
                // { path: "customer", element: <CustomerIndex /> },
                // { path: "customer/form", element: <CustomerForm /> },
                // { path: "booking", element: <BookingIndex /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "ViewRoutes", element: <ViewRoutes /> },
                { path: "AddRoute", element: <AddRoute /> },
                { path: "Support", element: <Support /> },
                { path: "Users", element: <Users /> },
                { path: "ViewBookings", element: <ViewBookings /> },
                { path: "Confirm", element: <Confirm /> },
                { path: "AddBuses", element: <AddBuses /> },
                { path: "ViewBuses", element: <ViewBuses /> },
                { path: "Setting", element: <Setting /> },
            ],
        },
        { path: "*", element: <>Page not found</> },
    ];

    const isAdmin =false;
    const routes = isAdmin ? privateRoutes : publicRoutes;

    return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
