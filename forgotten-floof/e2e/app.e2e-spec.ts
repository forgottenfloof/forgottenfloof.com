import { ForgottenFloofPage } from './app.po';

describe('forgotten-floof App', () => {
  let page: ForgottenFloofPage;

  beforeEach(() => {
    page = new ForgottenFloofPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
