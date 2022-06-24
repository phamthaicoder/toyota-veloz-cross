var readMoreAll = document.querySelectorAll('.read-more');
var readMoreShowAll = document.querySelectorAll('.read-more-show');

readMoreAll.forEach(readMore => readMore.onclick = function() {
    readMore.style.display = 'none';
    
    readMoreShowAll.forEach(readMoreShow =>readMoreShow.style.display = 'contents')
})