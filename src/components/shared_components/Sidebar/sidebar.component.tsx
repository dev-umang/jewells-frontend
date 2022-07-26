import { memo } from "react";
import { MdDashboard } from "react-icons/md";
import { SidebarRoutes } from "src/common/routes/main.routes";
import styles from "./sidebar.module.scss";
import SidebarButton from "./sidebarButton.component";

const Sidebar = memo(() => {
  return (
    <aside className={styles.sidebarWrapper}>
      <div>
        {SidebarRoutes.map((route) => {
          return (
            <SidebarButton
              key={route.href}
              href={route.href}
              Icon={<route.Icon />}
            />
          );
        })}
      </div>
      <div>Toggle</div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
