import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import GuestsManagementLayout from "../layouts/GuestsManagementLayout";
import HotalManagementLayout from "../layouts/HotalManagementLayout";
import VerificationLayout from "../layouts/VerificationLayout";
import BookingManagementLayout from "../layouts/BookingManagementLayout";
import ContentManagementLayout from "../layouts/ContentManagementLayout";
import FinacialLayout from "../layouts/FinacialLayout";
import AnalyticsLayout from "../layouts/AnalyticsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // default route for "/"
        element: <Home />,
      },
      {
        path: "/guests-management",
        element: <GuestsManagementLayout />
      },
      {
        path: "/hotel-management",
        element: <HotalManagementLayout />
      },
      {
        path: "/verification",
        element: <VerificationLayout />
      },
      {
        path: "/booking-management",
        element: <BookingManagementLayout />
      },
      {
        path: "/content-management",
        element: <ContentManagementLayout />
      },
      {
        path: "/finacial-management",
        element: <FinacialLayout />
      },
      {
        path: "/analytics-report",
        element: <AnalyticsLayout />
      }
    ],
  },
]);

export default router;
