import { routerType } from "../types/router.types";
import Login from "./login";
import Home from "./home";
import StoreManager from "./storemanager";
import MaintenanceWorker from "./maintenanceworker";
import MaintenanceWorkerDashboard from "./maintenanceworkerdashboard";
import InventoryDashboard from "./inventorydashboard";
import CamerasZones from "./cameraszones";
import Shopper from "./shopper";
import Footfall from "./footfall"; 
import Intrusion from "./intrusion"; 
import CamerasZonesWizard from "./camerazoneswizard";
import Genie from "./genie";
import ShopperProducts from "./shopperproducts";
import ShopperProductDetail from "./shopperproductdetail";
import ShopperReviewCart from "./shopperreviewcart";
const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "Home"
  },
  {
    path: "login",
    element: <Login />,
    title: "Login"
  },
  {
    path: "storemanager",
    element: <StoreManager />,
    title: "Store Manager"
  },
  {
    path: "maintenanceworker",
    element: <MaintenanceWorker />,
    title: "Maintenance Worker"
  },
  {
    path: "maintenanceworkerdashboard",
    element: <MaintenanceWorkerDashboard />,
    title: "Maintenance Worker Dashboard"
  },
  {
    path: "inventorydashboard",
    element: <InventoryDashboard />,
    title: "Inventory Dashboard"
  },
  {
    path: "cameraszones",
    element: <CamerasZones isOpen={false} onDismiss={() => {}} onSave={() => {}} />,
    title: "Cameras and Zones"
  },
  {
    path: "camerazoneswizard",
    element: <CamerasZonesWizard />,
    title: "Cameras and Zones Wizard"
  },
  {
    path: "shopper",
    element: <Shopper />,
    title: "Shopper"
  },
  {
    path: "shopperproducts",
    element: <ShopperProducts />,
    title: "Shopper Products Search"
  },
  {
    path: "shopperproductdetail",
    element: <ShopperProductDetail />,
    title: "Shopper Products Detail"
  },
  {
    path: "shopperreviewcart",
    element: <ShopperReviewCart />,
    title: "Shopper Review Cart"
  },
  {
    path: "footfall",
    element: <Footfall />,
    title: "Footfall"
  },
  {
    path: "intrusion",
    element: <Intrusion />,
    title: "Intrusion"
  },
  {
    path: "genie",
    element: <Genie />,
    title: "Genie"
  }
];

export default pagesData;