# Project Images and Links Setup

## 🎠 **Image Carousel Features**

The p## 🎠 **Carousel Customization:**

You can customize the carousel behavior in `ExperienceCard.tsx`:

```typescript
<ImageCarousel 
  images={images}
  autoPlay={true}              // Enable/disable auto-play
  autoPlayInterval={5000}      // Time between slides (ms)
  showThumbnails={true}        // Show thumbnail navigation
  showFullscreenButton={true}  // Enable fullscreen mode
/>
```

### 🎨 **Carousel Settings:**
- **`autoPlay`**: Enable automatic slideshow (default: true)
- **`autoPlayInterval`**: Time between auto transitions in milliseconds (default: 5000)
- **`showThumbnails`**: Display thumbnail navigation below carousel (default: true)
- **`showFullscreenButton`**: Show fullscreen toggle button (default: true)

## 📱 **Mobile Experience:**
- **Touch gestures**: Swipe left/right to navigate
- **Responsive design**: Adapts to all screen sizes
- **Touch-friendly controls**: Larger buttons on mobile
- **Optimized performance**: Lazy loading and proper image sizing

## ⌨️ **Keyboard Shortcuts (Fullscreen Mode):**
- **←/→ Arrow Keys**: Navigate between images
- **Spacebar**: Toggle play/pause
- **Escape**: Exit fullscreen mode

## 📱 **Features Included:**

✅ **Auto-play slideshow** with pause/play controls  
✅ **Touch/swipe navigation** for mobile devices  
✅ **Fullscreen viewing** with keyboard controls  
✅ **Thumbnail navigation** with active indicators  
✅ **Smart image fallbacks** if images fail to load  
✅ **Progress indicators** and image counters  
✅ **Dark mode support** for all carousel elements  
✅ **Responsive design** optimized for all devices  
✅ **Smooth animations** and transitions  
✅ **Accessibility features** with proper ARIA labels  

## 🔧 Customization:ow includes a sophisticated image carousel with the following features:

### 🎯 **Core Features:**
- **Auto-play slideshow** with customizable intervals
- **Manual navigation** with arrow buttons and thumbnail clicks
- **Touch/swipe support** for mobile devices
- **Keyboard navigation** (arrow keys, spacebar, escape)
- **Fullscreen mode** for detailed viewing
- **Progress indicators** and image counters
- **Smart error handling** with fallback placeholders

### 🎮 **Interactive Controls:**
- **▶️ Play/Pause** button to control auto-play
- **🔍 Fullscreen** button for immersive viewing
- **👆 Thumbnail strip** for quick navigation
- **📱 Touch gestures** (swipe left/right on mobile)
- **⌨️ Keyboard shortcuts** when in fullscreen

## 📸 Adding Project Images

1. **Add your project screenshots** to the `public/project-images/` directory
2. **Supported formats**: PNG, JPG, JPEG, WebP, SVG
3. **Recommended dimensions**: 
   - Width: 800-1200px
   - Height: 600-800px
   - Aspect ratio: 4:3 or 16:10 works best

### Image Organization:
```
public/
└── project-images/
    ├── knowledge-graph-1.png
    ├── knowledge-graph-2.png
    ├── llm-model-dashboard.png
    ├── webapp-1.png
    └── webapp-2.png
```

## 🔗 Updating Project Links

Edit the `experienceData` array in `app/_components/ExperienceList.tsx`:

```typescript
projectLinks: [
  {
    type: "live",           // "live", "github", or "demo"
    url: "https://your-actual-demo.com",
    label: "Live Demo"
  },
  {
    type: "github",
    url: "https://github.com/yourusername/your-repo",
    label: "Source Code"
  },
  {
    type: "demo",
    url: "https://colab.research.google.com/your-notebook",
    label: "Colab Notebook"
  }
]
```

### Link Types:
- **`live`**: 🌐 Live websites/applications (Globe icon)
- **`github`**: 💻 GitHub repositories (GitHub icon)  
- **`demo`**: 🔗 Demos, notebooks, presentations (External link icon)

## 🎯 Quick Setup Steps:

1. **Replace placeholder URLs** with your actual project links
2. **Add your project images** to `public/project-images/`
3. **Update image paths** in the `images` array to match your filenames
4. **Test the links** to ensure they work correctly

## 📱 Features Included:

✅ **Responsive image gallery** with hover effects  
✅ **Smart image fallbacks** if images fail to load  
✅ **Three types of project links** with appropriate icons  
✅ **Dark mode support** for all components  
✅ **Mobile-optimized** layout  
✅ **Hover animations** and smooth transitions  

## 🔧 Customization:

- **Change link colors**: Update the gradient classes in ExperienceCard.tsx
- **Modify image layout**: Adjust the grid classes for different arrangements
- **Add more link types**: Extend the ProjectLink interface and add new icons
- **Custom image dimensions**: Modify the h-48 sm:h-56 classes

## 🚀 Example Structure:

```typescript
{
  title: "Your Project Title",
  company: "Your Company",
  // ... other fields
  images: [
    "/project-images/your-screenshot-1.png",
    "/project-images/your-screenshot-2.png",
    "/project-images/your-demo-video-thumbnail.png"
  ],
  projectLinks: [
    {
      type: "live",
      url: "https://your-live-project.com",
      label: "Visit Website"
    },
    {
      type: "github", 
      url: "https://github.com/yourusername/your-project",
      label: "View Code"
    }
  ]
}
```

Happy coding! 🎉
