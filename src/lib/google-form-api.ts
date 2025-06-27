
export interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScOJE_hC1rdDHMHM7GxA1y3_XWiqBRcLfMzHRoY784DS5bdqQ/formResponse';

const GOOGLE_FORM_ENTRIES = {
  name: 'entry.906541387',
  email: 'entry.2042276850',
  phone: 'entry.459525914',
  company: 'entry.868494292',
};

export const submitToGoogleForm = async (data: WaitlistFormData): Promise<void> => {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_ENTRIES.name, data.name);
  formData.append(GOOGLE_FORM_ENTRIES.email, data.email);
  formData.append(GOOGLE_FORM_ENTRIES.phone, data.phone);
  if (data.company) {
    formData.append(GOOGLE_FORM_ENTRIES.company, data.company);
  }

  try {
    await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
  } catch (error) {
    console.error('Error submitting to Google Form:', error);
    throw new Error('Failed to submit to Google Form.');
  }
};
