# Deep Link Setup Guide & Manual Steps

To complete the deep-linking integration, please perform the following manual setup steps:

---

## 1. Hosting the Association Files

Ensure the following association files are served correctly from your web server:

### A. Apple App Site Association (AASA)
* **Path**: `https://textiletrade.in/.well-known/apple-app-site-association`
* **Configuration**:
  - Must be served directly (HTTP `200 OK`) without any redirects (no `301`/`302` redirects).
  - Must be served with `Content-Type: application/json` or `application/pkcs7-mime`.
  - Must contain the correct App ID (Format: `TEAM_ID.BUNDLE_ID`). Update the placeholder `"YOUR_APPLE_TEAM_ID.com.textiletrade.in"` in `public/.well-known/apple-app-site-association` with your real Apple Developer Team ID.

### B. Android Asset Links
* **Path**: `https://textiletrade.in/.well-known/assetlinks.json`
* **Configuration**:
  - Must be served with `Content-Type: application/json`.
  - Replace the placeholder `"REPLACE_WITH_SHA256_FINGERPRINT"` with the actual SHA-256 fingerprint of your app's release signing certificate.

#### Generating the SHA-256 Fingerprint:
To get the release fingerprint, run the following command using Java `keytool` on your release keystore file:
```bash
keytool -list -v -keystore /path/to/your/release.keystore -alias your_alias_name
```
Alternatively, if your app is distributed via the Google Play Store and you use Play App Signing, you can copy the SHA-256 fingerprint directly from the Google Play Console under **Setup > App integrity**.

---

## 2. iOS Configuration (Xcode / Capacitor iOS)

To associate your iOS application with the `textiletrade.in` domain:

1. Open your project in **Xcode**.
2. Select your project in the sidebar, choose the main target, and click the **Signing & Capabilities** tab.
3. Click `+ Capability` and add **Associated Domains**.
4. In the Domains list, add:
   ```text
   applinks:textiletrade.in
   ```
5. Ensure the entitlements file is committed to your repository.
6. Verify your App Store ID is configured correctly:
   - Replace the placeholder `idXXXXXXXXX` in `textile-trade/app/group/[token]/page.tsx` with your actual App Store App ID.

---

## 3. Android Configuration (AndroidManifest.xml / Capacitor Android)

To associate your Android application with the `textiletrade.in` domain:

1. Open `android/app/src/main/AndroidManifest.xml`.
2. Locate the main `<activity>` element (usually `.MainActivity`).
3. Add the following `<intent-filter>` inside the activity tag:
   ```xml
   <intent-filter android:autoVerify="true">
       <action android:name="android.intent.action.VIEW" />
       <category android:name="android.intent.category.DEFAULT" />
       <category android:name="android.intent.category.BROWSABLE" />
       <data android:scheme="http" />
       <data android:scheme="https" />
       <data android:host="textiletrade.in" />
       <data android:pathPrefix="/group/" />
   </intent-filter>
   ```
4. Verify your Play Store Package Name is correct:
   - Ensure the package name in `textile-trade/app/group/[token]/page.tsx` (`com.textiletrade.in`) matches your Android package name.
