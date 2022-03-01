import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  clickSignUpModalSignUpButton(){
    return element(by.id('register')).click();
  }
}
