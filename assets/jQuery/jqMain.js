jQuery(function ($) {

    $('button[type="submit"]').on("click", function (e) {
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!testEmail.test($('input[type="email"]').val()) || $('input[type="email"]').val() === '') {
            e.preventDefault();
            $('label').css('display', 'inline-block');
            $('input[type="email"]').css({ 'outline-color': "hsl(354, 100%, 66%)", borderColor: "hsl(354, 100%, 66%)" });
        } else {
            $('input[type="email"], label[for="email-notify"]').removeAttr('style');
        }
    });

});