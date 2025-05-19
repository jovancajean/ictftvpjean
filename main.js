/* Menampilkan pop-up yang berisikan Nama, Quotes dan Roasting menggunakan SweetAlert2 */
Swal.fire({
  title: "Jovanca Jean Angelynn",
  html: `<p>Omnia bona ex amore,</p>
         <p>All good things come from love.</p>
         <p>Jangan patah hati mulu ya Sirr Nuel</p>`,
  imageUrl: "muka.png.png",
  imageWidth: 360,
  imageHeight: 330,
  confirmButtonText: "Tutup"
}); 

/*=============== Mendefinisikan fungsi showHiddenPassword yang menerima dua parameter: ID dari input password dan ID dari ikon mata. Mengambil elemen input dan ikon berdasarkan ID tersebut*/
const showHiddenPassword = (inputId, iconId) => {
  const input = document.getElementById(inputId),
        iconEye = document.getElementById(iconId)

/* Jika input bertipe password, ubah menjadi teks agar bisa dilihat, dan ganti ikon mata menjadi “terbuka”. Jika sebaliknya, kembalikan ke tipe password dan ganti ikon menjadi “tertutup” */
  iconEye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text'
      iconEye.classList.add('ri-eye-line')
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      input.type = 'password'
      iconEye.classList.remove('ri-eye-line')
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

/* Memanggil fungsi showHiddenPassword dengan ID input "password" dan ikon "input-icon" agar fitur show/hide password aktif */
showHiddenPassword('password', 'input-icon')
