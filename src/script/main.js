document.addEventListener('DOMContentLoaded', function() {
    var sectionTitles = document.querySelectorAll('h2');
    sectionTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var content = this.nextElementSibling;
            content.classList.toggle('hidden');
        });
    });
});

const handleScroll = () => {
    const header = document.querySelector("header");
    const backToTopBtn = document.getElementById("backToTop");

    if (document.documentElement.scrollTop > 110) {
        header.classList.add("minimized");
        backToTopBtn.classList.remove("hide");
    } else {
        header.classList.remove("minimized");
        backToTopBtn.classList.add("hide");
    }
}

window.onscroll = () => {
    handleScroll();
}

document.getElementById("backToTop").addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})