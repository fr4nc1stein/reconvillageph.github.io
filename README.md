# Recon Village Static Site (Black Theme)

A modern, responsive website for Recon Village - A Philippines-based community focused on OSINT and reconnaissance in cybersecurity.

## 🌐 Overview

This website serves as the primary platform for Recon Village, featuring:
- Information about upcoming events
- Schedule of talks and workshops
- Call for Papers (CFP) submissions
- Past event highlights
- About the team
- Sponsorship opportunities

## 🛠️ Tech Stack

- HTML5
- CSS3 (Custom responsive grid system)
- JavaScript (Vanilla)
- Responsive Design
- Mobile-First Approach

## 📁 Project Structure

```
recon_village_site/
├── index.html           # Home page
├── schedule.html        # Event schedule
├── call-for-papers.html # CFP submissions
├── about.html          # Team information
├── past-events.html    # Previous events
├── sponsors.html       # Sponsorship details
├── assets/
│   ├── main.js         # JavaScript functionality
│   ├── styles.css      # Stylesheet
│   └── images/         # Image assets
└── README.md           # Project documentation
```

## 🚀 Quick Start

1. Clone the repository:
```bash
git clone https://github.com/fr4nc1stein/recon_village_site.git
```

2. Open any of the HTML files in a modern web browser
   - No build process required
   - No dependencies to install

## 💻 Development

### Local Development
- Use a local web server for development (e.g., Python's `http.server` or VS Code's Live Server)
- All pages are static HTML, making development straightforward
- CSS uses custom variables for consistent theming
- JavaScript is kept minimal for better performance

### Design System
- Dark theme with accent colors
- Responsive grid system (2, 3, and 4 columns)
- Consistent card-based layout
- Mobile-first breakpoints
- Uniform spacing and typography

## 📄 Pages

### Home (`index.html`)
- Hero section with upcoming event
- Quick links to important sections
- Featured speakers and highlights

### Schedule (`schedule.html`)
- Detailed event timeline
- Speaker profiles
- Session descriptions

### Call for Papers (`call-for-papers.html`)
- CFP guidelines
- Submission form
- Important dates

### About (`about.html`)
- Team information
- Mission and vision
- Contact details

### Past Events (`past-events.html`)
- Previous event highlights
- Event timeline
- Historical record

### Sponsors (`sponsors.html`)
- Sponsorship tiers
- Current sponsors
- Sponsorship benefits

## 🔧 Maintenance

### Adding New Events
1. Update `schedule.html` with new event details
2. Add speaker information and session details
3. Move previous event to `past-events.html`

### Updating Content
- Edit HTML files directly
- Follow existing class naming conventions
- Maintain responsive design patterns
- Test across different screen sizes

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contact

For any questions or suggestions, please reach out to:
- Twitter: @ReconVillagePH
- Email: info@reconvillageph.org
