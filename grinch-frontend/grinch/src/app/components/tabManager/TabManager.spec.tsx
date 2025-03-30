import { render, screen, fireEvent  } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tabs from './TabManager';


describe('Tabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tabs>
        <div data-label="Tab 1">Content 1</div>
        <div data-label="Tab 2">Content 2</div>
      </Tabs>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should display the correct content when a tab is clicked', () => {
    render(
      <Tabs>
        <div data-label="Tab 1">Content 1</div>
        <div data-label="Tab 2">Content 2</div>
      </Tabs>
    );

    // Check that the first tab is active by default
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.queryByText('Content 2')).not.toBeInTheDocument();

    // Simulate clicking the second tab
    fireEvent.click(screen.getByText('Tab 2'));

    // Check that the second tab's content is displayed
    expect(screen.getByText('Content 2')).toBeInTheDocument();
    expect(screen.queryByText('Content 1')).not.toBeInTheDocument();
  });
});