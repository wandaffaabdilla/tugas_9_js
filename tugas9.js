function tugas9() {
  var motor = {
    type: "sport",
    cc: 250,
    cylinder: 4,
    merek: "kawasaki ZX-25R",
    warna: "hijau",
    pemilik: "kyrie irving",
  };
  for (var y in motor) {
    console.log(motor[y]);
  }
}
tugas9();
