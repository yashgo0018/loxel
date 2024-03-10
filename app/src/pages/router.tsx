import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import OrganizationDashboardPage from "./OrganizationDashboardPage";
import BuyPassPage from "./BuyPassPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="org/dashboard" element={<OrganizationDashboardPage />} />
        <Route path="/buyPass" element={<BuyPassPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
