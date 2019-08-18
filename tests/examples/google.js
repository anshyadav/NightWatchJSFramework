module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.RNmpXc')
      .pause(500000)
      .end();
  }
};