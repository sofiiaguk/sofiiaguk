
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
          duration:1900,
          easing: 'swing',
          step:function(now){
            $(this).text(Math.ceil(now));
          }
        })})}})});

				epam.onmouseover = function(){
				   this.src = 'img/epam_anim.png';
				}
				epam.onmouseout = function(){
				   this.src = 'img/epam_st.png';}

					bps.onmouseover = function(){
 					   this.src = 'img/bps_anim.png';
 					}
 					bps.onmouseout = function(){
 					   this.src = 'img/bps_st.png';
					 }

					borovoi.onmouseover = function(){
 						   this.src = 'img/borovoi_anim.png';
 						}
 				  borovoi.onmouseout = function(){
 						   this.src = 'img/borovoi_st.png';}

					itechart.onmouseover = function(){
 							this.src = 'img/itechart_anim.png';
 					}
 					itechart.onmouseout = function(){
 							this.src = 'img/itechart_st.png';}

					itransition.onmouseover = function(){
		 					this.src = 'img/itransition_anim.png';
		 			}
		 			itransition.onmouseout = function(){
		 					this.src = 'img/itransition_st.png';}

					ey.onmouseover = function(){
							this.src = 'img/ey_anim.png';
				  }
				  ey.onmouseout = function(){
							this.src = 'img/ey_st.png';}

					iba.onmouseover = function(){
							this.src = 'img/iba_anim.png';
					}
					iba.onmouseout = function(){
							 this.src = 'img/iba_st.png';}

					bel.onmouseover = function(){
								this.src = 'img/bel_anim.png';
				 }
					bel.onmouseout = function(){
								this.src = 'img/bel_st.png';}

					bus.onmouseover = function(){
								this.src = 'img/business_anim.png';
					}
					bus.onmouseout = function(){
								this.src = 'img/business_st.png';}
