let show_menu = false;

function FuncChangePage(page_html, event) {
    event.preventDefault();
    $('#content_div').load("/02_fake_store/pages/" + page_html);
};

function FuncNavMenuButton() {
    if (show_menu) {
        document.getElementById("hidden-nav").style.display = "none";
    } else {
        document.getElementById("hidden-nav").style.display = "flex";
    };
    show_menu = !show_menu;
};

function FuncCloseNavMenuButton() {
    if (show_menu) {
        document.getElementById("hidden-nav").style.display = "none";
        show_menu = !show_menu;
    };
};

window.addEventListener('click', function (e) {
    if (document.getElementById('nav_menu_button').contains(e.target)) {
        FuncNavMenuButton();
    } else {
        FuncCloseNavMenuButton();
    };
});