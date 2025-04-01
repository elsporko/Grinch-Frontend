import { render } from '@testing-library/react';

import Communications from './Communications';

describe('Communications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Communications />);
    expect(baseElement).toBeTruthy();
  });
});
