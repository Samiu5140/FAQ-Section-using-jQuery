$(document).ready(function(){
    $('.question').click(function(){
        var answer = $(this).next('.answer');

        // Slide up any open answers except the one clicked
        $('.answer').not(answer).slideUp();

        // Toggle (slide down/up) the clicked one
        answer.slideToggle();
    });
});
