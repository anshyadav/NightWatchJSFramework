module.exports = {
    tags : ['searchsite','smoketests'],
    'Search the site for specific item' : function(browser){
        browser
            .maximizeWindow()
            .url('https://www.artsyjewels.com')
            .waitForElementVisible('body',1000)
            .click('#jas-header > div.header__mid.pr.pl__15.pr__15.light > div > div.jas-col-md-2.jas-col-sm-3.jas-col-xs-3 > div > div.sf-open.cb.chp.pr.gecko-search-dropdown.cursor-pointer > i',function(){
                browser.pause(5000)
                browser.setValue('div.wrapper-search-dropdown.tl.search-overlap > form > div > input#q',['silver bracelets',browser.Keys.ENTER])
            })
            .saveScreenshot('./screenshots/testcase2.jpg')
            .end();
    }
}