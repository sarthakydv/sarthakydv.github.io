$(document).ready(function () {
  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
      if (o[this.name]) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };
  var form = $('form#test-form'),
    url =
      'https://script.google.com/macros/s/AKfycbxog5weVlkcQI4naWnQxj5exnZ6QYWkBF60wvkT7HcwOw6JVJOu/exec';
  form.submit(function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
      url: url,
      method: 'GET',
      dataType: 'json',
      data: form.serializeObject(),
    });
    $('.thanks')
      .html('Thank you for getting in touch!')
      .css('font-size', '4rem');
    $('.form-control').remove();
    $('#submit').remove();
  });
});
