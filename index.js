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



function cauHai () {

    var soX = document.getElementById("nhapSoX").vale *1;
    var soN = document.getElementById("nhapSoN").value * 1;

    // các bước xử lý :
    var tinhMu = 1
    var tinhTong = 0;

    for(var i=1;i <= n;i++) {
        tinhMu = tinhMu * n; 
        tinhTong += tinhMu;
    }
    console.log(tinhMu);
    console.log(tinhTong);
    document.getElementById("ketQuaHai").innerHTML = tinhTong;
}





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


// bài tập 4 :Viết chương trình khi click vào button tạo ra 10 thẻ div. div chẵn bg đỏ và lẻ bg xanh 
function bai4() {

    var bienDiv = document.querySelectorAll("#ketQua4 .div");

    for(var i = 0;i <= 10;i++){
        if(i % 2 == 0){
            bienDiv[i].style.background = "red";
        } else{
            bienDiv[i].style.background = "blue";
        }
    }
}

// bài tập 5: bài tập Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input
function bai5 () {
    var giaTriBai5 = document.getElementById("nhapSo5").value *1;
    var input = ""; 
    for (var i = 0; i <=giaTriBai5; i++) {
        input = input + i + "<br>"
    }
    console.log(input)
    document.getElementById("ketQua5").innerHTML = input ; 
}


