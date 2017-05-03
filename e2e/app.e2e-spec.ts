import { Tehran.IoPage } from './app.po';

describe('tehran.io App', () => {
  let page: Tehran.IoPage;

  beforeEach(() => {
    page = new Tehran.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
