import { KeepassMaterialPage } from './app.po';

describe('keepass-material App', () => {
  let page: KeepassMaterialPage;

  beforeEach(() => {
    page = new KeepassMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
