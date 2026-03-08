// ==========================================
// LOGIKA UTAMA UNDANGAN
// ==========================================

// Variabel untuk memastikan typing hanya jalan sekali
let isTypingStarted = false;

function bukaUndangan() {
    const hero = document.querySelector('.hero');
    const konten = document.getElementById('konten-undangan');
    const body = document.body;

    // 1. Hilangkan Hero, Tampilkan Konten
    if (hero) hero.style.display = 'none';
    konten.style.display = 'block';
    
    // 2. Aktifkan Scroll
    body.classList.remove('locked');
    body.classList.add('unlocked');

    // 3. Scroll ke konten dengan halus
    konten.scrollIntoView({ behavior: 'smooth' });

    // 4. Jalankan efek mengetik (hanya jika belum berjalan)
    if (!isTypingStarted) {
        startTyping();
        isTypingStarted = true;
    }
}

// ==========================================
// EFEK MENGETIK
// ==========================================
function startTyping() {
    const text = "Cerita tentang bagaimana kami bertemu pertama kali, perjalanan suka duka, hingga akhirnya memutuskan untuk melangkah ke jenjang yang lebih serius... Kami sangat bersyukur atas dukungan dan doa dari teman-teman serta keluarga semua. Semoga perjalanan baru ini membawa keberkahan bagi kami berdua.";
    
    let i = 0;
    const speed = 40; // Sedikit dipercepat agar tidak terlalu lama menunggu
    const element = document.getElementById("typing-text");
    
    // Pastikan elemen kosong sebelum mulai
    element.innerHTML = "";

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Tambahkan kursor kedap-kedip di akhir
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    
    type();
}

// ==========================================
// KONFIRMASI WHATSAPP
// ==========================================
function kirimWhatsApp() {
    const namaInput = document.getElementById('namaTamu');
    const nama = namaInput.value.trim();
    
    if (nama === "") {
        alert("Mohon isi nama Anda terlebih dahulu!");
        namaInput.focus();
        return;
    }
    
    // Pesan yang lebih profesional
    const pesan = `Halo, saya ${nama}. Saya mengonfirmasi kehadiran pada acara pernikahan ini. Terima kasih!`;
    const nomorTujuan = "628123456789"; 
    const url = `https://wa.me/${nomorTujuan}?text=${encodeURIComponent(pesan)}`;
    
    window.open(url, '_blank');
}