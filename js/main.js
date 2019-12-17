
$(function() {
		var target_block = $('.counter'); // Ищем блок
		var blockStatus = true;
		$(window).scroll(function() {
			var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
			if(scrollEvent && blockStatus) {

				blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.

        $('.number').each(function() {
        $(this).prop('Counter',0).animate({
          Counter:$(this).text()
        }, {
          duration:5000,
          easing: 'swing',
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        })})}})});
