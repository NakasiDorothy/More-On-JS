let container = document.querySelector('div.container')

let phone = document.createElement('div');
phone.className ='card';


let heading = document.createElement('h3');
heading.textContent ="Sumsang Model"

let about = document.createElement('p');
about.textContent = "Samsung Galaxy S20 Family sells only 60% as much as the S10 models A12 6.5 4GB RAM 64GB ROM 48MP 5000mAh UGX 630,000 The impressive 6.5” HD+ 20:9 screen will bring your stories to life. Plus, Nokia 2.4 is ready for Android 11 and beyond so you can look forward to 2 years of Android upgrades and 3 years of monthly security updates."

let img = document.createElement('img');
img.src = "/Html2-Links-Input/Img/A12.jpg";

//adding elements to the parent element
phone.appendChild(heading);
phone.appendChild(about);
phone.appendChild(img);

// second div

let type = document.createElement('div');
type.className = 'card';

let heading2 = document.createElement('h3');
heading2.textContent = "Nokia Model";

let about2 = document.createElement('p');
about2.textContent = "Smart imaging and battery meets big screen Nokia 2.4 3GB RAM 64 GB Internal Storage Dual SIM...Nokia 2.4 is ready for you. Keep the energy up with 2-day Adaptive Battery technology, take detailed night shots with AI imaging and easily unlock with your fingerprint or a glance. The impressive 6.5” HD+ 20:9 screen will bring your stories to life. Plus, Nokia 2.4 is ready for Android 11 and beyond so you can look forward to 2 years of Android upgrades and 3 years of monthly security updates.";

let img2 = document.createElement('img');
img2.src = "/Html2-Links-Input/Img/M51.jpg";

//adding elements to the parent element

type.appendChild(heading2);
type.appendChild(about2);
type.appendChild(img2);


//adding to the DOM

container.appendChild(phone);
container.appendChild(type);