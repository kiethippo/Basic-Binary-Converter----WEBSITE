const decimalInput = document.getElementById("decimal");
const binaryInput = document.getElementById("binary");
const hexInput = document.getElementById("hex");

const submitBtn = document.getElementById("submitbtn");
const resetBtn = document.getElementById("resetbtn");

document.getElementById("submitbtn").addEventListener("click", function () {
    const fromBase = document.querySelectorAll("select")[0].value;
    const toBase = document.querySelectorAll("select")[1].value;
    const inputValue = document.getElementById("input").value.trim();
    const outputField = document.getElementById("Output");
  
    // Kiểm tra đầu vào
    if (inputValue === "") {
      outputField.value = "Vui lòng nhập giá trị!";
      return;
    }
  
    // Chuyển text sang số ở base nguồn
    let decimalValue;
    try {
      switch (fromBase) {
        case "1": // Decimal
          decimalValue = parseInt(inputValue, 10);
          break;
        case "2": // Binary
          decimalValue = parseInt(inputValue, 2);
          break;
        case "3": // Hex
          decimalValue = parseInt(inputValue, 16);
          break;
        case "4": // Octal
          decimalValue = parseInt(inputValue, 8);
          break;
        default:
          outputField.value = "Chọn hệ số hợp lệ!";
          return;
      }
  
      // Nếu không phải số hợp lệ
      if (isNaN(decimalValue)) {
        outputField.value = "Giá trị không hợp lệ!";
        return;
      }
  
      // Chuyển đổi sang base đích
      let result;
      switch (toBase) {
        case "1":
          result = decimalValue.toString(10);
          break;
        case "2":
          result = decimalValue.toString(2);
          break;
        case "3":
          result = decimalValue.toString(16).toUpperCase();
          break;
        case "4":
          result = decimalValue.toString(8);
          break;
        default:
          result = "Chọn hệ số hợp lệ!";
      }
  
      outputField.value = result;
  
    } catch (err) {
      outputField.value = "Lỗi chuyển đổi!";
    }
  });
  
  // Nút reset
  document.getElementById("resetbtn").addEventListener("click", function () {
    document.getElementById("input").value = "";
    document.getElementById("Output").value = "";
  });
  

/*//Hàm Submit tính toán
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
*/
