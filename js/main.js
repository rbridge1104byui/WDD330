const links = [
    {
        name: "Week1 notes",
        url: "week1/index.html"
    }
]

var list = function(links) {
    for (var link in links) {
        document.getElementById('list-of-links').innerHTML += '<li>' + link + '</li>';
    }
}