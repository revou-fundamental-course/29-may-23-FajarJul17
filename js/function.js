
//fungsi menampilkan windows ketika load website untuk meminta variable nama
function inputName() {
    var name = prompt("Enter your name");
    document.getElementById("nameWelcome").innerText = name;
}

//fungsi untuk mencari id element untuk nama pada halaman welcome
let find = document.getElementById("nameWelcome");
if(find != null){
    inputName();
}

//fungsi untuk menambah data form
function onFormSubmit(e) {
    e.preventDefault();
    const name = document.forms["messageForm"]["name-item"].value;
    const birthDate = document.forms["messageForm"]["date-item"].value;
    const gender = document.forms["messageForm"]["gender-item"].value;
    const messages = document.forms["messageForm"]["message-item"].value;

    setMessage(name, birthDate, gender, messages);
}

//fungsi untuk mengubah html text pada tempat yang telah ditentukan
function setMessage(name, birthDate, gender, messages) {
    var tanggal = setTime();
    document.getElementById("current-time").innerHTML = tanggal;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}

//fungsi untuk menampilkan waktu
function setTime() {
    var waktu = new Date(); // mendapatkan waktu saat ini
    var jam = waktu.getHours(); // mendapatkan jam saat ini
    var menit = waktu.getMinutes(); // mendapatkan menit saat ini
    var detik = waktu.getSeconds(); // mendapatkan detik saat ini
    var hari = waktu.getDate(); // mendapatkan tanggal saat ini
    var bulan = waktu.getMonth() + 1; // mendapatkan bulan saat ini (dimulai dari 0)
    var tahun = waktu.getFullYear(); // mendapatkan tahun saat ini

    // menampilkan tanggal dan waktu pada halaman
    var tanggal = hari + "/" + bulan + "/" + tahun + "          ||           " + jam + ":" + menit + ":" + detik;

    return tanggal
}