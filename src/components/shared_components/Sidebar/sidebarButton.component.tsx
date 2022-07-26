import React, { FC, memo } from "react";
import styles from "./sidebar.module.scss";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTES } from "src/common/routes/main.routes";

interface SidebarButtonProps {
  Icon: any;
  href: string;
  label?: string;
}

const SidebarButton: FC<SidebarButtonProps> = memo((props) => {
  const { cmpId } = useRouter().query;

  // let pathName = ROUTES.COMPANY + "/" + cmpId;
  // if (props.href !== ROUTES.COMPANY) {
  //   pathName += props.href;
  // }
  return (
    <Link href={props.href} passHref>
      <span className={styles.sidebarButton}>
        {/* <span className={props.Icon}></span> */}
        {props.Icon}
      </span>
    </Link>
  );
});

SidebarButton.displayName = "Component";
export default SidebarButton;
