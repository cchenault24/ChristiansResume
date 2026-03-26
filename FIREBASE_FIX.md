# Fix Firebase API Key Configuration

## Problem
Firebase Installations API returns 400 Bad Request: "Request contains an invalid argument"

## Root Cause
The Firebase API key needs to be configured to accept requests from your domain(s).

## Solution

### Step 1: Go to Firebase Console
https://console.firebase.google.com/project/christiansresume-42c08/settings/general/web

### Step 2: Configure API Key Restrictions

1. **Go to Google Cloud Console - API Credentials**:
   ```
   https://console.cloud.google.com/apis/credentials?project=christiansresume-42c08
   ```

2. **Find your Browser key (API key)**:
   - Look for the key that starts with `AIzaSy...`
   - Click on it to edit

3. **Set Application Restrictions**:
   - Select "HTTP referrers (websites)"
   - Click "Add an item"
   - Add these referrers:
     ```
     https://www.christianchenault.com/*
     https://christianchenault.com/*
     https://*.vercel.app/*
     http://localhost:*/*
     ```

4. **Set API Restrictions**:
   - Select "Restrict key"
   - Enable these APIs:
     - ✅ Cloud Firestore API
     - ✅ Firebase Installations API
     - ✅ Cloud Storage for Firebase API
     - ✅ Firebase Realtime Database API (if used)
     - ✅ Google Analytics API (for Firebase Analytics)

5. **Save changes**

### Step 3: Wait 5 minutes for changes to propagate

API key restrictions can take a few minutes to take effect.

### Step 4: Clear cache and test

```bash
# Clear browser cache or test in incognito mode
open https://www.christianchenault.com
```

---

## Alternative: Remove Analytics (Temporary Fix)

If you want to get the site working immediately while you configure the API key, you can temporarily disable Firebase Analytics:

### Edit: src/lib/firebase.ts

Remove Analytics initialization and only keep Firestore.

---

## Verification

After applying the fix, you should see:
- ✅ No more Firebase Installations errors
- ✅ Analytics working (if enabled)
- ✅ Firestore data loading correctly
