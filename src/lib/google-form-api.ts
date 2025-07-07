
export interface WaitlistFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  profession?: string;
}

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScOJE_hC1rdDHMHM7GxA1y3_XWiqBRcLfMzHRoY784DS5bdqQ/formResponse';
const GOOGLE_FORM_QUESTION_URL = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdGSjIGw-y4pD4M80UYoRyId2XK7QzUQgewMcCzH4TC8GnWkA/formResponse';

const GOOGLE_FORM_ENTRIES = {
  name: 'entry.906541387',
  email: 'entry.2042276850',
  phone: 'entry.459525914',
  company: 'entry.868494292',
  profession: 'entry.1233217235',
  question: 'entry.1815729306', // New entry ID for question
  questionEmail: 'entry.603371342', // New entry ID for email in question form
};

export const submitToGoogleForm = async (data: WaitlistFormData): Promise<void> => {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_ENTRIES.name, data.name);
  formData.append(GOOGLE_FORM_ENTRIES.email, data.email);
  formData.append(GOOGLE_FORM_ENTRIES.phone, data.phone);
  if (data.company) {
    formData.append(GOOGLE_FORM_ENTRIES.company, data.company);
  }
  if (data.profession) {
    formData.append(GOOGLE_FORM_ENTRIES.profession, data.profession);
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

export const submitQuestionToGoogleForm = async (question: string, email: string): Promise<void> => {
  const formData = new FormData();
  formData.append(GOOGLE_FORM_ENTRIES.question, String(question));
  formData.append(GOOGLE_FORM_ENTRIES.questionEmail, String(email));

  // Log FormData content for debugging
  for (let pair of formData.entries()) {
    console.log(pair[0]+ ': ' + pair[1]); 
  }

  try {
    await fetch(GOOGLE_FORM_QUESTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    });
  } catch (error) {
    console.error('Error submitting question to Google Form:', error);
    throw new Error('Failed to submit question to Google Form.');
  }
};
