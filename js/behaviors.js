(function($) {
	Drupal.behaviors.axtel_ventas = {
		attach: function (context, settings) {
			$('.column-left:not(.ajax-processed)').addClass('ajax-processed').once(function () {
				var base = $(this).attr('id');
				var submit = {js:true,selector:'default'};

				var posted = Drupal.settings.basePath+Drupal.settings.dropkick_dynamic+'/nojs';
				Drupal.ajax[base] = Drupal.element_settings(base,this,posted,'dropkick_dynamic',submit);
				$(this).trigger('dropkick_dynamic');
				return false;
			});
			$('.default:not(.ajax-default-processed)',context).addClass('ajax-default-processed').each(function () {
				var base = $(this).attr('id');
				var submit = {js:true};
				var posted = Drupal.settings.basePath+Drupal.settings.dropkick_dynamic+'/nojs';
				Drupal.ajax[base] = Drupal.element_settings(base,this,posted,'trigger_event',submit);

				$(this).click(function(){
					var valor = $(this).val();
					
					var data = {js:true,second_select:'1',value:valor,selector:'default_2'};
					Drupal.ajax[base].options.data = data;

					$(this).trigger('trigger_event');
					return false;
				});
			});

		}
	};
	Drupal.element_settings = function (id,th,path,event_name,submit) {
		var element_setting = {};
		element_setting.url = path;
		element_setting.event = event_name;
		element_setting.submit = submit;

		var base = id;
		return new Drupal.ajax(base, th, element_setting);
	};
	$.fn.consolelog = function(msg) {
		console.log(msg);
	};

})(jQuery);