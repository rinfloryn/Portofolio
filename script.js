document.getElementById("formKontak").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let komentar = document.getElementById("komentar").value;

    alert("Kamsahamnidaa, " + nama + "! suratnya sudah terkirim🌷💜\nEmail: " + email + "\nKomentar: " + komentar);
    this.reset();
});