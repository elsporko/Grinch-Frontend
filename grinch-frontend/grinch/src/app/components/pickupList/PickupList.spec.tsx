import { render } from '@testing-library/react';

import PickupList from './PickupList';

describe('PickupList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PickupList />);
    expect(baseElement).toBeTruthy();
  });
});
