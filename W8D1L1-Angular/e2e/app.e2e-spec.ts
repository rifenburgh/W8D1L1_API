import { W8D1L1AngularPage } from './app.po';

describe('w8-d1-l1-angular App', () => {
  let page: W8D1L1AngularPage;

  beforeEach(() => {
    page = new W8D1L1AngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
