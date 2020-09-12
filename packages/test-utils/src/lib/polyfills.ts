Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
      getPropertyValue: () => {
        return '';
      },
    };
  },
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});

const mockStorage = () => {
  let storage = {};
  return {
    getItem: (key) => (key in storage ? storage[key] : null),
    setItem: (key, value) => (storage[key] = value || ''),
    removeItem: (key) => delete storage[key],
    clear: () => (storage = {}),
  };
};

Object.defineProperty(window, 'localStorage', { value: mockStorage() });
Object.defineProperty(window, 'sessionStorage', { value: mockStorage() });
