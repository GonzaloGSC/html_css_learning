import { FuncCreateAccountFormSubmited } from './pages/create_account.js';

$(document).ready(function () {
    setTimeout(() => {
        $('#header_content_div').load("/02_fake_store/pages/components/header.html");
        // $('#content_div').load("/02_fake_store/pages/home.html");
        $('#modals_content').load("/02_fake_store/pages/components/modals.html");
        $('#footer_content_div').load("/02_fake_store/pages/components/footer.html");
        $('#toast_content').load("/02_fake_store/pages/components/toast.html");
    }, 100);
});

document.addEventListener("click", event => {
    if (event.target.localName === "button") {
        document.activeElement.blur();
    };
    if (event.target.id === "create_account_form_button") {
        FuncCreateAccountFormSubmited(event);
    };
});