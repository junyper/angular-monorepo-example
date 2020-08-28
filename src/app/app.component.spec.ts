import { screen } from '@testing-library/angular';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  it(`should render the heading text`, async () => {
    await render(AppComponent, { imports: [ AppModule ] });
    expect(screen.getByText('Hello World'));
  });
  it(`should render the ng content`, async () => {
    const content = 'I am an example';
    await render({
      imports: [ AppModule ],
      template: `<app-root>${content}</app-root>`
    });
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
