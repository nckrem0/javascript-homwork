// console.log ("Hello kui");
// console.log ("DM Kui Nhe") ;
// alert ("DM KUI") 

/**
 * Biến
 * = là phép gán
 * bên phải dấu = sẽ được thực thi trước, sau khi thực thi song sẽ đi tìm biến
 * - string ( là kiểu chuỗi )
 * - number ( là số )
 * - boolean: true/false 
 * - undefined: tạo ra biến mà k gán giá trị
 * - null : tạo ra biến nhưng rỗng
 */

var username = "Kui" ;
console.log(username)
var numberStudent = 30 ;
console.log (numberStudent);

// khai bao bien
var tong;

// gan gia tri cho bien 
tong = 100;
console.log(tong);


var isLogin = true;
console.log(isLogin);
var address = null;

/**
 * các loại toán tử
 * (+) cộng số/ nối chuỗi
 * + - * / %
 * (++) tăng 1 đơn vị
 * (--) giảm 1 đơn vị
 */
var number1 = 10;
var number2 = "5" ;


var cong =number1 + number2 ;
console.log (cong);

var hieu = number1-number2;
var ketQuaHieu = "Hieu la: " + hieu;
console.log(ketQuaHieu);

var nhan =number1 * number2;
var ketQuaNhan ="Nhan la: " +nhan;
console.log(ketQuaNhan)

var chia =number1 / number2;
var ketQuaChia = "Chia la: " +chia;
console.log(ketQuaChia);


var chiaLayDu = number1 % number2;
var ketQuaDu = "Du la: "+chiaLayDu;
console.log(ketQuaDu);

var count = 0;
// var newCount = count + 1;
// var newCount = ++count ; //cộng trước gán sau
var newCount = count++; //gán trước cộng sau
console.log (newCount);

// += -= *= /= %=
var sum = 0;
// sum = sum + 1;
sum += 1;
console.log(sum);


// Hang so
// var pi = 3.14;
const PI = 3.14 ;

var edge1;
var edge2;
var edge3;
edge1 =3;
edge2 =4;
edge3 = Math.sqrt((edge1*edge1) + (edge2*edge2));

var ketQua = "canh huyen la: " + edge3;
console.log (ketQua);
/**
 * Đầu vào :
 * - cạnh 1
 * - cạnh 2
 * Xử Lý :
 * -Tạo 3 biến edge1 edge2 edge3
 * - Gán giá trị cho cạnh edge1 edge2
 * - Căn bậc 2 cho biến edge 3 => Math.sqrt()
 * Đầu ra: thông báo kết quả
 */



/**
 * Tính tổng 3 ký số : n =123 = 1+2+3 => 6
 * Đầu vào
 * - số n: tạo biến n gán số có 3 ký số
 * Xử lý
 * - tách số hàng đơn vị: n%10
 * - tách số hàng chục: Math.floor (n%100/10)
 * - tách số hàng trăm: Math.floor (n/100) 
 * - đơn vị + hàng chục + hàng trăm => tổng 3 ký số
 * Đầu ra : show kết quả
 */
var n= 123
var hangTram = Math.floor(123/100);
var hangChuc = Math.floor(123%100/10);
var hangDonVi = 123%10 ;
var tongKySo = hangTram + hangChuc + hangDonVi ;
console.log ("Tong 3 ky so là:" + tongKySo  );



/**
 * Bt1: Chương trình tính tiền lương nhân viên
 * Đầu vào:
 * - Lương 1 ngày : 100.000 
 * - Số ngày đi làm (n)
 * Xử lý :
 * - Tạo biến của số ngày đi làm (n) 
 * - Áp dụng công thức tính tiền lương : (lương 1 ngày) * (số ngày làm)
 * Đầu ra : Thông báo kết quả
 */

var n;
var luongnhanvien;
var luongmotngay = 100000;
n = 26;
luongnhanvien = luongmotngay*n ;
var tongluong = "tong luong :" + luongnhanvien;
console.log(tongluong)


/**
 * Bt3: Quy đổi tiền
 * Đầu vào :
 * - Giá usd hiện nay : 23.500 VND 
 * - Số tiền mà người dùng nhập vào (n)
 * Xử lý :
 * - Tạo biến số tiền mà người dùng muốn nhập (n)
 * - Áp dụng công thức quy đổi tiền : (giausd)*n
 * Đầu ra : Thông báo kết quả
 */


var giausd = 23500;
var n ;
var quydoitien ;
n = 30;
quydoitien = giausd*n ;
var tongsotien ="tong so tien la :" + quydoitien
console.log(tongsotien)

