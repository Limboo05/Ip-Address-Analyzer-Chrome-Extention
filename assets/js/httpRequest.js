//Asynchronous XMLHttpRequest
function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();

  var search_button = document.getElementById("search_button");

  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
      search_button.innerHTML = "Search";
      search_button.disabled = false;
    } else {
      search_button.innerHTML = "Loading...";
      search_button.disabled = true;
    }
  };

  xmlHttp.onerror = function (error) {
    console.error("xmlhttprequest error:", error);
    search_button.innerHTML = "Search";
    search_button.disabled = false;
  };

  xmlHttp.open("GET", theUrl, true); // true for asynchronous
  xmlHttp.send(null);
}
