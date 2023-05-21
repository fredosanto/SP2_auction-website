import { editAvatar } from "../../api/profile/editAvatar.js";

export async function editForm() {
  const editForm = document.querySelector("#edit-form");
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const edit = e.target;

    const avatar = edit.editAvatar.value;

    const avatarUrl = {
      avatar,
    };

    editAvatar(avatarUrl);
  });
}
