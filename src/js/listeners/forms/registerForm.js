"use strict";

import { register } from "../../../js/api/auth/register.js";

const registerForm = document.getElementById("register-form");

export function registerUser() {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const registerForm = e.target;

    const name = registerForm.registerUsername.value;
    const email = registerForm.registerEmail.value;
    const password = registerForm.registerPassword.value;
    const avatar = registerForm.registerAvatar.value;

    const user = {
      name,
      email,
      password,
      avatar,
    };

    register(user);
  });
}
