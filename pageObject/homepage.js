const email = 'email';
const password = 'pass';
const logInButton = 'u_0_a';

const field_email = element(by.id(email));
const field_password = element(by.id(password));
const field_button_logIn = element(by.id(logInButton));

var LogInPage = function(){

	this.send_Keys = function( para_1, para_2 ){
		field_email.sendKeys(para_1);
		field_password.sendKeys(para_2);	
	};

	this.login = function(){
		field_button_logIn.click();
	};
	this.getResult = function(){
		return '3';
	}
}

module.exports = new LogInPage();
