URL_FILE = "../../../assets/files/class-40/swagger-doc-example.yml";

const getFile = () => {
  fetch(URL_FILE)
    .then((response) => response.text())
    .then((text) => loadText(text));
};

const loadText = (text) => {
  const textArea = document.getElementById("swagger-example");
  textArea.innerText = text;
};

getFile();
