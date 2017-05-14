import { ThongthuishopAdminPage } from './app.po';

describe('thongthuishop-admin App', () => {
  let page: ThongthuishopAdminPage;

  beforeEach(() => {
    page = new ThongthuishopAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
