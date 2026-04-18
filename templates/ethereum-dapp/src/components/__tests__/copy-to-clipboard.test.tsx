import '@testing-library/jest-dom/vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import CopyToClipboard from '../copy-to-clipboard';

describe('<CopyToClipboard />', () => {
  it('should render', async () => {
    render(<CopyToClipboard copyText="Love" />);

    const button = screen.getByRole('button', { name: 'copy-to-clipboard' });

    expect(button).toBeInTheDocument();

    await userEvent.hover(button);

    expect(
      (
        await screen.findAllByText('Copy', {
          selector: 'div[data-state="delayed-open"] *',
        })
      ).length,
    ).toBeGreaterThan(0);
  });

  it('should be copied item', async () => {
    const writeText = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockResolvedValue();

    render(<CopyToClipboard copyText="Love" />);

    const button = screen.getByRole('button', { name: 'copy-to-clipboard' });
    fireEvent.click(button);

    await waitFor(() => {
      expect(writeText).toHaveBeenCalledWith('Love');
    });

    await userEvent.hover(button);

    expect(
      (
        await screen.findAllByText('Copied!', {
          selector: 'div[data-state="delayed-open"] *',
        })
      ).length,
    ).toBeGreaterThan(0);
  });
});
