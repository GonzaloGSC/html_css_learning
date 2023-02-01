$(document).ready(function () {
    $('#header_content_div').load("/02_fake_store/pages/components/header.html");
    // $('#content_div').load("/02_fake_store/pages/home.html");
    $('#modals_content').load("/02_fake_store/pages/components/modals.html");
    $('#footer_content_div').load("/02_fake_store/pages/components/footer.html");
});

document.addEventListener("click", event => {
    if (event.target.localName === "button") {
        document.activeElement.blur();
    };
});