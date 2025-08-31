# Google Maps Integration Setup Guide

## 🗺️ Overview

This guide will help you set up Google Maps integration for the Hammer & Hew website. The integration includes:

- **Service Area Map** in the Contact section
- **Interactive Features** with business information
- **Custom Styling** to match brand colors
- **Mobile Responsive** design

## 💰 Cost Overview

- **FREE** for most small businesses (Google provides $200/month credit)
- **Maps Embed API**: $7 per 1,000 map loads (after free credit)
- **Maps JavaScript API**: $7 per 1,000 map loads (after free credit)
- Expected monthly cost for typical business website: **$0-$10**

## 🚀 Setup Instructions

### Step 1: Google Cloud Console Setup

1. **Go to Google Cloud Console**: https://console.cloud.google.com
2. **Sign in** with your Google account
3. **Create a new project**:
   - Click project dropdown → "New Project"
   - Project name: `Hammer-Hew-Website`
   - Click "CREATE"

### Step 2: Enable APIs

1. **Navigate to APIs & Services** → **Library**
2. **Enable these APIs**:
   ```
   ✅ Maps Embed API
   ✅ Maps JavaScript API  
   ✅ Places API (optional - for reviews/ratings)
   ```
3. **For each API**: Search → Click → "ENABLE"

### Step 3: Create API Key

1. **Go to APIs & Services** → **Credentials**
2. **Click "+ CREATE CREDENTIALS"** → **API key**
3. **Copy the generated key** (save it securely!)
4. **Rename the key**: Click edit → Name: `Hammer-Hew-Maps-Key`

### Step 4: Secure Your API Key

**⚠️ CRITICAL: Set up restrictions to prevent unauthorized use!**

1. **In API key settings**:
   ```
   🌐 Application restrictions:
   ☑️ HTTP referrers (web sites)
   
   📝 Website restrictions (add these domains):
   https://hammerandhew.com/*
   https://*.hammerandhew.com/*
   https://*.netlify.app/*
   http://localhost:*/*
   ```

2. **API restrictions**:
   ```
   ☑️ Restrict key
   Select APIs:
   - Maps Embed API
   - Maps JavaScript API
   ```

### Step 5: Set Up Billing

1. **Go to Billing** in the Cloud Console
2. **Add a payment method** (required even for free usage)
3. **Set up budget alerts**:
   - Budget: $50
   - Alert at: 50%, 90%, 100%
   - Email: your business email

### Step 6: Configure Your Website

1. **Copy your API key** from Google Cloud Console
2. **Create `.env` file** in your project root:
   ```bash
   cp .env.example .env
   ```
3. **Add your API key** to `.env`:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyBxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
4. **Restart your development server**:
   ```bash
   npm run dev
   ```

## 🎯 Features Included

### Basic Map Component (`GoogleMap.tsx`)
- **Embedded Google Map** with Philadelphia location
- **Service area radius** indicator (25 miles)
- **Business contact** quick actions
- **Fallback display** when API key not configured
- **Responsive design** for all devices

### Interactive Map Component (`InteractiveMap.tsx`)
- **Custom branded styling** with Hammer & Hew colors
- **Interactive business marker** with popup info
- **Service area circle** (25-mile radius visualization)
- **Click-to-call** functionality
- **Loading states** and error handling

## 📍 Business Information

The maps are configured with:
- **Location**: Philadelphia, PA (39.9526, -75.1652)
- **Service Radius**: 25 miles
- **Contact**: (917) 250-2222
- **Email**: hammerandhewllc@gmail.com

## 🔧 Customization

### Change Business Location
Edit coordinates in both map components:
```typescript
const businessLocation = {
  lat: 39.9526,    // Your latitude
  lng: -75.1652,   // Your longitude
  name: "Your Business Name",
  address: "Your Address"
};
```

### Modify Service Area
Change radius in `InteractiveMap.tsx`:
```typescript
const serviceArea = new window.google.maps.Circle({
  radius: 40233.6, // 25 miles in meters (change as needed)
  // ... other options
});
```

### Custom Map Styling
The interactive map includes custom styling. Modify the `styles` array in `InteractiveMap.tsx` to change appearance.

## 🧪 Testing

### Development Testing
1. **Start dev server**: `npm run dev`
2. **Navigate to contact section**: http://localhost:5173/#contact
3. **Check map display**:
   - ✅ Map loads properly
   - ✅ Marker appears at correct location
   - ✅ Service area circle visible
   - ✅ Info popup works on marker click

### Production Testing
1. **Build project**: `npm run build`
2. **Deploy to staging/production**
3. **Verify API key restrictions** work correctly
4. **Test on mobile devices**

## 📊 Monitoring Usage

1. **Google Cloud Console** → **APIs & Services** → **Dashboard**
2. **Monitor**:
   - Daily requests
   - Cost estimates
   - Error rates
   - Quota usage

## 🆘 Troubleshooting

### Map Not Loading
- ✅ Check API key in `.env` file
- ✅ Verify APIs are enabled in Google Cloud Console
- ✅ Check browser console for error messages
- ✅ Confirm domain restrictions allow your site

### "This page can't load Google Maps correctly"
- ✅ API key restrictions too strict
- ✅ Billing not set up in Google Cloud
- ✅ API quotas exceeded

### Map Shows But No Custom Features
- ✅ JavaScript errors in browser console
- ✅ Network connectivity issues
- ✅ API key missing Places API permissions

## 💡 Optimization Tips

1. **Lazy Loading**: Maps load only when needed
2. **Caching**: Google automatically caches map tiles
3. **Compression**: Use WebP images for custom markers
4. **Mobile**: Touch-friendly controls and sizing

## 🔐 Security Best Practices

- ✅ **Never commit API keys** to version control
- ✅ **Use domain restrictions** on all API keys
- ✅ **Monitor usage** regularly for suspicious activity
- ✅ **Set up billing alerts** to prevent surprise costs
- ✅ **Rotate API keys** periodically

## 📞 Support

For issues with this integration:
1. **Check browser console** for error messages
2. **Review Google Maps documentation**: https://developers.google.com/maps
3. **Google Cloud Support**: https://cloud.google.com/support
4. **Project documentation**: See `CLAUDE.md` for development details

---

**Status**: Ready for production use once API key is configured
**Last Updated**: 2025-08-31
**Next Review**: When Google Maps pricing changes