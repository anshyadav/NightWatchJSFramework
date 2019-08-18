module.exports = {
    '@tags': ['login'],
    'Login into Site': function(browser){
        const page = browser.page.utils();

        page
            .navigate()
            .login('ansh@SpeechGrammarList.com','abcd1234')
            .end();
    }
};