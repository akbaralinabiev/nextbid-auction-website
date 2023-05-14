$(function () {
    $("#datepicker").datepicker();
});

$(function () {
    $('#auction-dates').datepicker({
        autoclose: true,
        format: "yyyy-mm-dd",
        clearBtn: true,
        multidate: false,
        todayHighlight: true,
        startDate: new Date(),
    });
});