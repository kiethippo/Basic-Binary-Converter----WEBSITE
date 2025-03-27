const decimalInput = document.getElementById("decimal");
const binaryInput = document.getElementById("binary");
const hexInput = document.getElementById("hex");

const submitBtn = document.getElementById("submitbtn");
const resetBtn = document.getElementById("resetbtn");

//Hàm Submit tính toán
submitBtn.addEventListener("click", function () {
    const decimalValue = parseInt(decimalInput.value);

    if (!isNaN(decimalValue)) {
        let binarynumb = decimalValue.toString(2); // Nhị phân
        let hexnumb = decimalValue.toString(16).toUpperCase(); // Hex, in hoa

        binaryInput.value = binarynumb;
        hexInput.value = hexnumb;
    } else {
        binaryInput.value = "";
        hexInput.value = "";
        alert("Vui lòng nhập một số thập phân hợp lệ!");
    }
});

//Hàm Reset
function reset() {
    decimalInput.value = "";
    binaryInput.value = "";
    hexInput.value = "";
}

resetBtn.addEventListener("click", function(){
reset();

});
