import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';

import Admin from './Admin';

describe('Admin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Admin />);
    expect(baseElement).toBeTruthy();
  });
});

