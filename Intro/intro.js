// window.addEventListener('load', function() {
//   const audio = document.getElementById('player');
//   audio.play().catch((error) => {
//       console.log('Âm thanh không thể phát:', error);
//   });

//   setTimeout(() => {
//       document.getElementById('digit').innerText = "Let's go"; // Thay đổi sau 2 giây
//       setTimeout(() => {
//           document.getElementById('container').classList.toggle("containeroverlay");
//           // Chuyển hướng sau 1 giây
//           setTimeout(() => {
//               window.location = "./MyBirthday/MyBirthday.html"; 
//           }, 1000);
//       }, 1000);
//   }, 2000);
// });