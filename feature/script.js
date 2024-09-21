// script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Validasi sederhana
    if (name && email && phone && destination && date) {
        document.getElementById('message').innerText = 'Registrasi berhasil!';
    } else {
        document.getElementById('message').innerText = 'Silakan isi semua field!';
    }
});
