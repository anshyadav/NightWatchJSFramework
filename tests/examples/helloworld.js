module.exports = {

tags : ['helloworld'],
'HelloWorld - We are goign to click on buton' :  function(browser) {
    browser
        .url('https://clickclickclick.click')
        .waitForElementVisible('body',1000)
        .click('body > main > div > div:nth-child(1) > a')
        .pause(10000)
        .end();
    console.log("Button clicked!!")
}
};