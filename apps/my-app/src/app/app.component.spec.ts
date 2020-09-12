import { AppModule } from './app.module';

import { axe, render, screenshot } from '@my/test-utils';

describe('AppComponent', () => {
  it(`should render`, async () => {
    const { findByText } = await render({
      template: `<app-root></app-root>`,
      imports: [ AppModule ]
    });
    const content = await findByText('hello world');
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render({
      template: `<app-root></app-root>`,
      imports: [ AppModule ]
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
