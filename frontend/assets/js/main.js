(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate  glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()


  // Mendapatkan referensi ke elemen input tempat dan tanggal lahir
  const tempatInput = document.getElementById('tempat');
  const tanggalInput = document.getElementById('tanggal');

  // Menangkap event saat nilai input berubah
  tempatInput.addEventListener('input', combineTempatTanggal);
  tanggalInput.addEventListener('input', combineTempatTanggal);

  // Fungsi untuk menggabungkan nilai tempat dan tanggal lahir
  function combineTempatTanggal() {
    const tempat = tempatInput.value;
    const tanggal = tanggalInput.value;
    const tempatTanggal = tempat + ', ' + tanggal;
    // Menetapkan nilai gabungan ke input ttl
    document.getElementById('ttl').value = tempatTanggal;
  }

// Mengambil referensi elemen formulir
const form = document.querySelector('form');

// Menangani pengiriman formulir
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah pengiriman formulir secara default

  // Mengambil data dari elemen formulir
  const jenisSurat = document.getElementById('jenis-surat').value;
  const nama = document.getElementById('name').value;
  const nim = document.getElementById('nim').value;
  const tempatLahir = document.getElementById('tempat').value;
  const tanggalLahir = document.getElementById('tanggal').value;
  const fakultas = document.getElementById('fakultas').value;
  const jurusan = document.getElementById('jurusan').value;
  const alamat = document.getElementById('address').value;

  // Redirect ke halaman submission.html setelah menyimpan dokumen
  window.location.href = 'tampilan_dokumen.html'
});


// Fungsi untuk menyimpan dokumen
function saveDocument() {
  // Mendapatkan konten dokumen yang digenerate
  const documentContent = '...'; // Konten dokumen yang digenerate

  // Membuat objek Blob untuk dokumen
  const blob = new Blob([documentContent], { type: 'application/pdf' });

  // Membuat objek URL dari Blob
  const url = URL.createObjectURL(blob);

  // Membuat elemen <a> untuk mengunduh atau menyimpan dokumen
  const link = document.createElement('a');
  link.href = url;
  link.download = 'dokumen.pdf'; // Nama file yang akan disimpan

  // Menyembunyikan elemen <a> dan mengkliknya secara otomatis
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();

  // Membersihkan objek URL dan menghapus elemen <a>
  URL.revokeObjectURL(url);
  document.body.removeChild(link);
}



  // function generateDocument() {
  //   // Mendapatkan nilai-nilai dari inputan form
  //   var jenisSurat = document.getElementById("jenis-surat").value;
  //   var nama = document.getElementById("name").value;
  //   var nim = document.getElementById("nim").value;
  //   var tempatLahir = document.getElementById("tempat").value;
  //   var tanggalLahir = document.getElementById("tanggal").value;
  //   var fakultas = document.getElementById("major").value;
  //   var jurusan = document.getElementById("major").value;
  //   var alamat = document.getElementById("address").value;

  //   // Menggabungkan nilai-nilai dengan templat dokumen yang sesuai
  //   var dokumen = "";

  //   if (jenisSurat === "Surat Keterangan Aktif Kuliah") {
  //     dokumen = `Surat Keterangan Aktif Kuliah\n\nNama: ${nama}\nNIM: ${nim}\nTempat, Tanggal Lahir: ${tempatLahir}, ${tanggalLahir}\nFakultas: ${fakultas}\nJurusan: ${jurusan}\nAlamat: ${alamat}`;
  //   } else if (jenisSurat === "Surat Keterangan Mahasiswa") {
  //     dokumen = `Surat Keterangan Mahasiswa\n\nNama: ${nama}\nNIM: ${nim}\nTempat, Tanggal Lahir: ${tempatLahir}, ${tanggalLahir}\nFakultas: ${fakultas}\nJurusan: ${jurusan}\nAlamat: ${alamat}`;
  //   } else if (jenisSurat === "Surat Keterangan Lulus") {
  //     dokumen = `Surat Keterangan Lulus\n\nNama: ${nama}\nNIM: ${nim}\nTempat, Tanggal Lahir: ${tempatLahir}, ${tanggalLahir}\nFakultas: ${fakultas}\nJurusan: ${jurusan}\nAlamat: ${alamat}`;
  //   } else if (jenisSurat === "Surat Pernyataan Sedang Tidak Menerima Beasiswa Lain") {
  //     dokumen = `Surat Pernyataan Sedang Tidak Menerima Beasiswa Lain\n\nNama: ${nama}\nNIM: ${nim}\nTempat, Tanggal Lahir: ${tempatLahir}, ${tanggalLahir}\nFakultas: ${fakultas}\nJurusan: ${jurusan}\nAlamat: ${alamat}`
  //   }
    
  //   // Menampilkan hasil dokumen
  //   alert("Hasil dokumen:\n\n" + dokumen);
  //   }




    function generateDocument() {
      // Mendapatkan nilai-nilai dari inputan form
      var jenisSurat = document.getElementById("jenis-surat").value;
      var nama = document.getElementById("name").value;
      var nim = document.getElementById("nim").value;
      var tempatLahir = document.getElementById("tempat").value;
      var tanggalLahir = document.getElementById("tanggal").value;
      var fakultas = document.getElementById("major").value;
      var jurusan = document.getElementById("major").value;
      var alamat = document.getElementById("address").value;
    
      // Menggabungkan nilai-nilai dengan templat dokumen yang sesuai
      var dokumen = "Jenis Surat: " + jenisSurat + "\n";
      dokumen += "Nama: " + nama + "\n";
      dokumen += "NIM: " + nim + "\n";
      dokumen += "Tempat, Tanggal Lahir: " + tempatLahir + ", " + tanggalLahir + "\n";
      dokumen += "Fakultas: " + fakultas + "\n";
      dokumen += "Jurusan: " + jurusan + "\n";
      dokumen += "Alamat: " + alamat;
    
      // Menampilkan hasil dokumen dan menampilkan dialog konfirmasi
var confirmation = confirm("Hasil dokumen:\n\n" + dokumen + "\n\nApakah Anda ingin melanjutkan?");
if (confirmation) {
  window.location.href = "2instant.html";
} else {
  // Jika pengguna memilih "Cancel" dalam dialog konfirmasi atau menutup dialog,
  // tidak melakukan pengalihan halaman dan tetap berada di halaman yang sama.
  // Anda dapat menambahkan kode lain di sini untuk menangani tindakan setelah "Cancel" dipilih.
  // Misalnya, membersihkan atau memperbarui formulir.
  // Untuk contoh ini, tidak ada pengalihan halaman yang dilakukan.
  }
        
      }
    
    