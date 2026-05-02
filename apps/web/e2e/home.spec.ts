import { test, expect } from '@playwright/test';

test('トップページが表示される', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', {
      name: '表現を探す、学ぶ、作る。',
    }),
  ).toBeVisible();

  await expect(page.getByText('Creative Dev Blog')).toBeVisible();
});