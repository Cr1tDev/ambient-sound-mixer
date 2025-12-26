# 🎵 Ambient Sound Mixer

A beautiful, interactive web application for mixing ambient sounds to create your perfect atmosphere. Perfect for focus, relaxation, or sleep.

![Ambient Sound Mixer](https://img.shields.io/badge/Status-Active-success) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

## ✨ Features

- **8 Ambient Sounds**: Rain, Ocean Waves, Forest, Fireplace, Thunder, Wind, Coffee Shop, and Night sounds
- **Individual Volume Control**: Adjust each sound independently with sliders
- **Master Volume**: Control overall volume with a master slider
- **Preset System**: 
  - Built-in presets (Focus, Relax, Sleep)
  - Save and load custom presets
  - Delete custom presets
- **Timer Functionality**: Set timers for 5, 15, 30, or 60 minutes
- **Play/Pause Controls**: 
  - Individual sound controls
  - Master play/pause for all sounds
  - Reset button to clear everything
- **Theme Toggle**: Switch between dark and light themes
- **Modern UI**: Beautiful gradient design with glassmorphism effects
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required - runs directly in the browser!

### Installation

1. Clone or download this repository:
   ```bash
   git clone <repository-url>
   cd ambient-sound-mixer
   ```

2. Ensure you have audio files in the `audio/` folder:
   - `rain.mp3`
   - `ocean.mp3`
   - `birds.mp3` (used for forest)
   - `fireplace.mp3`
   - `thunder.mp3`
   - `wind.mp3`
   - `cafe.mp3`
   - `night.mp3`

3. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. Navigate to `http://localhost:8000` in your browser

## 📁 Project Structure

```
ambient-sound-mixer/
├── audio/                 # Audio files (MP3 format)
│   ├── rain.mp3
│   ├── ocean.mp3
│   ├── birds.mp3
│   ├── fireplace.mp3
│   ├── thunder.mp3
│   ├── wind.mp3
│   ├── cafe.mp3
│   ├── night.mp3
│   └── README.md
├── css/
│   └── styles.css        # Custom styles and theme variables
├── js/
│   ├── app.js            # Main application logic
│   ├── soundManager.js   # Audio playback management
│   ├── soundData.js      # Sound configurations and presets
│   ├── ui.js             # UI manipulation and updates
│   ├── presentManager.js # Preset save/load functionality
│   └── timer.js          # Timer functionality
├── index.html            # Main HTML file
└── README.md            # This file
```

## 🎮 Usage

### Basic Controls

1. **Play Individual Sounds**: Click the play button on any sound card to start/stop that sound
2. **Adjust Volume**: Use the slider on each sound card to control its volume (0-100%)
3. **Master Volume**: Use the master volume slider in the top controls to adjust all sounds at once
4. **Play All**: Click the "Play All" button to start all sounds with their current volume settings
5. **Reset**: Click "Reset" to stop all sounds and reset all controls

### Using Presets

1. **Load Built-in Presets**: Click on "Focus", "Relax", or "Sleep" to load predefined sound combinations
2. **Save Custom Preset**: 
   - Adjust sounds to your liking
   - Click "Save Mix"
   - Enter a name for your preset
   - Click "Save"
3. **Load Custom Preset**: Click on any saved custom preset button
4. **Delete Custom Preset**: Click the delete icon (×) on any custom preset button

### Timer

1. Select a timer duration from the dropdown (5, 15, 30, or 60 minutes)
2. The timer will count down and automatically stop all sounds when it reaches zero
3. Select "No Timer" to cancel the timer

### Theme

- Click the sun/moon icon in the header to toggle between light and dark themes
- Your theme preference is saved in localStorage

## 🎨 Customization

### Adding New Sounds

1. Add your audio file to the `audio/` folder (MP3 format)
2. Edit `js/soundData.js` and add a new entry to the `sounds` array:
   ```javascript
   {
     id: "your-sound-id",
     name: "Your Sound Name",
     icon: "fa-icon-name",  // Font Awesome icon class
     color: "from-color-500 to-color-500",  // Tailwind gradient colors
     file: "your-sound.mp3",
     description: "Sound description",
   }
   ```

### Modifying Presets

Edit the `defaultPresets` object in `js/soundData.js` to change built-in presets or add new ones.

### Styling

- Main styles are in `css/styles.css`
- The app uses Tailwind CSS (via CDN) for utility classes
- Theme variables are defined in the CSS `:root` selector

## 🛠️ Technologies Used

- **HTML5**: Structure and semantic markup
- **JavaScript (ES6 Modules)**: Application logic and interactivity
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Font Awesome**: Icons (via CDN)
- **Web Audio API**: Audio playback and control
- **LocalStorage API**: Saving custom presets and theme preferences

## 📝 Audio File Requirements

- **Format**: MP3
- **Duration**: 1-3 minutes minimum (sounds will loop automatically)
- **Quality**: 128-192 kbps is sufficient
- **Looping**: Files should loop seamlessly for best experience

### Free Sound Resources

- [Freesound.org](https://freesound.org) - Creative Commons licensed sounds
- [Zapsplat.com](https://www.zapsplat.com) - Free sounds with account
- [BBC Sound Effects](https://sound-effects.bbcrewind.co.uk) - 33,000+ BBC sound effects
- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Free sounds from YouTube
- [Pixabay](https://pixabay.com/music/) - Royalty-free sounds

## 🌐 Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

Note: Requires a browser that supports ES6 modules and the Web Audio API.

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page or submit a pull request.

## 👤 Author

Created as part of a portfolio project.

---

**Enjoy creating your perfect ambient atmosphere! 🎧**
