const submitBtn = document.getElementById("submitBtn");
const deleteBtn = document.getElementById("deleteBtn");
const levelSelect = document.getElementById("forgivenessLevel");
const responseBox = document.getElementById("responseMessage");
const statusImage = document.getElementById("statusImage");
const userMessage = document.getElementById("userMessage");

// Simpan data input user (biar pembuat bisa lihat)
let savedData = [];

submitBtn.addEventListener("click", function(){

  const level = levelSelect.value;
  const message = userMessage.value;

  if(level === "" || message === ""){
    alert("Jawabanya..  ?");
    return;
  }

  fetch("https://script.google.com/macros/s/AKfycbzu-x8jokRPl3lvughfTIdZrYG3_hxXcWFTmmGoVqQa3zhBIhX6bK8AS_mrEO4ySazL/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      pesan: message,
      pilihan: level
    })
  });

  // Simpan data (bisa dilihat pembuat di console)
  savedData.push({
    pesan: message,
    tingkat: level,
    waktu: new Date().toLocaleString()
  });

  console.log("Data User:", savedData);

  let reply = "";

  if(level === "dimaafkan"){
    statusImage.src = "../images/happyham.png";
    reply = "Anda dimaafkan selamat wkwkwk password : Happycis";
  }
  else if(level === "menunggu"){
    statusImage.src = "../images/waittingham.png";
    reply = "ehmm.. coba lagi, anda kurang beruntung";
  }
  else if(level === "tidak_dimaafkan"){
    statusImage.src = "../images/sadham.png";
    reply = "Kenapaa..? soo saddd";
  }
  else if(level === "tidak_mau"){
    statusImage.src = "../images/pasraham.png";
    reply = "selamat anda membuatnya marah";
  }

  responseBox.innerHTML = `
    <strong>Kamu :</strong> ${message} <br><br>
    <strong>Hafidz :</strong> ${reply}
  `;
  responseBox.style.display = "block";
});

// HAPUS PILIHAN (sesuai sketsamu)
deleteBtn.addEventListener("click", function(){
  levelSelect.value = "";
  responseBox.style.display = "none";
  statusImage.src = "sad.png";
});

function checkPassword(page){
  const password = prompt("Masukkan password:");

  if(password === "Happycis"){
    window.location.href = page;
  } else {
    alert("Password salah!");
  }
}