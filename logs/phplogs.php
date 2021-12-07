	<?php
	echo 'start ';
	$log_path = 'logs/phplogs.txt';
	if (file_exists($log_path)) {
		echo "good_open ";
	} else {
		echo "error_open ";
	}
	$user_ip = getenv('REMOTE_ADDR');
	$user_browser = getenv('HTTP_USER_AGENT');
	$current_time = date('y-m-d H:i:s');

	$log_string = "$user_ip $user_browser $current_time\r\n";
	//echo $log_string;

	$file = fopen($log_path, "a");
	if (!$file) {
		echo " error_open ";
	} else {
		echo " good_open ";
		fwrite($file, $log_string, strlen($log_string));
	}
	fclose($file);
	echo ' finish';
	?>
	