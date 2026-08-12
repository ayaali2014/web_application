# Fatafeet

Fatafeet is a static food magazine website that presents popular dishes from different countries and provides short descriptions of each dish.

## Features

- Home page introducing the food magazine.
- Food collections from:
  - Egypt
  - Brazil
  - Australia
  - Spain
  - Turkey
- Individual food cards containing:
  - Dish names
  - Alternative names
  - Food images
  - Descriptions and background information
- Login and registration interface.
- Simple admin page with background color controls.
- Responsive styling foundations using CSS.
- Custom fonts loaded from Google Fonts.

## Project Structure

```text
web_application/
├── index.html              # Home page
├── login.html              # Login and registration page
├── register.html           # Alternative login and registration page
├── admin.html              # Admin color controls
├── try.html                # Login/sign-up interface prototype
├── css/
│   ├── admin.css
│   ├── home.css
│   ├── login.css
│   ├── main.css
│   ├── style1.css          # Egypt page styles
│   ├── style2.css          # Brazil page styles
│   ├── style3.css          # Australia page styles
│   ├── style4.css          # Spain page styles
│   ├── style5.css          # Turkey page styles
│   └── stylt.css
├── js/
│   └── style.js
└── images/                 # Local food images
```

## Running the Project

This project is a client-side static website and does not require a backend or build process.

### Option 1: Open directly

Open `index.html` in a web browser.

### Option 2: Run a local web server

Using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using Node.js and `serve`:

```bash
npx serve .
```

## Navigating the Website

From the home page, use the navigation menu to explore the food pages:

- `index1.html` — Egyptian food
- `index2.html` — Brazilian food
- `index3.html` — Australian food
- `index4.html` — Spanish food
- `index5.html` — Turkish food

The login page is available at `login.html`, and the admin page is available at `admin.html`.

## Technologies

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Local image assets
- External image URLs used on the home page

## Development Notes

- The application is currently front-end only.
- Login, registration, and admin behavior are implemented with client-side JavaScript and are not suitable for production authentication.
- Some navigation links reference legacy paths and may need adjustment when the project is served from a different directory.
- Several pages share similar styling and could be consolidated into reusable components in a future iteration.
- External images require an internet connection to load.

## Future Improvements

- Add a backend for secure authentication and registration.
- Replace hard-coded navigation paths with consistent relative links.
- Add mobile-responsive layouts for food cards and navigation.
- Consolidate duplicated CSS files.
- Add search and filtering for dishes.
- Improve accessibility with semantic labels, keyboard navigation, and optimized image alt text.
- Add automated tests and HTML/CSS validation.

## License

No license has been specified for this project.
