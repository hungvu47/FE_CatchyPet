import { useDispatch, useSelector } from "react-redux";
import "./Category.css"
import { useEffect } from "react";
import { fetchAllCategory } from "../../slice/categorySlice"
import { Link } from "react-router-dom";
import convertToSlug from "../../utiliti/convertToSlug";

function Category() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.category.categories)

  useEffect(() => {
    dispatch(fetchAllCategory());
  }, [dispatch]);

  return (<section className="awe-section-2">
    <section className="section_welcome">
      <div className="container">
        <div className="title_module_main">
          <h2>
            <span>Chào mừng bạn đến với Catchy Pet</span>
          </h2>
        </div>
        <div className="swiper_welcome swiper-container">
          <div className="swiper-wrapper">

            {categories.map(category => (
              <div key={category.categoryId} className="swiper-slide item">
                <div className="box_welcome">
                  <div className="image_welcome">
                    <Link to={`/sanpham/${category.categoryId}/${convertToSlug(category.categoryName)}`} title="Dành cho Chó">
                      <img className="lazyload loaded" width="10" height="10" src={category.categoryImage} alt="Dành cho Chó" />
                    </Link>
                  </div>
                  <div className="content_welcome">
                    <h3 className="title_welcome">
                      <Link to={`/sanpham/${category.categoryId}/${convertToSlug(category.categoryName)}`} title="Dành cho Chó">
                        {category.categoryName}
                      </Link>
                    </h3>
                    <p>
                      {category.categoryDes}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>

  </section>);
}

export default Category;