/**
 * @jest-environment jsdom
 */
'use strict';

let loadStats;

beforeEach(() => {
  // Fresh module so each test gets an isolated require
  jest.resetModules();
  jest.spyOn(console, 'log').mockImplementation(() => {});

  // jsdom does not provide fetch — supply a mock on the global before the module loads
  global.fetch = jest.fn();

  // Reset DOM
  document.body.innerHTML = '';

  ({ loadStats } = require('../public/load-stats'));
});

afterEach(() => {
  jest.restoreAllMocks();
});

// ── Fetch target ─────────────────────────────────────────────────────────────

it('fetches from /data/stats.json', async () => {
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 1 }) });

  await loadStats();

  expect(global.fetch).toHaveBeenCalledWith('/data/stats.json');
});

// ── DOM updates on success ────────────────────────────────────────────────────

it('updates the first .feature-badge with the guides count', async () => {
  document.body.innerHTML = '<span class="feature-badge"></span>';
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 12 }) });

  await loadStats();

  expect(document.querySelector('.feature-badge').textContent).toBe('12 Guides');
});

it('updates the first .stat-number with the guides count', async () => {
  document.body.innerHTML = '<span class="stat-number"></span>';
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 7 }) });

  await loadStats();

  expect(document.querySelector('.stat-number').textContent).toBe('7');
});

it('updates both .feature-badge and .stat-number when both elements exist', async () => {
  document.body.innerHTML = `
    <span class="feature-badge"></span>
    <span class="stat-number"></span>
  `;
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 5 }) });

  await loadStats();

  expect(document.querySelector('.feature-badge').textContent).toBe('5 Guides');
  expect(document.querySelector('.stat-number').textContent).toBe('5');
});

it('only updates the first badge when multiple .feature-badge elements exist', async () => {
  document.body.innerHTML = `
    <span class="feature-badge"></span>
    <span class="feature-badge"></span>
  `;
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 4 }) });

  await loadStats();

  const badges = document.querySelectorAll('.feature-badge');
  expect(badges[0].textContent).toBe('4 Guides');
  expect(badges[1].textContent).toBe('');
});

it('only updates the first .stat-number when multiple exist', async () => {
  document.body.innerHTML = `
    <span class="stat-number"></span>
    <span class="stat-number"></span>
  `;
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 3 }) });

  await loadStats();

  const nums = document.querySelectorAll('.stat-number');
  expect(nums[0].textContent).toBe('3');
  expect(nums[1].textContent).toBe('');
});

// ── Missing DOM elements ──────────────────────────────────────────────────────

it('does not throw when .feature-badge is absent', async () => {
  document.body.innerHTML = '<span class="stat-number"></span>';
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 3 }) });

  await expect(loadStats()).resolves.not.toThrow();
});

it('does not throw when .stat-number is absent', async () => {
  document.body.innerHTML = '<span class="feature-badge"></span>';
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 3 }) });

  await expect(loadStats()).resolves.not.toThrow();
});

it('does not throw when the DOM is completely empty', async () => {
  global.fetch.mockResolvedValue({ json: () => Promise.resolve({ guides: 3 }) });

  await expect(loadStats()).resolves.not.toThrow();
});

// ── Error handling ────────────────────────────────────────────────────────────

it('resolves without throwing when fetch rejects (network error)', async () => {
  global.fetch.mockRejectedValue(new Error('Network error'));

  await expect(loadStats()).resolves.not.toThrow();
});

it('resolves without throwing when the JSON parse fails', async () => {
  global.fetch.mockResolvedValue({
    json: () => Promise.reject(new Error('Invalid JSON'))
  });

  await expect(loadStats()).resolves.not.toThrow();
});

it('does not update the DOM when fetch fails', async () => {
  document.body.innerHTML = `
    <span class="feature-badge">Original</span>
    <span class="stat-number">0</span>
  `;
  global.fetch.mockRejectedValue(new Error('Network error'));

  await loadStats();

  expect(document.querySelector('.feature-badge').textContent).toBe('Original');
  expect(document.querySelector('.stat-number').textContent).toBe('0');
});
