let belanja = parseInt(prompt("masukka nilai"));
if (belanja >= 0 && belanja < 100000) {
  document.write(`anda berbelanja ${belanja},<br>`);
  document.write(`anda tidak dapat diskon <br>`);
  document.write(`anda harus membayar sebesar ${belanja},<br>`);
} else if (belanja >= 100000 && belanja < 200000) {
  diskon = (belanja * 10) / 100;
  total = belanja - diskon;
  document.write(`anda berbelanja ${belanja},<br>`);
  document.write(`anda mendapat diskon 10% <br>`);
  document.write(`anda harus membayar sebesar ${total},<br>`);
} else if (belanja >= 200000) {
  diskon = (belanja * 25) / 100;
  total = belanja - diskon;
  document.write(`anda berbelanja ${belanja},<br>`);
  document.write(`anda mendapat diskon 25% <br>`);
  document.write(`anda harus membayar sebesar ${total},<br>`);
} else {
  document.write("nilai yang dimasukkan salah <br>");
}
document.write("anda telah keluar");
