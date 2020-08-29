import { render as _render } from './render';
import { snapshot as _snapshot } from './snapshot';

declare global {
  var render: typeof _render;
  var snapshot: typeof _snapshot;
}

global.render = _render;
global.snapshot = _snapshot;

export {}
