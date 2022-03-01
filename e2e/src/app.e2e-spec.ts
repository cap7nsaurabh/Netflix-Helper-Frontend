import { AppPage } from './app.po';
import {browser,element,by} from 'protractor';
describe('FrontEnd App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display Title', () => {
  //   page.navigateTo();
  //   expect(browser.getText()).toEqual('Netflix Helper');
  // });

  it('should navigate to login page when application is launched', () => {
    expect(browser.getCurrentUrl()).toContain('/login-user');
  });

  it('should navigate to sign up page when Sign Up button is clicked', () => {
    browser.element(by.id('signupbtn')).click();
    expect(browser.getCurrentUrl()).toContain('/create-user');
  });

  it('should be able to register new user', () => {
    browser.element(by.id('firstName')).sendKeys('Robert');
    browser.element(by.id('lastName')).sendKeys('Russell');
    browser.element(by.id('Mobile')).sendKeys('9876543232');
    browser.element(by.id('emailId')).sendKeys('robert@gmail.com');
    browser.element(by.id('password')).sendKeys('qwerty');
    page.clickSignUpModalSignUpButton();
    expect(browser.getCurrentUrl()).toContain('/login-user');
  });

  it('should be able to login using existing username and password and navigate to dashboard', () => {
    browser.element(by.id('userId')).sendKeys('robert@gmail.com');
    browser.element(by.id('password')).sendKeys('qwerty');
    browser.element(by.id('logIn')).click();
    expect(browser.getCurrentUrl()).toContain('/user-dashboard');
  });

  it('Should navigate to the Favourites page', () => {
    browser.element(by.xpath('//body/div[1]/app-favourite[1]/nav[1]/div[1]/ul[1]/li[2]')).click();
    expect(browser.getCurrentUrl()).toContain('/user-fav');
   
  });

  it('should be able to logout user', () => {
    browser.element(by.id('logout')).click();
    expect(browser.getCurrentUrl()).toContain('/login-user');
  });

});