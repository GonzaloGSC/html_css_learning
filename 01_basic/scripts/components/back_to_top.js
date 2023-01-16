window.addEventListener("scroll", function () {
    let y = document.documentElement.scrollTop;
    if (document.getElementById("back_to_top_div").style.opacity == "0") {

    }
    console.log("CSOA: ", document.getElementById("back_to_top_div").style.opacity);
    // let page_height = document.documentElement.clientHeight;
    // let maxScroll = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    if (y > 100) {
        document.getElementById("back_to_top_div").style.display = "flex";
        setTimeout(() => {
            document.getElementById("back_to_top_div").style.opacity = "1";
        }, 100);

    } else {
        document.getElementById("back_to_top_div").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("back_to_top_div").style.display = "none";
        }, 100);
    }
});

