# PercyVerance Website

A modern, responsive website for the PercyVerance project featuring beautiful design, smooth animations, and comprehensive documentation display.

## Features

- **Modern Design**: Clean, professional layout with gradient effects and smooth animations
- **Responsive Layout**: Fully responsive design that works on all device sizes
- **Interactive Elements**: Smooth scrolling, hover effects, and interactive buttons
- **Documentation Pages**: Dedicated pages for white paper and roadmap display
- **Gallery Section**: Visual showcase of project artwork and concepts
- **Mobile-Friendly Navigation**: Collapsible navigation menu for mobile devices

## Project Structure

```
PercyVerance/
├── index.html              # Main homepage
├── documents.html          # Documentation page (white paper & roadmap)
├── assets/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   └── script.js      # Interactive functionality
│   ├── images/            # Project images and artwork
│   │   ├── percy_token.png
│   │   ├── percy_art_1.png
│   │   ├── percy_art_2.png
│   │   ├── illustrated_percy.png
│   │   ├── copilot_image.png
│   │   └── chatgpt_image.png
│   ├── Percy_Verance_White_Paper.docx
│   └── Percy_Verance_Roadmap.docx
└── README.md              # This file
```

## Pages

### Homepage (index.html)
- Hero section with call-to-action buttons
- About section with feature highlights
- Gallery showcasing project artwork
- Navigation to documentation

### Documentation (documents.html)
- White paper content display
- Project roadmap with timeline
- Downloadable document links

## Interactive Elements

### Three Main Action Buttons
1. **Get Started** - Ready for your custom functionality
2. **Learn More** - Ready for your custom functionality  
3. **Join Community** - Ready for your custom functionality

Each button has placeholder functionality that can be easily customized to link to your desired destinations or trigger specific actions.

## Customization

### Adding Button Functionality
The three main buttons have event listeners in `script.js`. To customize their behavior:

1. Open `assets/js/script.js`
2. Find the button event listeners (btn-1, btn-2, btn-3)
3. Replace the placeholder alerts with your desired functionality

Example:
```javascript
const btn1 = document.getElementById('btn-1');
if (btn1) {
    btn1.addEventListener('click', function() {
        // Replace this with your custom functionality
        window.location.href = 'https://your-link-here.com';
    });
}
```

### Updating Social Media Links
Social media icons in the footer are currently placeholders. To add real links:

1. Open `index.html` and `documents.html`
2. Find the footer social links
3. Replace the `href="#"` attributes with your actual social media URLs

### Adding Content
- **White Paper**: Edit the content in `documents.html` or replace the Word document
- **Roadmap**: Update the timeline in `documents.html` or replace the Word document
- **Images**: Replace images in the `assets/images/` folder (keep the same filenames)

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Interactive functionality and smooth animations
- **Font Awesome**: Icons for buttons and UI elements
- **Google Fonts**: Inter font family for typography

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features
- Optimized images
- Smooth CSS animations
- Efficient JavaScript
- Mobile-first responsive design

## Getting Started

1. Open `index.html` in your web browser to view the homepage
2. Navigate to the Documents page to view the white paper and roadmap
3. Customize the button functionality in `script.js` as needed
4. Update social media links and other content as desired

## File Usage

- **index.html**: Main homepage with hero section, features, and gallery
- **documents.html**: Documentation page with white paper and roadmap
- **style.css**: All styling including responsive design and animations
- **script.js**: JavaScript for interactivity, button handlers, and animations

## Notes

- All images are loaded from the `assets/images/` directory
- Documents are available for download from the `assets/` directory
- The site is fully responsive and works on all modern browsers
- JavaScript includes placeholder functionality for easy customization

Enjoy your PercyVerance website! 🚀
