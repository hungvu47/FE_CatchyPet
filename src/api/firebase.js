import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDXDc07GCE87qsehw1e9D3f3hjrlLll8_w",
  authDomain: "webservicepet.firebaseapp.com",
  projectId: "webservicepet",
  storageBucket: "webservicepet.appspot.com",
  messagingSenderId: "707540613542",
  appId: "1:707540613542:web:6d9134648f2ba428bcf767",
  measurementId: "G-RD53SS7ZQX"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();