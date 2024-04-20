import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)"
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "none",
    padding: "20px",
    background: "rgba(255, 255, 255, 0.",
  },
  oVvirF: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: ".1875rem",
    boxShadow: "0 0.125rem 0.25rem rgba(0,0,0,.54)",
    boxSizing: "border-box",
    padding: "1.875rem"
  },
  wwktUN: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  ZFh3Ru: {
    color: "#555",
    fontSize: "1rem",
    width: "23.75rem"
  },
  W6qz3v: {
    display: "flex",
    marginTop: "1.875rem",
    justifyContent: "flex-end"
  },
  nU2wV3: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "none",
    border: 0,
    borderRadius: ".125rem",
    outline: "none",
    padding: "0 .625rem",
    height: "2.5rem",
    minWidth: "8.75rem",
    color: "#555",
    textTransform: "uppercase"
  },
  ukVXpA: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    background: "none",
    border: 0,
    borderRadius: ".125rem",
    outline: "none",
    padding: "0 .625rem",
    height: "2.5rem",
    minWidth: "8.75rem",
    backgroundColor: "#ee4d2d",
    boxShadow: "0 1px 1px rgba(0,0,0,.09)",
    color: "#fff",
    textTransform: "uppercase",
    marginLeft: ".625rem",
    "&:hover": {
      opacity: 0.8
    },
  }
}

const ModalConfirm = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onCancel={onCancel}
      style={customStyles}
    >
      <div style={customStyles.oVvirF}>
        <div style={customStyles.wwktUN}>
          <div>
            <div style={customStyles.ZFh3Ru}>Bạn có chắc muốn xoá địa chỉ này?</div>
          </div>
        </div>
        <div style={customStyles.W6qz3v}>
          <button style={customStyles.nU2wV3} onClick={onCancel}>Trở Lại</button>
          <button style={customStyles.ukVXpA} onClick={onConfirm}>Xóa</button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
