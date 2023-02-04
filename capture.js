const video = document.getElementById('camera');
const capturedImage = document.getElementById('capturedImage');
const captureButton = document.getElementById('capture');

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  });

captureButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
  capturedImage.src = canvas.toDataURL();
  capturedImage.style.display = 'block';
});
