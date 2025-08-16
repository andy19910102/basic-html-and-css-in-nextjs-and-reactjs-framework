// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 初始化資料庫
const db = getFirestore(app);
// 初始化帳號管理
const auth = getAuth(app);

export {
    db, auth
};

// 其他檔案可引用此檔案的 db 和 auth
// import { db, auth } from "@/services/firebase"