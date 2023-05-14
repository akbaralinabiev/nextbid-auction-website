// const fileInput = document.getElementById("image-upload");
// const fileInfo = document.querySelector(".file-info");

// fileInput.addEventListener("change", function() {
//   if (fileInput.value) {
//     fileInfo.textContent = fileInput.files[0].name;
//   } else {
//     fileInfo.textContent = "No file chosen";
//   }
// });

// function cancelFile() {
//   var fileUpload = document.getElementById("image-upload");
//   var fileInfo = document.querySelector(".file-info");
//   fileUpload.value = ""; // Clear the selected file
//   fileInfo.textContent = ""; // Clear the file info text
// }


const fileInput = document.getElementById("image-upload");
const fileInfo = document.querySelector(".file-info");

fileInput.addEventListener("change", function() {
  if (fileInput.files.length > 0) {
    fileInfo.textContent = fileInput.files[0].name;
  } else {
    fileInfo.textContent = "No file chosen";
  }
});

// Set initial text when the page loads
fileInfo.textContent = "No file chosen";

function cancelFile() {
  var fileUpload = document.getElementById("image-upload");
  fileUpload.value = ""; // Clear the selected file
  fileInfo.textContent = "No file chosen";
}
