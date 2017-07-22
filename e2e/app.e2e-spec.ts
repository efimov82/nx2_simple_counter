import { CounterNx2Page } from './app.po';

describe('counter-nx2 App', () => {
  let page: CounterNx2Page;

  beforeEach(() => {
    page = new CounterNx2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
