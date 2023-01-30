document.addEventListener("input", event => {
    if (event.target.id === "create_account_form_email1") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_email2") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_name") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_password1") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_password2") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_gender") {
        event.target.className = "";
    };
    if (event.target.id === "create_account_form_terms") {
        event.target.className = "";
    };
});


function FuncMyAccountFormSubmited(event) {
    event.preventDefault();
    let elements = event.target.form.elements;
    const formData = {
        email1: elements.email1.value,
        email2: elements.email2.value,
        gender: elements.gender.value,
        name: elements.name.value,
        password1: elements.password1.value,
        password2: elements.password2.value,
        terms: elements.terms.checked,
    };
    let validated = true;
    let reg = new RegExp("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$");
    let inputEmail1 = document.getElementById("create_account_form_email1");
    let inputEmail2 = document.getElementById("create_account_form_email2");
    let inputName = document.getElementById("create_account_form_name");
    let inputPassw1 = document.getElementById("create_account_form_password1");
    let inputPassw2 = document.getElementById("create_account_form_password2");
    let selectGender = document.getElementById("create_account_form_gender");
    let inputTerms = document.getElementById("create_account_form_terms");

    if (!reg.test(formData.email1)) {
        inputEmail1.className = "is-invalid";
        validated = false;
    } else {
        inputEmail1.className = "";
    };
    if (formData.email1 != formData.email2) {
        inputEmail2.className = "is-invalid";
        validated = false;
    } else {
        inputEmail2.className = "";
    };
    if (!["", "male", "female", "other"].includes(formData.gender)) {
        selectGender.className = "is-invalid";
        validated = false;
    } else {
        selectGender.className = "";
    };
    if (formData.name.length < 4 || formData.name.length > 50) {
        inputName.className = "is-invalid";
        validated = false;
    } else {
        inputName.className = "";
    };
    if (formData.password1.length < 4 || formData.password1.length > 10) {
        inputPassw1.className = "is-invalid";
        validated = false;
    } else {
        inputPassw1.className = "";
    };
    if (formData.password1 != formData.password2) {
        inputPassw2.className = "is-invalid";
        validated = false;
    } else {
        inputPassw2.className = "";
    };
    if (!formData.terms) {
        inputTerms.className = "is-invalid";
        validated = false;
    } else {
        inputTerms.className = "";
    };

    if (validated) {
        let actualUsers = [];
        if (localStorage.getItem("users")) {
            actualUsers = JSON.parse(localStorage.getItem("users"));
            if (actualUsers.find(e => e.email1 === formData.email1)) {
                console.log("ERROR");
                validated = false;
                inputEmail1.className = "is-invalid";
            } else {
                actualUsers = [...actualUsers, formData];
                localStorage.setItem("users", JSON.stringify(actualUsers));
                inputEmail1.className = "";
            };
        } else {
            actualUsers = [formData];
            localStorage.setItem("users", JSON.stringify(actualUsers));
        };
        if (validated) {
            inputEmail1.value = "";
            inputEmail2.value = "";
            inputName.value = "";
            inputPassw1.value = "";
            inputPassw2.value = "";
            selectGender.value = "";
            inputTerms.value = false;
        };
    };
};