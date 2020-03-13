// constructor object, function khusus untuk object
// penamaan umum untuk contructor biasanya menggunakan Huruf BESAR di awal
function Staff(name, position, nip, salary) {

    this.name = name;
    this.position = position;
    this.nip = nip;
    this.salary = salary;

}
// cara panggilnya menggunakan new
let irfan = new Staff('irfan fauzi', 'engineer', 8727364, '12.000.000');