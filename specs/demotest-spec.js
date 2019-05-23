const loginPage = require('../pageObject/homepage');

describe('Protractor Demo App', function() {  
  // beforeAll(function() {
  //   browser.get('http://juliemr.github.io/protractor-demo/');
  // });

  beforeEach(async function(){
    browser.waitForAngularEnabled(false);
  	await browser.get('https://www.facebook.com/');
  });

  it('should logIn', function() {    
    // element(by.model('first')).sendKeys(1);
    // element(by.model('second')).sendKeys(2);
    // element(by.id('gobutton')).click();
    // This is wrong, test case will fail!
    // expect(element(by.binding('latest')).getText()).toEqual('5');
    loginPage.send_Keys("hola_user", "hola_password");
    loginPage.login();
    expect(loginPage.getResult()).toEqual('3');
  });


  afterAll(function() {
    browser.quit();
  });
});