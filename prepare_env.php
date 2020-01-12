<?php

$newValues = [
	'ENV_API_URL' => $_SERVER['VUE_APP_API_URL'] ?? 'none'
];

/**
 * @param string        $fileContent
 * @param array|mixed[] $envValues
 * @return string
 */
function replaceAllIntoFileContent(string $fileContent, array $envValues): string {
	foreach ($envValues as $name => $value) {
		$pattern = \sprintf('/%s\:\".*?\"/s', $name);
		$replacement = \sprintf('%s$1:"%s"', $name, $value);

		$fileContent = \preg_replace($pattern, $replacement, $fileContent);
	}

	return $fileContent;
}

/**
 * @param array|mixed[] $newValues
 */
function process(array $newValues): void {
	foreach (\glob('/usr/share/nginx/html/js/app.*.js') as $filename) {
		echo "Processing $filename ... \n";

		$content = \file_get_contents($filename);
		$content = \replaceAllIntoFileContent($content, $newValues);
		\file_put_contents($filename, $content);
	}
}

\process($newValues);
