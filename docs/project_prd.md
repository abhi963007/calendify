# Product Requirements Document (PRD): Automated Scheduling Platform

## 1. Executive Summary
The **Automated Scheduling Platform** is a premium, automated scheduling and payment platform designed for independent consultants and counselors in the Indian market. The platform eliminates the "scheduling back-and-forth" by integrating directly with Google Calendar and requiring upfront payments via Razorpay before a booking is confirmed. 

The architecture is designed for **Zero Fixed Monthly Maintenance**, utilizing serverless technologies to ensure the business remains profitable even with low initial volumes.

---

## 2. Product Objectives
*   **Automation:** Reduce administrative overhead by 90% through automated booking and reminders.
*   **Financial Security:** Ensure 100% upfront payment for all sessions to eliminate "no-shows."
*   **Professionalism:** Provide a sleek, high-performance interface that rivals international platforms like Calendly.
*   **Cost Efficiency:** Maintain a near-zero monthly hosting budget.

---

## 3. User Personas

### A. The Consultant (Admin)
*   **Goal:** Manage availability and collect payments without manual intervention.
*   **Key Needs:** Google Calendar sync, Razorpay integration, and a simple dashboard to view upcoming sessions.

### B. The Client (Booker)
*   **Goal:** Quickly find a time slot and book a session.
*   **Key Needs:** Mobile-friendly UI, UPI/Card payment options, and instant calendar invites.

---

## 4. Functional Requirements

### 4.1 Onboarding & Authentication
*   **Google OAuth 2.0:** Secure login for consultants.
*   **Calendar Permissions:** Request `auth/calendar` scopes to read busy slots and write new events.
*   **Profile Setup:** Custom URL (e.g., `consultantdomain.in/dr-sharma`), bio, and service list.

### 4.2 The Scheduling Engine
*   **Availability Rules:** Set recurring hours (e.g., Mon-Fri, 10 AM - 4 PM).
*   **Buffer Times:** 10-15 minute gaps between sessions.
*   **Minimum Notice:** Prevent bookings within 4 hours of the start time.
*   **Timezone Intelligence:** Automatic detection for both host and client.

### 4.3 Payment Processing (Indian Context)
*   **Razorpay Integration:** Support for UPI, RuPay, Wallets, and Credit/Debit cards.
*   **Payment-Locked Booking:** Slots are only "reserved" for 10 minutes and "confirmed" only after Razorpay sends a success webhook.
*   **GST Compliance:** Automatic generation of GST-ready receipts.

### 4.4 Notifications & Reminders
*   **Email Sync:** Instant confirmation emails via Resend.
*   **Calendar Invites:** ICS files sent to clients; Google Calendar events created for consultants.
*   **SMS Alerts (Optional):** Integration with Twilio or MSG91 for session reminders.

---

## 5. Technical Stack (Zero-Cost Serverless)

| Component | Technology | Monthly Cost (INR) |
| :--- | :--- | :--- |
| **Frontend** | Next.js (hosted on Vercel) | ₹0 (Free Tier) |
| **Database/Auth** | Supabase (PostgreSQL) | ₹0 (Free Tier) |
| **Backend Logic** | Supabase Edge Functions | ₹0 (Free Tier) |
| **Payments** | Razorpay Gateway | 2% + GST (Per transaction) |
| **Email Service** | Resend | ₹0 (3,000 emails/mo) |
| **Domain** | Cloudflare (.com or .in) | ~₹600 - ₹1,100 / year |

---

## 6. Key User Flows

### Flow: Client Booking Session
1.  **Selection:** Client visits `consultantdomain.in/consultant-name` and chooses a service.
2.  **Date/Time:** Client selects a slot (only shows slots where Consultant is "Free" on Google Calendar).
3.  **Details:** Client enters Name, Email, and Phone.
4.  **Payment:** Razorpay checkout opens. Client pays via UPI.
5.  **Confirmation:** Page redirects to "Booking Confirmed."
6.  **Sync:** 
    *   Consultant's Google Calendar updated.
    *   Client receives Email confirmation.
    *   Admin Dashboard logs the transaction.

---

## 7. Hosting & Maintenance Strategy
*   **Region:** All services (Supabase/Vercel) should be set to **AWS Mumbai (ap-south-1)** for the fastest Indian response times.
*   **Environment Secrets:** Use Vercel/Supabase environment variables to store Razorpay Keys and Google Client IDs securely.
*   **Backups:** Supabase provides automated weekly backups on the free tier; manual monthly exports are recommended.

---

## 8. Budget Allocation (One-Time: ₹20,000)
*   **UI/UX Design, Branding & Frontend Layout:** ₹4,000
*   **Scheduling Engine & Google Calendar Integration:** ₹6,500
*   **Razorpay Integration & Secure Webhooks:** ₹4,000
*   **Backend Setup & Supabase Database Core:** ₹3,500
*   **Communications & Custom Domain Launch:** ₹2,000
*   **Monthly Maintenance:** ₹0 (Fixed)

---

## 9. Future Roadmap
*   **Phase 2:** Multi-consultant support (Marketplace model).
*   **Phase 3:** Native Video calling integration via Daily.co or Jitsi.
*   **Phase 4:** Subscription-based counseling packages.
