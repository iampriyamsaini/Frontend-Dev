"use strict";

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
        this.formElement = document.createElement("form");
        this.buildForm();
    }
    buildForm() {
        this.fields.forEach(field => {
            const fieldWrapper = document.createElement("div");
            const label = document.createElement("label");
            label.textContent = field.label;
            label.htmlFor = field.label.toLowerCase().replace(/\s+/g, '-');
            const input = document.createElement("input");
            input.type = field.type;
            input.id = label.htmlFor;
            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(input);
            this.formElement.appendChild(fieldWrapper);
        });
        const submitButton = document.createElement("button");
        submitButton.type = "submit";
        submitButton.textContent = "Submit";
        this.formElement.appendChild(submitButton);
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log(this.getFormData());
        });
        document.body.appendChild(this.formElement);
    }
    getFormData() {
        const formData = {};
        this.fields.forEach(field => {
            const inputId = field.label.toLowerCase().replace(/\s+/g, '-');
            const inputElement = document.getElementById(inputId);
            formData[field.label] = inputElement.value;
        });
        return formData;
    }
}

const fields = [
    { type: 'text', label: 'Username' },
    { type: 'email', label: 'Email' },
    { type: 'password', label: 'Password' },
    { type: 'number', label: 'Age' }
];