function fetching() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      document
        .getElementById("fetch-perrito")
        .setAttribute("src", data.message);
    });
}

function xmlf() {
  let xml = new XMLHttpRequest();
  xml.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText);
      document.getElementById("xml-perrito").setAttribute("src", data.message);
    }
  };
  xml.send();
}
