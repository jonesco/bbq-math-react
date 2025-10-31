# BBQ Math

A responsive React web app for calculating the perfect BBQ order for your gathering. Choose from top Austin BBQ restaurants, select your meats and sides, and get personalized recommendations based on your group size and event type.

## Features

🔥 **Smart Calculations**
- Base rule: ½ pound of meat per person
- Event-based multipliers (Casual: 1.0×, Party: 1.2×, Celebration: 1.5×)
- Category-specific side portions
- Real-time cost calculations

🍖 **Austin BBQ Places**
- 10 renowned BBQ restaurants
- Detailed menus with prices
- Ratings and specialties
- Search functionality

📱 **Fully Responsive**
- Mobile-first design
- Tailwind CSS styling
- Modern UI/UX
- Smooth animations

🎯 **Key Features**
- Interactive BBQ place browser
- Customizable menu selection
- Detailed order summaries
- Helpful recommendations
- Calculation explanations

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Vanilla JS (no TypeScript overhead)

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "BBQ Math React"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
BBQ Math React/
├── src/
│   ├── components/
│   │   ├── ContentView.jsx                 # Main app view
│   │   ├── BBQPlacesListView.jsx           # BBQ places modal
│   │   ├── BBQPlaceCard.jsx                # Place card component
│   │   ├── MenuItemCard.jsx                # Menu item card
│   │   ├── ResultsView.jsx                 # Order summary modal
│   │   └── BBQCalculationExplanationView.jsx # Help/explanation modal
│   ├── data/
│   │   ├── constants.js                    # App constants & rules
│   │   └── bbqPlaces.js                    # BBQ places data
│   ├── App.jsx                             # Main app component
│   ├── main.jsx                            # App entry point
│   └── index.css                           # Global styles
├── index.html                              # HTML template
├── package.json                            # Dependencies
├── tailwind.config.js                      # Tailwind config
└── vite.config.js                          # Vite config
```

## BBQ Places Included

1. **Franklin Barbecue** - World-famous brisket
2. **Terry Black's Barbecue** - Family-owned since 1932
3. **Salt Lick BBQ** - Historic Driftwood location
4. **la Barbecue** - Grass-fed meats
5. **Interstellar BBQ** - Michelin-starred (2024)
6. **Leroy and Lewis Barbecue** - Michelin-recognized
7. **Stiles Switch BBQ** - Historic railroad theme
8. **Micklethwait Craft Meats** - Artisanal sausages
9. **Lamberts** - Upscale downtown dining
10. **KG BBQ** - Mediterranean fusion BBQ
11. **Rudy's 'Country Store' and Bar-B-Q** - Multiple locations, famous cream corn

## Calculation Rules

### Meat Portions
- **Base Rule**: 0.5 pounds per person
- **Event Multipliers**:
  - Casual: 1.0× (standard)
  - Party: 1.2× (20% more)
  - Celebration: 1.5× (50% more)

### Side Servings
- Vegetables: 0.5 servings/person
- Starches: 0.75 servings/person (most popular)
- Salads: 0.5 servings/person
- Breads: 1.0 serving/person (cheap & filling)
- Desserts: 0.25 servings/person (optional)

## Contributing

Contributions are welcome! Feel free to:
- Add more BBQ places
- Improve calculations
- Enhance UI/UX
- Fix bugs
- Add features

## Deployment

### GitHub

This app is ready to be pushed to GitHub:

```bash
# Create a new GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/bbq-math-react.git
git branch -M main
git push -u origin main
```

### Vercel Deployment

The app is optimized for Vercel deployment. Simply:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect Vite and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

The app will be live with HTTPS, custom domain support, and automatic deployments on every push!

## License

MIT License - feel free to use for your own projects!

## Acknowledgments

- All BBQ place information is accurate as of 2025
- Prices and ratings are approximations
- Special thanks to Austin's BBQ community for inspiration
