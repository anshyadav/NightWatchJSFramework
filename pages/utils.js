module.exports = {
    url: 'https://www.artsyjewels.com',
    elements: {
        loginIcon: '#jas-header > div.header__mid.pr.pl__15.pr__15.light > div > div.jas-col-md-2.jas-col-sm-3.jas-col-xs-3 > div > div.jas-my-account.hidden-xs.ts__05.pr > a',
        username: '#usernamelogin',
        userPassword: '#passwordlogin',
        loginButton: '#customer_login_side > p:nth-child(6) > input',
    },
    commands:[{
        login(email, password){
            return this
            .click('@loginIcon')
            .setValue('@username',email)
            .setValue('@userPassword',password)
            .click('@loginButton')
        },
    }]
};

/*module.exports = function(browser){

    this.openBrowserr = function(){
        browser
            .windowMaximize()
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body',1000)
        console.log('Environment is up and Site is loaded.');
        return browser
    };

    this.loginButton = function(){
        browser
            .click('#jas-header > div.header__mid.pr.pl__15.pr__15.light > div > div.jas-col-md-2.jas-col-sm-3.jas-col-xs-3 > div > div.jas-my-account.hidden-xs.ts__05.pr > a')
    };

    this.adminLogin = function(){
        browser
        .setValue('#usernamelogin','abc@gmail.com')
        .setValue('#passwordlogin',"abcd1234")
        .click('#customer_login_side > p:nth-child(6) > input')
    };

    this.closeBrowser = function(){
        browser
            .pause(3000)
            .end()
        console.log('Destrying the environment');
    };
}*/