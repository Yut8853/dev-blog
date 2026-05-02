import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  test('ブログのタイトルが表示される', () => {
    render(<HomePage />);

    expect(
      screen.getByRole('heading', {
        name: '表現を探す、学ぶ、作る。',
      }),
    ).toBeInTheDocument();
  });

  test('ブログの説明文が表示される', () => {
    render(<HomePage />);

    expect(
      screen.getByText(/フロントエンド表現のアイデアと実装を共有する/),
    ).toBeInTheDocument();
  });
});