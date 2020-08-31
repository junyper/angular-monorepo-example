import { AppComponent } from './app.component';
import { AppModule } from './app.module';

const {
  axe,
  screen,
  render,
  snapshot
} = TestUtils;

describe('AppComponent', () => {
  it(`should render the heading text`, async () => {
    await render(
      AppComponent, { imports: [ AppModule ] }
    );
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
    await snapshot();
  });
  it(`should be accessible`, async () => {
    const { container } = await render(
      AppComponent, { imports: [ AppModule ] }
    );
    expect(await axe(container)).toHaveNoViolations()
  });
});
