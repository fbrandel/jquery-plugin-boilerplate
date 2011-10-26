(function($){
    
    var pluginName = "NamespacePlugin";
    
    var defaults = {
        name: "Anonymous"
    };

    var Plugin = function(elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.settings = $.extend({}, defaults, options);
        
        this.init();
    };
    
    /*
     * Methods
     */
    Plugin.prototype._getSalutation = function() {
        return "Hello " + this.settings.name;
    };
    
    Plugin.prototype.init = function() {
        this.sayHello();
    };
    
    Plugin.prototype.sayHello = function() {
        alert(this._getSalutation());
    };
    
    Plugin.prototype.highlight = function(colorName) {
        colorName = colorName || "red";
        this.$elem.css("border", "1px solid " + colorName);
    };

    $.fn[pluginName] = function(options) {
        return this.each(function() {
            var $elem = $(this);
            
            if (!$elem.data(pluginName)) {
                $elem.data(pluginName, new Plugin(this, options));
            }
        });
    };
    
})(jQuery);