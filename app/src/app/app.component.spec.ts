import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { axe, render, screenshot } from 'test-utils';

describe('AppComponent', () => {
  it(`should render`, async () => {
    const { findByText } = await render(AppComponent, {
      imports: [ AppModule ]
    });
    const content = await findByText('hello world');
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render(AppComponent, {
      imports: [ AppModule ]
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
