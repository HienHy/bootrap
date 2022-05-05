$(document).ready(function(){
    $('.header').height($(window).height());

})
$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)

})
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}