export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

if (typeof global.process === 'undefined') {
  const { worker } = require('../src/__mocks__/handlers');
  worker.start();
}
