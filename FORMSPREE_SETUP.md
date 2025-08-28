# 📧 Formspree Integration Setup

## How to activate real form submissions

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form project

### Step 2: Get Your Form Endpoint
1. In your Formspree dashboard, create a new form
2. Copy the form endpoint URL (looks like: `https://formspree.io/f/YOUR_FORM_ID`)

### Step 3: Update Configuration
1. Open `src/utils/formConfig.ts`
2. Replace `YOUR_FORM_ID` with your actual Formspree form ID:
   ```typescript
   CONTACT_FORM_ENDPOINT: 'https://formspree.io/f/YOUR_ACTUAL_FORM_ID',
   ```

### Step 4: Activate in ContactForm
1. Open `src/components/ui/ContactForm.tsx`
2. Uncomment the Formspree integration lines (lines 34-43)
3. Remove or comment out the demo version (lines 45-48)
4. Add the import at the top of the file:
   ```typescript
   import { submitToFormspree } from '../../utils/formConfig';
   ```

### Step 5: Test Your Forms
1. Submit a test form on your website
2. Check your email for the submission
3. Verify the form works properly

## Form Features Included:
- ✅ Form validation with Zod
- ✅ Error handling
- ✅ Success messages
- ✅ Spam protection (via Formspree)
- ✅ Email notifications
- ✅ Form data storage in Formspree dashboard

## Alternative Email Services:
If you prefer other services, you can modify `formConfig.ts` to work with:
- Netlify Forms
- EmailJS
- Custom backend API
- SendGrid
- Mailgun

## Formspree Free Plan Limits:
- 50 submissions per month
- Basic spam filtering
- Email notifications

For higher volume, consider upgrading to a paid plan.