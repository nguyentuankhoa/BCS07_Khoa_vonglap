//bài tập 1: tìm số nguyên dương nhỏ nhất sao cho: 1+2+...>10000
function timSoNguyenDuongNhoNhat () {
    //lay du lieu nguoi dùng
    var nhapSoBatKi = document.getElementById("nhapSo1").value * 1;
    // console.log(nhapSoBatKi);
    // bước xử lí:
    var ketQua = 0;
    while (nhapSoBatKi <10000) {
        nhapSoBatKi += 1 ;
        ketQua ++;

    }
    document.getElementById("ketQua1").innerHTML = ketQua;
}

function 


// bài tập3 : Nhập vào n. Tính giai thừa 1*2*...n
document.getElementById('btnTinhGiaiThua').onclick = function () {
  // input: number
  var nhapSo = Number(document.getElementById('nhapSo3').value);
  // output: giaThua = 1;
  var giaiThua = 1;

  var giaTri = 1;

while(giaTri <= nhapSo) {
    //bước xử lí
    giaiThua *= giaTri;
    giaTri ++;

}
document.getElementById('ketQua3').innerHTML = giaiThua;

}


