$('.check_list').change(function() {
  if ($('.check_list:checked').length > 1) {
    $('#btn1').prop('disabled', false);
  } else {
    $('#btn1').prop('disabled', true);
  }
});