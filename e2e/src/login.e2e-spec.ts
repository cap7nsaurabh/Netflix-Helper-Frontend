import {browser, by, element, logging, protractor} from 'protractor';
import { AppPage } from './app.po';

describe('Protractor Demo  App', function() {

    let page: AppPage;

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
        page = new AppPage();
      });
    
      it('Should contain a title', function() {
        browser.get('/');
        browser.getTitle().then(value => {
          expect(value).toBe('Netflix Helper')
        });
      });

    //   it('Should click on the login button', function() {
    //     browser.get('/');
    //     element(by.id('loginbtn')).click();
    //   });

      it('Should enter username & password', function() {
        browser.getCurrentUrl().then(value => {
          expect(value).toContain('/login-user');
        });
    
        element(by.id('emailId')).sendKeys('jack@gmail.com');
        element(by.id('password')).sendKeys('qwerty');
        element(by.id('loginbtn')).click();
      });

      it('Should enter click login button', function() {

        browser.getCurrentUrl().then(value => {
          browser.get(value);
        });
      });

      it('Should redirect', async function() {
        browser.getCurrentUrl().then(value => {
          console.log(value);
        });
      });

      afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });

})