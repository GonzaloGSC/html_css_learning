function f_change_page(page_html, event) {
    event.preventDefault();
    if (page_html != "index.html") {
        document.getElementById('content_div_main').style.display = "none";
        document.getElementById('content_div').style.display = "flex";
        $('#content_div').load("/01_basic_info_site/pages/" + page_html);
    } else {
        document.getElementById('content_div_main').style.display = "flex";
        document.getElementById('content_div').style.display = "none";
    };
};