import { browser, element, by } from 'protractor';

export class W8D1L1AngularPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
