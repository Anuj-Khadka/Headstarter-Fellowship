import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdN3-MdxD2pf2FZp4PXrM3_le4j3iA98A",
  authDomain: "portfolio-management-72d14.firebaseapp.com",
  databaseURL: "https://portfolio-management-72d14-default-rtdb.firebaseio.com",
  projectId: "portfolio-management-72d14",
  storageBucket: "portfolio-management-72d14.appspot.com",
  messagingSenderId: "687453766650",
  appId: "1:687453766650:web:8bb817ba08b6f5b0e3da43",
  measurementId: "G-Q05PZNQMZ4",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
