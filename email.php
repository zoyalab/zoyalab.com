<?php

/**
 * The Quick Message Launcher Handler - "Quick and Dirty" Edition Pro v0.9 (beta)
 */

$vars = sanitize($_POST);
$to = 'website-enquiry@zoyalab.adl.pl';	// Weird, I know, need to sort it out at some point
$subject = 'zoyalab.com website enquiry';
$message = sprintf("Name: %s\nContact: %s\nMessage: %s\n", $vars['name'], $vars['contact'], $vars['message']);
$headers = "From: {$to}\r\n";

mail($to, $subject, $message);

function sanitize(array $input)
{
    $output = array();
    foreach ($input as $key => $value) {
        $output[$key] = filter_var($value, FILTER_SANITIZE_STRING);
    }
    return $output;
}

exit(json_encode(array('response' => 'ok')));
