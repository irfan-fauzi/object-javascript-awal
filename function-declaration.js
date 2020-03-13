// object dengan teknik function declaration
function createObjectStaff(name, position, nip, salary) {
  //buat object kosong untuk kemudian diisi
  let staff = {};
  //isi parameter yang akan digunakan
  staff.name = name;
  staff.position = position;
  staff.nip = nip;
  staff.salary = salary;
  // panggil kembali objectnya
  return staff;
}
// isi value (argumen) kedalam parameter object nya
// misal contoh ada data staff baru
let irfan = createObjectStaff('irfan fauzi', 'engineer', 98762736, '12.000.000');