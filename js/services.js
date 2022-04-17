 /**Servises list*/
 $(document).ready(function () {
   const toggles = document.querySelectorAll('.faq-toggle');
   toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
         toggle.parentNode.classList.toggle('active');
      });
   });
  
 });

 /**Header animation*/
$(document).ready(function () {
   let faq_element = $(".faq-title");
   $(window).scroll(function () {
     var scroll = $(window).scrollTop() + $(window).height();
     var offset = faq_element.offset().top;
 
     if (scroll > offset) {
      faq_element.removeClass("hidden_faq-title");
      faq_element.addClass("animate_faq-title");
     }
   });
 });
 

 /**Отправка формы*/
$(document).ready(function() {
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});