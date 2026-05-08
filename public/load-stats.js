// Load dynamic stats
async function loadStats() {
  try {
    const response = await fetch('/data/stats.json');
    const stats = await response.json();

    // Update hero badges
    const badges = document.querySelectorAll('.feature-badge');
    if (badges[0]) {
      badges[0].textContent = `${stats.guides} Guides`;
    }

    // Update stats section
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers[0]) {
      statNumbers[0].textContent = stats.guides;
    }
  } catch (error) {
    console.log('Stats file not found (expected during development)');
  }
}

// Load stats when page loads
document.addEventListener('DOMContentLoaded', loadStats);
