# Apple App Site Association (AASA) Documentation

## Why this file is required

For iOS to recognize and handle URL redirections as **Universal Links** (opening them directly in the app instead of Safari), it needs to download and verify the association between the domain (`textiletrade.in`) and the iOS application bundle.

## Universal Link Requirements

1. **Accessibility**:
   - The AASA file must be hosted at `https://textiletrade.in/.well-known/apple-app-site-association` (or `/apple-app-site-association` at the root).
   - It **MUST** be served over HTTPS with a valid SSL/TLS certificate.
   
2. **No Redirects**:
   - The HTTP request to retrieve this file must return a `200 OK` response directly.
   - iOS will **NOT** follow HTTP redirects (e.g., `301` or `302` redirects) to fetch the AASA file. If any redirect is active on the server path, Universal Links will fail completely.

3. **Content-Type**:
   - The file must be served with the `Content-Type: application/json` or `application/pkcs7-mime` header.
   - It must not have a file extension in the URL request.

4. **Size**:
   - The file size should not exceed 128 KB.
