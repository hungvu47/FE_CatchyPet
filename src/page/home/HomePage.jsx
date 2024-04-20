import Slider from "../../components/slider/Slider";
import Category from "../../components/Category/Category";
import Outstanding from "../../components/Product/outstanding/Outstanding";
import TabProduct from "../../components/Product/tabProduct/TabProduct";
import Service from "../../components/service/Service";
import Accessories from "../../components/Product/accessories/Accessories";
import Blog from "../../components/blog/Blog";
import Brand from "../../components/brand/Brand";

const HomePage = () => (
  <>
    <Slider />
    <Category />
    <Outstanding />
    <TabProduct />
    <Service />
    <Accessories />
    <Blog />
    <Brand />
  </>
);

export default HomePage;