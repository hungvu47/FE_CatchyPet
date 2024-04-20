// import styles from './Sidebar.css';
import styles from './sidebar.module.css';
import {
  Home,
  Timeline,
  // TrendingUp,
  PermIdentity,
  Storefront,
  // AttachMoney,
  BarChart,
  // MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  // Badge,
} from "@mui/icons-material";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";
// import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [activeDiv, setActiveDiv] = useState("");
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleActive = (divId) => {
    switch (divId) {
      case "admin":
        setActiveDiv(divId);
        break;
      case "user-client":
        setActiveDiv(divId);
        break;
      case "user-admin":
        setActiveDiv(divId);
        break;
      case "products":
        setActiveDiv(divId);
        break;
      case "categories":
        setActiveDiv(divId);
        break;
      case "appointment":
        setActiveDiv(divId);
        break;
      case "orders":
        setActiveDiv(divId);
        break;
      case "services":
        setActiveDiv(divId);
        break;
      default:
        setActiveDiv(divId === activeDiv ? "" : divId);
        break;
    }
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div className={styles.sidebarMenu}>
          <p id="demo"></p>
          <ul className={styles.sidebarList}>
            <Link to="/admin" className={styles.link}>
              <li
                className={styles.sidebarListItem}
                onClick={() => handleActive("admin")}
                style={{
                  backgroundColor:
                    activeDiv === "admin" ? "#1b2850" : "",
                  color:
                    activeDiv === "admin" ? "#fff" : "",
                }}
              >
                <Home className={styles.sidebarIcon} />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            {/* <Link to="/admin/user" className={styles.link}> */}
            <li
              onClick={handleOpen}
              className={`mb-1 ${styles.sidebarListItem}`}
            >
              <PermIdentity className={styles.sidebarIcon} />
              Users
            </li>
            {/* </Link> */}
            <div className={`pl-5 ${open ? "block" : "hidden"}`}>
              <div
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("user-admin")}
                style={{
                  backgroundColor:
                    activeDiv === "user-admin"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "user-admin"
                      ? "#1b2850"
                      : "",
                }}
              >
                <Link
                  to="/admin/user/root"
                  className={styles.link}
                >
                  <PermIdentity
                    className={styles.sidebarIcon}
                  />
                  Users Admin
                </Link>
              </div>
              <div
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("user-client")}
                style={{
                  backgroundColor:
                    activeDiv === "user-client"
                      ? "#5a8d26"
                      : "",
                }}
              >
                <Link
                  to="/admin/user/client"
                  className={styles.link}
                >
                  <PermIdentity
                    className={styles.sidebarIcon}
                  />
                  Users Client
                </Link>
              </div>
            </div>
            <Link
              to="/admin/products"
              className={styles.link}
              onClick={handleClose}
            >
              <li
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("products")}
                style={{
                  backgroundColor:
                    activeDiv === "products"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "products"
                      ? "#fff"
                      : "",
                }}
              >
                <Storefront className={styles.sidebarIcon} />
                Sản phẩm
              </li>
            </Link>
            <Link
              to="/admin/categories"
              className={styles.link}
              onClick={handleClose}
            >
              <li
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("categories")}
                style={{
                  backgroundColor:
                    activeDiv === "categories"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "categories"
                      ? "#fff"
                      : "",
                }}
              >
                <CategoryIcon className={styles.sidebarIcon} />
                Danh mục
              </li>
            </Link>
            <Link
              to="/admin/appointment"
              className={styles.link}
              onClick={handleClose}
            >
              <li
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("appointment")}
                style={{
                  backgroundColor:
                    activeDiv === "appointment"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "appointment"
                      ? "#fff"
                      : "",
                }}
              >
                <CategoryIcon className={styles.sidebarIcon} />
                Đặt lịch
              </li>
            </Link>
            <Link
              to="/admin/orders"
              className={styles.link}
              onClick={handleClose}
            >
              <li
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("orders")}
                style={{
                  backgroundColor:
                    activeDiv === "orders"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "orders"
                      ? "#fff"
                      : "",
                }}
              >
                <BusinessCenterIcon
                  className={styles.sidebarIcon}
                />
                Đơn hàng
              </li>
            </Link>
            <Link
              to="/admin/services"
              className={styles.link}
              onClick={handleClose}
            >
              <li
                className={`mb-1 ${styles.sidebarListItem}`}
                onClick={() => handleActive("services")}
                style={{
                  backgroundColor:
                    activeDiv === "services"
                      ? "#1b2850"
                      : "",
                  color:
                    activeDiv === "services"
                      ? "#fff"
                      : "",
                }}
              >
                <BusinessCenterIcon
                  className={styles.sidebarIcon}
                />
                Dịch vụ
              </li>
            </Link>

          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={`mb-1 ${styles.sidebarListItem}`}>
              <DynamicFeed className={styles.sidebarIcon} />
              Feedback
            </li>
            <li className={`mb-1 ${styles.sidebarListItem}`}>
              <ChatBubbleOutline className={styles.sidebarIcon} />
              Messages
            </li>
          </ul>
        </div>
        <div className={styles.sidebarMenu}>
          <ul className={styles.sidebarList}>
            <li className={`mb-1 ${styles.sidebarListItem}`}>
              <WorkOutline className={styles.sidebarIcon} />
              Page
            </li>
            <li className={`mb-1 ${styles.sidebarListItem}`}>
              <Timeline className={styles.sidebarIcon} />
              Analytics
            </li>
            <li className={`mb-1 ${styles.sidebarListItem}`}>
              <Report className={styles.sidebarIcon} />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;