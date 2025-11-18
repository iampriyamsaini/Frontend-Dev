"use strict";

const user = {
    name: "John",
    email: "",
    age: 21
};
function buildForm() {
    const form = document.createElement("form");
    form.id = "userForm";
    for (const key in user) {
        const fieldWrapper = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ": ";
        label.htmlFor = key;
        const input = document.createElement("input");
        input.type = key === "age" ? "number" : "text";
        input.id = key;
        input.value = user[key];
        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
        form.appendChild(fieldWrapper);
    }
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Update User";
    form.appendChild(submitButton);
    form.addEventListener("submit", handleFormSubmit);
    document.body.appendChild(form);
}