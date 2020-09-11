import { axe, render, screenshot } from '@my/test-utils';

import {
  HelloWorldComponent,
  HelloWorldModule
} from '@my/components/hello-world';

describe('HelloWorldComponent', () => {
  it(`should render the content`, async () => {
    const { findByText } = await render(HelloWorldComponent, {
      imports: [ HelloWorldModule ],
      excludeComponentDeclaration: true
    });
    const content = await findByText('hello world');
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render(HelloWorldComponent, {
      imports: [ HelloWorldModule ],
      excludeComponentDeclaration: true
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
