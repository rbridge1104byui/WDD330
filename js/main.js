

const links = [
    {
      label: "Week-01 ",
      url: "Week01/index.html",
    },
    {
      label: "Week-02 ",
      url: "Week02/index.html",
    },
    {
      label: "Week-03 ",
      url: "Week03/index.html",
    },
    {
      label:"Week-04",
      url:"Week04/index.html",
    },
    {
      label:"Week-05",
      url:"Week05/index.html",
    },
    {
      label:"Week-06",
      url:"Week06/index.html",
    },
    {
      label:"Week-07",
      url:"Week07/index.html",
    },
    {
      label:"Week-08",
      url:"Week08/index.html",
    },
    {
      label:"Week-09",
      url:"Week09/index.html",
    },
    {
      label:"Week-11",
      url:"Week07/index.html",
    },
    {
      label:"Final",
      url:"Final/logdisplay.html",
    }

    
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    var ol = document.getElementById("exercise_list");
  
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var a = document.createElement("a");
      var li = document.createElement("li");
      a.textContent = link.label;
      a.setAttribute("href", link.url);
      li.appendChild(a);
      ol.appendChild(li);
    }
  });