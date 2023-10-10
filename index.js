const mahasiswa = [
    {
        nama: "newt",
        alamat:"jalan sesat",
        usia :"19",
        semester: "4"
    },
    {
        nama: "thomas",
        alamat:"jalan sesat",
        usia :"19",
        semester: "7"
        },
]
function getDetaildata() {
    mahasiswa.map(function(result,i){
        console.table(result)
    })
    // console.log(`data yang anda cari adalah ${mahasiswa}`)
}

