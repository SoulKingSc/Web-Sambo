document.getElementById("pais").addEventListener("change", function () {
    var seleccion = this.value;
    if (seleccion === "ecu") {
      window.location.href = "indexEcu.html";
    } else if (seleccion === "col") {
      window.location.href = "index.html";
    }
  });