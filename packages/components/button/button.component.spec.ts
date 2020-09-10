import { axe, render, screenshot } from '@my/test-utils';

import { ButtonModule } from './button.module';

describe('ButtonComponent', () => {
  it(`should render the projected content`, async () => {
    const project = 'I am an example';
    const { findByText } = await render({
      template: `<button my-button>${project}</button>`,
      imports: [ ButtonModule ]
    });
    const content = await findByText(project);
    expect(content).toBeInTheDocument();
    await screenshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render({
      template: `<button my-button>hello</button>`,
      imports: [ ButtonModule ]
    });
    expect(await axe(container)).toHaveNoViolations()
  });
});
