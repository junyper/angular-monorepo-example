import { axe, render, screenshot } from '@my/test-utils';

import { HelloWorldModule } from '@my/components/hello-world';

describe('HelloWorldComponent', () => {
  it(`should render the content`, async () => {
    const { findByText } = await render({
      template: `<my-hello-world></my-hello-world>`,
      imports: [ HelloWorldModule ]
    });
    const content = await findByText('hello world');
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render({
      template: `<my-hello-world></my-hello-world>`,
      imports: [ HelloWorldModule ]
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
