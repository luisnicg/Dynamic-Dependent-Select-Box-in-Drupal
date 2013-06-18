<?php
function dropkick_dynamic_ajax_func($var){
	$is_ajax = $var === 'ajax';

	if ($is_ajax) {
		$commands = array();
		if(isset($_REQUEST['second_select']) && !empty($_REQUEST['second_select'])){

			$new_values[1] = array('11'=>'Subtitle 1.1','12'=>'Subtitle 1.2','13'=>'Subtitle 1.3');
			$new_values[2] = array('21'=>'Subtitle 2.1','22'=>'Subtitle 2.2','23'=>'Subtitle 2.3','24'=>'Subtitle 2.4');

			$commands[] = ajax_command_html('.second-select','');
			$dropdown = theme('dropdown',array('valores' => $new_values[$_REQUEST['value']],'valor_defecto' => 'Select a subtitle','ide'=>'subtitles','class' =>$_REQUEST['selector'] , 'name' => 'dropdown_2'));
			$commands[] = ajax_command_append('.second-select',$dropdown);
			$commands[] = ajax_command_create_dropkick('.'.$_REQUEST['selector']);

		}else{
			$values = array('1'=>'Title 1','2'=>'Title 2');
			$dropdown = theme('dropdown',array('valores' => $values,'valor_defecto' => 'Select a title','ide'=>'titles','class' =>$_REQUEST['selector'] , 'name' => 'dropdown_1'));
			$commands[] = ajax_command_html('#titles',$dropdown);
			$commands[] = ajax_command_create_dropkick('.'.$_REQUEST['selector']);
		}
		return array('#type' => 'ajax','#commands' => $commands);
	}
}