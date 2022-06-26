
var readMoreAll = document.querySelectorAll('.read-more');

readMoreAll.forEach(readMore => readMore.addEventListener("click", function(e) {
    readMore.style.display = 'none';
    e.target.nextSibling.nextSibling.style.display = "contents";
}))

AOS.init();