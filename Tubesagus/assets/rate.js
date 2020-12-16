let rating = document.querySelector("#rating");

rating.addEventListener("click", function(event){
    const target = event.target;

    if (target.classList.contains('suka')) {
        alert ('Terimakasih sudah memberikan feedback');
    } else if (target.classList.contains('tidak')) {
        alert ('Terimakasih, kedepannya web ini akan lebih baik');
    } else {
        alert ('Click pada tulisan Ya atau Tidak');
    }
});