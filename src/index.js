import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const contactBtn = document.querySelector("#contact");

home();
homeBtn.addEventListener("click", home);
menuBtn.addEventListener("click", menu);
aboutBtn.addEventListener("click", about);
contactBtn.addEventListener("click", contact);
