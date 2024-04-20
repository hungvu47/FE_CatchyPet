import { getDownloadURL, ref, uploadBytesResumable, } from "firebase/storage";
import { storage } from "../../api/firebase";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import "./UploadImg.css"

const UploadImage = ({ setImageUrls, imageUrl: propImageUrl }) => {
  // const imgListRef = ref(storage, "images/");
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl(propImageUrl); // Set ảnh khi có URL mới
  }, [propImageUrl]);

  const handleChange = (event) => {
    const imgUploads = event.target.files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      // Hiển thị trước hình ảnh
      const previewUrl = e.target.result;
      setImageUrl(previewUrl);
    };
    reader.readAsDataURL(imgUploads);

    const imgRef = ref(storage, `images/${imgUploads.name + v4()}`);
    uploadBytesResumable(imgRef, imgUploads).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };

  return (
    <div className="upload-image-container">
      <div className="dropzone-wrapper">
        <label
          htmlFor="dropzone-file"
          className="dropzone-label"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <input
            id="dropzone-file"
            type="file"
            className="dropzone-input"
            onChange={handleChange}
          />
        </label>
      </div>
      {imageUrl && (
        <div className="readeImage"
          style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", width: "100%", maxWidth: "130px", height: "130px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="removeIcon"
            onClick={() => setImageUrl('')}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default UploadImage;