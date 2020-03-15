// buat fungsi berisi property
function Angkot(driver, rute, penumpang, cash) {
    this.driver = driver;
    this.rute = rute;
    this.penumpang = penumpang;
    this.cash = cash;

    // jika penumpang baru naik angkot , maka value dari property penumpang akan bertambah
    // kita buat objek dan property baru yang berisi function baru di dalam fungsi angkot
    this.penumpangNaik = function (namaPenumpang) {
        // menambahkan value penumpang kedalam array penumpang
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun = function (namaPenumpang, tambahCash) {

        if (this.penumpang.length == 0) {
            alert('kosong angkotna woy');
            return false;
        }
    }

}
// buat objek baru berisi value (argumen untuk mengisi property)
var erwin = new Angkot('erwin', ['Jakarta', 'balikpapan'], [], 0);