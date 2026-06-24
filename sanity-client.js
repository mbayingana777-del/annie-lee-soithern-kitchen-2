// Sanity client — fetches live content from Sanity API
const SANITY_PROJECT_ID = 'odg1g8c1';
const SANITY_DATASET = 'production';
const SANITY_TOKEN = 'vck_0PZxFC0vmx3AcHaO3PIZjS7uM0jjtWt6x93RrNMudMfFPhjQDB0cN5Fu';
const SANITY_API_VERSION = '2024-01-01';

async function sanityFetch(query) {
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${SANITY_TOKEN}` }
  });
  const data = await res.json();
  return data.result;
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
