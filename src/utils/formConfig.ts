// Form configuration for Formspree integration
export const FORMSPREE_CONFIG = {
  // Replace with your actual Formspree endpoint
  // Get this from https://formspree.io after creating an account
  CONTACT_FORM_ENDPOINT: 'https://formspree.io/f/YOUR_FORM_ID',
  
  // Form submission settings
  SETTINGS: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  },
  
  // Success/Error messages
  MESSAGES: {
    SUCCESS: 'Thank you for your inquiry! We\'ll respond within 2 business hours.',
    ERROR: 'Sorry, there was an error sending your message. Please call us directly at (555) 123-4567.',
    SUBMITTING: 'Sending your message...'
  }
};

export const submitToFormspree = async (formData: any, endpoint: string = FORMSPREE_CONFIG.CONTACT_FORM_ENDPOINT) => {
  try {
    const response = await fetch(endpoint, {
      ...FORMSPREE_CONFIG.SETTINGS,
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      return { success: true, message: FORMSPREE_CONFIG.MESSAGES.SUCCESS };
    } else {
      throw new Error('Form submission failed');
    }
  } catch (error) {
    console.error('Form submission error:', error);
    return { success: false, message: FORMSPREE_CONFIG.MESSAGES.ERROR };
  }
};