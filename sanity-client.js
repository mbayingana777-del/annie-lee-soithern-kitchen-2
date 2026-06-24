// Sanity client — fetches live content from Sanity API
const SANITY_PROJECT_ID = 'odg1g8c1';
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2024-01-01';

// Token should be set as an environment variable or fetched from a secure backend
// For now, we'll use a public read-only query without authentication
async function sanityFetch(query) {
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error('Sanity API error:', res.status);
      return [];
    }
    const data = await res.json();
    return data.result || [];
  } catch (err) {
    console.error('Sanity fetch error:', err);
    return [];
  }
}

// Fetch site settings
async function getSiteSettings() {
  return sanityFetch(`*[_type == "siteSettings"][0]`);
}

// Fetch menu items grouped by category
async function getMenuItems() {
  return sanityFetch(`*[_type == "menuItem"] | order(category asc)`);
}

// Fetch catering prices
async function getCateringPrices() {
  return sanityFetch(`*[_type == "cateringPrice"]`);
}

window.sanity = { getSiteSettings, getMenuItems, getCateringPrices };
