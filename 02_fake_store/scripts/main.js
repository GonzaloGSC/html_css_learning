let modalsActivated = [];

$(document).ready(function () {
    $('#header_content_div').load("/02_fake_store/pages/components/header.html");
    $('#content_div').load("/02_fake_store/pages/my_account.html");
    $('#modals_content').load("/02_fake_store/pages/components/modals.html");
});

function FuncCloseModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "none";
    modalsActivated.pop();
    if (modalsActivated.length == 0) {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
};

function FuncOpenModal(modalId) {
    let modal = document.getElementById(modalId);
    modal.style.display = "flex";
    modalsActivated = [...modalsActivated, "modal"];
};

document.addEventListener("click", event => {
    if (event.target.localName === "button") {
        document.activeElement.blur();
    };
});

// document.addEventListener("touchstart", event => {
//     if (event.target.localName === "button") {
//         console.log("target: ", event.target);
//         console.log("ActiveElement: ", document.activeElement);
//     };
// });
