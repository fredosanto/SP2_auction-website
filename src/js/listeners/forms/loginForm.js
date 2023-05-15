"use strict";

import { login } from "../../api/auth/login.js";

const loginForm = document.getElementById("loginForm");

export async function userLogin() {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const loginForm = e.target;

    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    const user = {
      email,
      password,
    };

    login(user);
  });
}
