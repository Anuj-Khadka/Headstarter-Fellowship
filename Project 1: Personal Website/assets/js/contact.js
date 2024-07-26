import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";;
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";;

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const contactFormRef = ref(database, 'contactFormDb');

const getElementVal = (id) => {
  return document.getElementById(id).value;
};

const submitForm = (e) => {
  e.preventDefault();

  let name = getElementVal('name');
  let emailId = getElementVal('email-id');
  const contactMessage = getElementVal('contact-message');

  console.log(name, emailId, contactMessage);

  saveMessages(name, emailId, contactMessage);

  document.querySelector('.contact-alert').style.display = 'block';

  setTimeout(() => {
    document.querySelector('.contact-alert').style.display = 'none';
  }, 3000);

  document.getElementById('contact-form').reset();
};

const saveMessages = (name, emailId, contactMessage) => {
  const newContactFormRef = push(contactFormRef); // Generate new child reference with auto-generated key
  const newContactFormKey = newContactFormRef.key;

  const newContactForm = {
    name: name,
    email_id: emailId,
    contact_message: contactMessage,
  };

  return set(newContactFormRef, newContactForm);
};

document.getElementById('contact-form').addEventListener('submit', submitForm);
