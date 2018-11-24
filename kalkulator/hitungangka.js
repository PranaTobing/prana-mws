// Menghitung angka
$(document).ready(function () {
  $("#textNmbr1").keyup(function(){
    var text1 = $(this).val();
    var text2 = ($("#textNmbr2").val() == "") ? 0 : $("#textNmbr2").val();
    var reg = /^\d+$/;
    if (!reg.test(text1)) {
      alert("Please Input the number");
      $("#textNmbr1").val("0");
    }
    var operator = $("#operator").val();
    switch (operator) {
      case "+":
        var result = Number(text1) + Number(text2);
      break;
      case "-":
        var result = Number(text1) - Number(text2);
      break;
      case "*":
        var result = Number(text1) * Number(text2);
      break;
      case "/":
        var result = Number(text1) / Number(text2);
      break;
      default:
        var result = Number(text1) + Number(text2);
      break;
    }
    $("#textNmbr3").val(result);
  });
  $("#textNmbr2").keyup(function(){
    var text1 = ($("#textNmbr1").val() == "") ? 0 : $("#textNmbr1").val();
    var text2 = $(this).val();
    var reg = /^\d+$/;
    if (!reg.test(text2)) {
      alert("Please Input the number");
      $("#textNmbr2").val("0");
    }
    var operator = $("#operator").val();
    switch (operator) {
      case "+":
        var result = Number(text1) + Number(text2);
      break;
      case "-":
        var result = Number(text1) - Number(text2);
      break;
      case "*":
        var result = Number(text1) * Number(text2);
      break;
      case "/":
        var result = Number(text1) / Number(text2);
      break;
      default:
        var result = Number(text1) + Number(text2);
      break;
    }
    $("#textNmbr3").val(result);
  });
  $("#operator").change(function(){
    var text1 = ($("#textNmbr1").val() == "") ? 0 : $("#textNmbr1").val();
    var text2 = ($("#textNmbr2").val() == "") ? 0 : $("#textNmbr2").val();
    var operator = $("#operator").val();
    switch (operator) {
      case "+":
        var result = Number(text1) + Number(text2);
      break;
      case "-":
        var result = Number(text1) - Number(text2);
      break;
      case "*":
        var result = Number(text1) * Number(text2);
      break;
      case "/":
        var result = Number(text1) / Number(text2);
      break;
      default:
        var result = Number(text1) + Number(text2);
      break;
    }
    $("#textNmbr3").val(result);
  });
});