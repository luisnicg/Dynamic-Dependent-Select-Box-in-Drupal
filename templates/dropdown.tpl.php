<?php
	foreach ($valores as $key => $value) {
	    $opciones .= '<option  value="'.$key.'">'.$value.'</option>';
	}
?>

<select name="<?= $name;?>" id="<?= $ide; ?>" class="<?= $class;?>">
	<option selected="selected" value=""><?= $valor_defecto; ?></option>
	<?php
		print $opciones;
	?>
</select>