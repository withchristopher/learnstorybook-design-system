import React from 'react';

import { GlobalStyle  } from '../src/shared/global';

// Global decorator to apply the styles to all stories
export default decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};