// ─────────────────────────────────────────────
// ANNIE LEE'S SHARED CONNECTION SYSTEM
// ─────────────────────────────────────────────

const supabaseUrl = 'https://eqvnrulpudibuchsdsqi.supabase.co';

const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxdm5ydWxwdWRpYnVjaHNkc3FpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTc4MTgsImV4cCI6MjA5NTczMzgxOH0.-ChERjuPH6wkiIu8lT_D3kq-Fn857hUaf8k76vAE8xo';

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseKey
);

console.log('Lead Capture Connected');

// ─────────────────────────────────────────────
// SAVE LEAD TO SUPABASE
// ─────────────────────────────────────────────

async function saveLeadToSupabase(leadData) {

  const payload = {
    name: leadData.name || '',
    phone: leadData.phone || '',
    email: leadData.email || '',
    event_date: leadData.event_date || '',
    message: leadData.message || '',
    source: leadData.source || 'Website'
  };

  const { data, error } = await supabaseClient
    .from('food_truck_bookings')
    .insert([payload]);

  if (error) {
    console.error('SUPABASE ERROR:', JSON.stringify(error, null, 2));
    alert('Error saving request.');
    return false;
  }

  console.log('Lead saved:', data);

  return true;
}

// ─────────────────────────────────────────────
// GENERIC FORM HANDLER
// ─────────────────────────────────────────────

async function handleLeadSubmit(event) {

  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  const leadData = {
    name: formData.get('name') || '',
    phone: formData.get('phone') || '',
    email: formData.get('email') || '',
    event_date: formData.get('event_date') || '',
    message:
  formData.get('message') ||
  formData.get('details') ||
  formData.get('notes') ||
  '',
    source: formData.get('source') || 'Website'
  };

  const success = await saveLeadToSupabase(leadData);

  if (success) {
    alert('Request submitted successfully!');
    form.reset();
  }
}

// ─────────────────────────────────────────────
// CATERING FORM HANDLER
// ─────────────────────────────────────────────

async function handleCateringSubmitGHL(event) {

  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);

  const leadData = {
    name: formData.get('name') || '',
    phone: formData.get('phone') || '',
    email: formData.get('email') || '',
    event_date: formData.get('event_date') || '',
    message: formData.get('message') || '',
    source: 'Catering Page'
  };

  const success = await saveLeadToSupabase(leadData);

  if (success) {
    alert('Catering request submitted!');
    form.reset();
  }
}
