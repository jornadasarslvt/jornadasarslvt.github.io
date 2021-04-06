$(function () {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2021/07/01 09:00').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 text-white font-weight-bold">%D</span> Dia%!D'
        + '<span class="h1 text-white font-weight-bold">%H</span> Hr'
        + '<span class="h1 text-white font-weight-bold">%M</span> Min'
        + '<span class="h1 text-white font-weight-bold">%S</span> Seg'));
    });

});
