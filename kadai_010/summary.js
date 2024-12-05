$(function () {
  // 文字色変化
  $('#change-color').on('click', function () {
    $('#target').css('color', 'red');
  });
  // 文字内容変化
  $('#change-text').on('click', function () {
    $('#target').text('Hello!');
  });
  // フェードアウト
  $('#fade-out').on('click', function () {
    $('#target').fadeOut(300, function () {
      alert('消えました！');
    });
  });
  // フェードイン
  $('#fade-in').on('click', function () {
    $('#target').fadeIn(300, function () {
      alert('お出ましです！');
    });
  });
});