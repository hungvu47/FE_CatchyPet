// import Chart from "./../../../components/AdminComponent/chart/Chart";
// import FeaturedInfo from "../../../components/AdminComponent/featuredInfo/FeaturedInfo";
import styles from "./home.module.css";
// import { userData } from "../../../dummyData";
// import WidgetSm from "../../../components/AdminComponent/widgetSm/WidgetSm";
// import WidgetLg from "../../../components/AdminComponent/widgetLg/WidgetLg";
import WidgetLg from "../../../adminComponent/widgetLg/WidgetLg";
import Helper from "../../../utiliti/helper/Helper";

function AdminPage() {
  const hihi = () => {
    Helper.toast("success", "error");
  };
  return (
    <div className={styles.home}>
      <button onClick={hihi}></button>
      {/* <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      /> */}
      <div className={styles.homeWidgets}>
        <WidgetLg />
      </div>
    </div>
  );
}

export default AdminPage;