$(function() {
    
    /**
     * Contact form handling
     */
    $('.contact-form-trigger').popover({
        html: true,
        title: function() {
            return '<strong>The Quick Message Launcher&trade;</strong>';
        },
        content: function() {
            return $('#contact-form-container').html();
        }
    });
    
    $(document).on('click', '#contact-form-cancel', function(){
        $('.contact-form-trigger').popover('hide');
    });
    
    $(document).on('submit', '#contact-form', function () {
        if (!$("#contact-form textarea[name=message]").val()) return false;
        
        var form = $("#contact-form");
        var url = form.attr("action");
        var data = form.serialize();

        $.post(url, data, function(response, status){
            form.each(function(){ this.reset(); });
            $('#contact-form-submit').attr('class', 'btn btn-success');
            $('#contact-form-submit').val('Thanks!');
            $('#contact-form-cancel').hide();
            setTimeout(function(){
                $('.contact-form-trigger').popover('hide');
            }, 1000);
        }, 'json');
        
        return false;
    });
    
    /**
     * Dynamic navbar
     */
    $('#navbar').scrollspy();
    
    $('.navlink').click(function(){
        var target = $(this).attr('href');
        $.scrollTo($(target), {
            duration: 500
        });
    });
    
    /**
     * Return to top
     */
    $('.tophop').click(function(){
        $.scrollTo(0,0, {
            duration: 200
        });
    });
});
