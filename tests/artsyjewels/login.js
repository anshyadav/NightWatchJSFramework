module.exports = {
    tags : ['loginold','smoketests'],
    'User should be able to login into the site' : function(browser){
        browser
            .windowMaximize()
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body',1000)
            .click('#jas-header > div.header__mid.pr.pl__15.pr__15.light > div > div.jas-col-md-2.jas-col-sm-3.jas-col-xs-3 > div > div.jas-my-account.hidden-xs.ts__05.pr > a')
            .setValue('#usernamelogin','abc@gmail.com')
            .setValue('#passwordlogin',"abcd1234")
            .click('#customer_login_side > p:nth-child(6) > input')
            .end();
    }
}