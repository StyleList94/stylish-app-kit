import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';

import MainPage from './page';

describe('Main Page', () => {
  it('should be rendered', () => {
    render(<MainPage />);

    expect(screen.getByText(/Stylish/)).toBeInTheDocument();
    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument();

    expect(
      screen.getByText(/To get started, edit the page.tsx file./),
    ).toBeInTheDocument();

    expect(screen.getByText(/Make your NEXT app stylish/)).toBeInTheDocument();

    const buttonDeploy = screen.getByRole('link', { name: /Deploy now/i });
    expect(buttonDeploy).toBeInTheDocument();
    expect(buttonDeploy).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new'),
    );

    const buttonDoc = screen.getByRole('link', { name: /Documentation/i });
    expect(buttonDoc).toBeInTheDocument();
    expect(buttonDoc).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs'),
    );
  });
});
