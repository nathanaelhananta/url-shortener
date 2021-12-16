const monk = require('monk')

// Connection URL
var url = "MONGODB=mongodb+srv://nathanael:claramylove@cluster0.eqj2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
try {
    if (url == 'MONGODB=mongodb+srv://nathanael:claramylove@cluster0.eqj2w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority') throw console.log('Cek konfigurasi database, var url belum diisi');
} catch (e) {
    return;
}
var db = monk(url);

db.then(() => {
        console.log('Connected correctly to server')
    })
    .catch((e) => {
        console.log("Gagal connect ke database, \ncek configurasi database apakah Connection URL sudah benar")
    })

module.exports = db
