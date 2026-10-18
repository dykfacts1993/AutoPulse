# AutoPulse — Vehicle Service Dashboard

A responsive, multi-page HTML/CSS/JavaScript vehicle service dashboard with a premium dark workshop theme.

## Open the dashboard
1. Extract `AutoPulse-Dashboard.zip`.
2. Open `index.html` in a modern browser (Chrome, Edge, Safari or Firefox).
3. Register a vehicle on the **Vehicles** page, then create a service record on **New service**.
4. Use **Service history** to search by REGO and **Reports** to edit or export saved records.

For the smoothest experience, run the extracted folder through a small local static server (for example VS Code Live Server). The app uses browser `localStorage`, so data is stored in the browser profile on that device. It is not a cloud database and does not automatically sync between users or devices. Clearing browser site data can remove saved records, so export important service reports as PDFs and keep a backup of your browser data.

## Included functionality
- Vehicle registry: unique REGO, VIN and odometer; edit and delete vehicle profiles.
- Service records: date, odometer, checklist, custom “Other” work, description and recommendations.
- Automatic next-service odometer calculation: **service odometer + 10,000 km**.
- Service history search by REGO, with every saved record, task list and recommendations.
- Edit saved services, export report PDFs using jsPDF, or fallback to the browser print dialog and choose “Save as PDF”.
- Responsive pages: Overview, Vehicles, New service, Service history and Reports.

## Photos and fonts
Supercar / workshop photography is loaded from the image URLs referenced in the HTML/CSS and requires an internet connection. The photos are shown for demo/design purposes and remain hosted by their original publishers. Google Fonts and the jsPDF CDN also require internet access. The core form and local data storage are ordinary HTML/CSS/JavaScript.

## Project files
- `index.html` — dashboard overview
- `vehicles.html` — vehicle registry
- `service.html` — create/edit service reports
- `history.html` — search vehicle service history by REGO
- `reports.html` — service report centre
- `assets/styles.css` — responsive UI theme and layout
- `assets/app.js` — browser storage, CRUD workflows, search and PDF export

## Important usage notes
- REGO values are normalized to uppercase for matching.
- A vehicle should be registered before a service can be saved.
- Saving a service updates the registered vehicle odometer to the highest recorded reading.
- A service record’s `nextServiceOdometer` is calculated at the time of service and saved with that record.
- This is a front-end prototype, not an accounting system or multi-user production database. For a shared workshop deployment, add authentication, a database, backups and server-side PDF generation.


## Mobile compatibility update

The dashboard is responsive across mobile phones, tablets, and desktop browsers. On phone-sized screens, the left sidebar becomes a fixed bottom navigation bar with touch-friendly controls and safe-area support for modern iPhones. Forms use mobile-friendly input sizes, tables can scroll horizontally, and layouts adapt for portrait and landscape orientations.

### PDF checklist marks

Completed tasks selected in the service form are now shown with a visible orange check mark in the downloaded PDF. The browser print fallback uses the same checked-task presentation. Only tasks saved as completed are listed in the Work Completed section.
