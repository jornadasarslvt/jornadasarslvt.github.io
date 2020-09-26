$(function () {


    /* =========================================
        COUNTDOWN 1
     ========================================= */
    $('#clock').countdown('2020/11/20').on('update.countdown', function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 text-white font-weight-bold">%D</span> Dia%!d'
        + '<span class="h1 text-white font-weight-bold">%H</span> Hr'
        + '<span class="h1 text-white font-weight-bold">%M</span> Min'
        + '<span class="h1 text-white font-weight-bold">%S</span> Seg'));
    });

});
