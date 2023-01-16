let show_menu = false;

function f_change_page(page_html, event) {
    event.preventDefault();
    if (page_html != "index.html") {
        document.getElementById('content_div_main').style.display = "none";
        document.getElementById('content_div').style.display = "flex";
        $('#content_div').load("/01_basic/pages/" + page_html);
    } else {
        document.getElementById('content_div_main').style.display = "flex";
        document.getElementById('content_div').style.display = "none";
    }
};

function f_nav_menu_button() {
    if (show_menu) {
        document.getElementById("menu_hidden").style.display = "none";
    } else {
        document.getElementById("menu_hidden").style.display = "grid";
    };
    show_menu = !show_menu;
};

function f_close_nav_menu_button() {
    if (show_menu) {
        document.getElementById("menu_hidden").style.display = "none";
        show_menu = !show_menu;
    };
};

window.addEventListener('click', function (e) {
    if (document.getElementById('nav_menu_button').contains(e.target)) {
        // Clicked in box
        f_nav_menu_button();
    } else {
        // Clicked outside the box
        f_close_nav_menu_button();
    };
});