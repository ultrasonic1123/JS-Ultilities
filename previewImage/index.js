let inputImage = document.getElementById("image-input");
let imagePreview = document.getElementsByClassName("image-preview")[0];
// console.log(imagePreview);
// console.log(inputImage);

inputImage.addEventListener("change", (e) => {
  console.log(e.target.files);
  let file = e.target.files[0];
  let imageSrc;
  if (file) {
    fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onloadend = (e) => {
      console.log(e.target.result);
      imageSrc = e.target.result;
      console.log("ImageSRC: ", imageSrc);

      image = document.createElement("img");
      image.src = imageSrc;
      imagePreview.appendChild(image);
    };
  }
});
