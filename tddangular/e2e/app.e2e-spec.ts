import { TddangularPage } from './app.po';

describe('tddangular App', () => {
  let page: TddangularPage;

  beforeEach(() => {
    page = new TddangularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
