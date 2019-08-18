module.exports = {

    tags : ['smoketests','validateHomePage'],
    'Open HomePage and click on Headers' : function(browser) {
       browser
            .maximizeWindow()
            .url('https://www.artsyjewels.com/')
            .waitForElementVisible('body',1000)
            .assert.title('Best Online Jewelry Store | Affordable Jewelry Brand – Artsyjewels')
            .waitForElementVisible('#menu-item-1553437916545 > a', 1000, function () {
                browser.moveToElement('#menu-item-1553437916545 > a',1,0, function() {
                    browser.waitForElementVisible('#menu-item-1553437916545 > ul > li:nth-child(1) > a', 500, function () {
                        browser.click('#menu-item-1553437916545 > ul > li:nth-child(1) > a');}, "Click share icon. ");
                });
                }, "Locate Top Level Menu")
            .end();
    }
};