import { axe, render, screenshot } from 'test-utils';

import { HelloComponent } from './hello.component';
import { HelloModule } from './hello.module';

describe('HelloComponent', () => {
  it(`should render`, async () => {
    const { findByText } = await render(HelloComponent, {
      imports: [ HelloModule ]
    });
    const content = await findByText('hello world');
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render(HelloComponent, {
      imports: [ HelloModule ]
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
