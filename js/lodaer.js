setTimeout(function() {
  var redirected = sessionStorage.getItem("redirected");
  if (!redirected) {
    sessionStorage.setItem("redirected", "true");
    window.location.href = "main.html";
  }
}, 3000);

