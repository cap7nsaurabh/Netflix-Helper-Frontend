import {browser, by, element, logging, protractor} from 'protractor';
import { AppPage } from './app.po';

describe('Protractor Demo App', function() {

    let page: AppPage;

    beforeEach(async () => {
        browser.waitForAngularEnabled(false);
        page = new AppPage();
    
      });

      it('Should have a title', function() {
        browser.get('/');
        browser.getTitle().then(value => {
          expect(value).toBe('Netflix Helper')
        });
      });

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

      it('Should click Favourite button', function() {
        var elem = element(by.id('addtofav'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(elem), 5000).then(
          (ele2m) => {
            elem.click();
          }
        );
      });

      it('Should click Watch Later button', function() {
        var elem = element(by.id('addtowl'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(elem), 5000).then(
          (ele2m) => {
            elem.click();
          }
        );
      });

      it('Should click Favlist button', function() {
        var elem = element(by.id('favlist'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.elementToBeClickable(elem), 5000).then(
          (ele2m) => {
            elem.click();
          }
        );
      });

      it('Should remove from Favlist', function() {
        var elem = element(by.id('rmfromfav'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(elem), 5000).then(
          (ele2m) => {
            elem.click();
          }
        );
      });

      it('Should click on log out ', function() {
        var elem = element(by.id('logout'));
        var until = protractor.ExpectedConditions;
        browser.wait(until.visibilityOf(elem), 5000).then(
          (ele2m) => {
            elem.click();
          }
        );
      });

      afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
          level: logging.Level.SEVERE,
        } as logging.Entry));
      });

})