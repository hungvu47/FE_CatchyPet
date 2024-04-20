import { toast } from "react-toastify";

const Helper = {};
Helper.toast = (type, content, disableAutoClose = false) => {
  let autoClose = disableAutoClose ? false : 3000;

  switch (type) {
    case 'success':
      toast.success(content, { autoClose });
      break;
    case 'error':
      toast.error(content, { autoClose });
      break;
    default:
      toast(content, { autoClose });
  }
};

Helper.maskPrice = (e) => {
  let value = e.target.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e.target.value = value;
  return e;
};

Helper.maskValuePrice = (e) => {
  if (!e) {
    return e;
  }
  let value = e.toString();
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{3})$/, "$1.$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
  e = value;
  return e;
};

Helper.userRole = (role) => {
  console.log("role", role);
  switch (role) {
    case 0:
      role = "Người dùng";
      break;
    case 1:
      role = "Admin";
      break;
    case 2:
      role = "Nhân viên";
      break;
    default:
      role = "Khách";
  }
  return role;
};

Helper.truncateString = (str, maxLength) => {
  if (!str) return str;
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  } else {
    return str;
  }

};

Helper.calculatePercentage = (originalPrice, salePrice) => {
  const discountPercentage = (
    ((originalPrice - salePrice) / originalPrice) *
    100
  ).toFixed();
  return discountPercentage;
};
Helper.formatDate = (inputDate) => {
  var date = new Date(inputDate);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  var formattedDate = year + "-" + month + "-" + day;
  return formattedDate;
};

export default Helper;