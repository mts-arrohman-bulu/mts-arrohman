const scriptURL = "https://script.google.com/macros/s/AKfycbyZiRs1Clgnsopp6-ByX6tV8ZJKBv7CmELbjH6lfjTM-rUAVw3SbIq1uG1YcAYr3qerNQ/exec";

const form = document.getElementById("ppdbForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      form.reset();
    })
    .catch(error => {
      alert("Terjadi kesalahan");
      console.error(error);
    });
  });
}

