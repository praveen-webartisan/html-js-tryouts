(function($) {

    $(document).on('click', '.navbar-burger', function() {
        $('#' + $(this).attr('data-target')).toggleClass('is-active');
        $(this).toggleClass('is-active');
    });

    $(document).on('click', '.modal-background, .modal-close', function(e) {
        e.preventDefault();

        $(this).closest('.modal').removeClass('is-active');
    });

    $(document).on('click', '.open-modal[data-target]', function(e) {
        e.preventDefault();

        $('.modal' + $(this).attr('data-target')).addClass('is-active');
    });

}) (jQuery);