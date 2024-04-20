import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Select from "react-select";

import { useForm } from "../../../../adminComponent/userForm";
import Helper from "../../../../utiliti/helper/Helper";
import Controls from "../../../../adminComponent/controls/Controls";
import UploadImage from "../../../../adminComponent/uploadImg/UploadImg";
// import { v4 as uuidv4 } from "uuid";

const initialFValues = {
  description: "",
  productName: "",
  price: "",
  productImage: "",
  stockQuantity: "",
  categoryId: "",
  categoryName: ''
};


export default function FormAddOrEdit({ recordForEdit, addOrEdit, optionCategory, }) {

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("productName" in fieldValues)
      temp.productName = fieldValues.productName ? "" : "Tên là bắt buộc.";
    if ("price" in fieldValues) {
      if (!fieldValues.price) {
        temp.price = "Giá là bắt buộc.";
      } else if (fieldValues.price <= 0) {
        temp.price = "Giá trị phải lớn hơn 0.";
      } else {
        temp.price = "";
      }
    }

    if ("stockQuantity" in fieldValues) {
      if (!fieldValues.stockQuantity) {
        temp.stockQuantity = "Trường này là bắt buộc.";
      } else if (parseInt(fieldValues.stockQuantity) <= 0) {
        temp.stockQuantity = "Số lượng phải lớn hơn 0";
      } else {
        temp.stockQuantity = "";
      }
    }

    // if ("productImage" in fieldValues) {
    //   temp.productImage =
    //     fieldValues.productImage.length > 0
    //       ? ""
    //       : "Product Image is required.";
    // }

    // if ("previewImage" in fieldValues) {
    //     temp.previewImage =
    //         fieldValues.previewImage.length > 0
    //             ? ""
    //             : "Preview Image is required.";
    // }
    if ("categoryId" in fieldValues) {
      temp.categoryId =
        fieldValues.categoryId ? "" : "Danh mục là bắt buộc.";
    }

    if ("description" in fieldValues) {
      temp.description = fieldValues.description
        ? ""
        : "Description is required.";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues == values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm, } = useForm(initialFValues, true, validate);

  useEffect(() => {
    if (recordForEdit != null && recordForEdit.category)
      setValues({
        ...recordForEdit,
        categoryName: recordForEdit.category.categoryName,
        categoryId: recordForEdit.category.categoryId,
        productImage: recordForEdit.productImage
      });
  }, [recordForEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };

  const handleImageChange = (imageUrl) => {
    setValues({
      ...values,
      productImage: imageUrl,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setValues({
      ...values,
      categoryId: selectedOption.value,
      categoryName: selectedOption.label
    });
  };

  const handleDescriptionChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <Box onSubmit={handleSubmit} width="100%">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="w-full">
            <label htmlFor="">Tên sản phẩm:</label>
            <br />
            <input
              name="productName"
              type="text"
              className="w-full mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
              value={values.productName}
              onChange={handleInputChange}
            />
            <br />
            <span className="text-red-600 mt-2">{errors.productName}</span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-full">
            <label htmlFor="">Giá:</label>
            <br />
            <input
              className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
              type="number"
              name="price"
              value={Helper.maskValuePrice(values.price)}
              onChange={(e) =>
                handleInputChange(Helper.maskPrice(e))
              }
            />
            <br />
            <span className="text-red-600 mt-2">
              {errors.price}
            </span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="w-full">
            <label htmlFor="">Số lượng:</label>
            <br />
            <input
              className="w-full max-w-[300px] mt-[10px] py-[7px] border-[1px] border-[#787878] outline-none rounded-md pl-[20px] focus:border-PK-client focus:border-[1px] transition-all"
              type="number"
              name="stockQuantity"
              value={values.stockQuantity}
              onChange={(e) => handleInputChange(e)}
            />
            <br />
            <span className="text-red-600 mt-2">
              {errors.stockQuantity}
            </span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
            <label htmlFor="">Ảnh sản phẩm:</label>
            <br />
            <UploadImage
              setImageUrls={handleImageChange}
              imageUrl={recordForEdit ? recordForEdit.productImage : ''} />
            <span className="text-red-600">
              {errors.productImage}
            </span>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full flex justify-start items-start flex-wrap gap-[25px] z-11">
            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Danh mục:</label>
              <br />
              <Select
                name="categoryId"
                closeMenuOnSelect={true}
                value={{ label: values.categoryName, value: values.categoryId }}
                options={optionCategory.map(category => ({
                  label: category.categoryName,
                  value: category.categoryId
                }))}
                onChange={handleSelectChange}
              />
              <span className="text-red-600">
                {errors.categoryId}
              </span>
            </div>


            <div className="w-full max-w-[250px] ">
              <label htmlFor="">Hãng sản xuất:</label>
              <br />
              <Select

              />
              <span className="text-red-600">
                {errors.authors}
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="w-full">
            <label htmlFor="">Mô tả:</label>
            <br />
            <textarea
              name="description"
              cols="100"
              rows="10"
              value={values.description}
              onChange={handleDescriptionChange}
            ></textarea>
            <span className="text-red-600">
              {errors.description}
            </span>
          </div>
        </Grid>

        <Grid item xs={12}>
          <div className="text-right mt-[30px]">
            <Controls.Button
              type="submit"
              text="Submit"
              onClick={handleSubmit}
            />
            <Controls.Button text="Reset" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}