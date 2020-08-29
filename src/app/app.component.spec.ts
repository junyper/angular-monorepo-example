import { screen } from '@testing-library/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const { render, snapshot } = OtusTestUtils;

describe('AppComponent', () => {
  it(`should render the heading text`, async () => {
    await render(AppComponent, { imports: [ AppModule ] });
    const heading = await screen.findByText('Hello World');
    expect(heading).toBeInTheDocument();
    await snapshot();
  });
  it(`should render the projected content`, async () => {
    const project = 'I am an example';
    await render({
      template: `<app-root>${project}</app-root>`,
      imports: [ AppModule ]
    });
    const content = await screen.findByText(project);
    expect(content).toBeInTheDocument();
  });
});
