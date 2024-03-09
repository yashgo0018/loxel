import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import OrganizationDashboardPage from "./OrganizationDashboardPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route element={<RoutingLogicWrapper />}>
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="org/dashboard" element={<OrganizationDashboardPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
    // </Route>
  )
);

// function RoutingLogicWrapper() {
//   const { set: setLocale } = useLocale();

//   const { locale } = useParams();

//   if (!locale) return <Navigate to="/us" />;

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const localCode = locales.find((l) => l.code === locale);

//     if (!localCode) navigate("/");
//     else setLocale(localCode.locale);
//   }, []);

//   return (
//     <>
//       <Outlet />
//     </>
//   );
// }

export default router;
