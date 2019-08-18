module.exports = {
    'src_folders': ['tests'],
    'output_folder': 'reports/XMLReports',
    'custom_commands_path': '',
    'custom_assertions_path': '',
    'page_objects_path': 'pages',
    'test_workers': {'enabled': true,'workers': 3},
    'webdriver': {'start_process': true,'server_path': "lib/drivers/chromedriver.exe",'port': 9515},
    'test_settings': {
        'default': {'screenshots': {'enabled': true,'on_failure': true,'on_error': true,'path': "screenshots/"},
            'desiredCapabilities': {'browserName': 'chrome',"javascriptEnabled": true,"chromeOptions": {"args": ["--headless","disable-web-security","ignore-certificate-errors","--test-type"],}}
        }
    }
};