import { MdDashboard, MdSell } from "react-icons/md";
import { IoMdCart } from "react-icons/io";

export const ROUTES = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  COMPANIES: "/companies",
  COMPANY: "/company",
  CREATE_COMPANIES: "/companies/create",
  UPDATE_COMPANY: "/companies/update",
  SUPPLIERS: "/suppliers",
  PURCHASE: "/purchase",
};

export const SidebarRoutes = [
  { label: "Dashboard", href: ROUTES.COMPANY, Icon: MdDashboard },
  { label: "Suppliers", href: ROUTES.SUPPLIERS, Icon: MdSell },
  { label: "Purchase", href: ROUTES.PURCHASE, Icon: IoMdCart },
];
