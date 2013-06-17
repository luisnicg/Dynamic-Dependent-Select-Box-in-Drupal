(function($) {
    Drupal.ajax.prototype.commands.create_dropkick = function(ajax, response, status) {
        var $select = $(response.selector);
        $select.dropkick({
            change: function (value, label) {
                $(this).click();
            }
        });
    }
})(jQuery);