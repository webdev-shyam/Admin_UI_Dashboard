# NextMetrics Dashboard

<div align="center">
  <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&dpr=2" alt="NextMetrics Dashboard" width="100%" height="200" style="object-fit: cover; border-radius: 8px;">
  
  <h3>🚀 Modern SaaS Admin Dashboard</h3>
  <p>A beautiful, responsive, and feature-rich admin dashboard built with React, TypeScript, and Tailwind CSS</p>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC.svg)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF.svg)](https://vitejs.dev/)
</div>

## ✨ Features

### 🎨 **Modern Design**
- Clean, professional interface inspired by leading SaaS products
- Dark/Light mode toggle with smooth transitions
- Responsive design that works on all devices
- Inter font family for optimal readability

### 📊 **Analytics & Visualization**
- **Animated Analytics Cards** - Number counters with smooth animations
- **Interactive Charts** - Line, bar, and pie charts built with SVG
- **Real-time Data** - Live updates and dynamic content
- **Performance Metrics** - Revenue, users, orders, and growth tracking

### 🗂️ **Data Management**
- **Sortable Tables** - Click column headers to sort data
- **Real-time Search** - Instant filtering across all data
- **User Management** - Complete user profiles with roles and status
- **Transaction History** - Detailed payment and order tracking

### 🎯 **User Experience**
- **Responsive Navigation** - Collapsible sidebar with hamburger menu
- **Activity Feed** - Real-time user actions and system events
- **Notification System** - Badge indicators and dropdown alerts
- **Profile Management** - User settings and preferences

### 🛠️ **Technical Excellence**
- **TypeScript** - Full type safety and better developer experience
- **Component Architecture** - Modular, reusable components
- **Custom Hooks** - Animated counters and theme management
- **Performance Optimized** - Efficient rendering and smooth animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextmetrics-dashboard.git
   cd nextmetrics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

## 📱 Screenshots

### Desktop View
<div align="center">
  <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&dpr=2" alt="Desktop Dashboard" width="80%" style="border-radius: 8px; margin: 10px;">
</div>

### Mobile Responsive
<div align="center">
  <img src="https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&dpr=2" alt="Mobile Dashboard" width="40%" style="border-radius: 8px; margin: 10px;">
</div>

## 🏗️ Project Structure

```
src/
├── components/
│   ├── dashboard/          # Dashboard widgets and charts
│   │   ├── AnalyticsCard.tsx
│   │   ├── LineChart.tsx
│   │   ├── BarChart.tsx
│   │   ├── PieChart.tsx
│   │   ├── TransactionsTable.tsx
│   │   ├── ActivityFeed.tsx
│   │   └── ActivityModal.tsx
│   ├── layout/             # Layout components
│   │   ├── Sidebar.tsx
│   │   └── Navbar.tsx
│   └── views/              # Page views
│       ├── HomeView.tsx
│       ├── AnalyticsView.tsx
│       ├── UsersView.tsx
│       └── SettingsView.tsx
├── contexts/               # React contexts
│   └── ThemeContext.tsx
├── hooks/                  # Custom hooks
│   └── useAnimatedCounter.tsx
├── data/                   # Mock data
│   └── mockData.ts
└── App.tsx                 # Main application
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale (50-900)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Line Heights**: 120% (headings), 150% (body)

### Spacing
- **System**: 8px base unit
- **Breakpoints**: 
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: ≥ 1024px

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 📦 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.3.1 |
| **TypeScript** | Type Safety | 5.5.3 |
| **Tailwind CSS** | Styling | 3.4.1 |
| **Vite** | Build Tool | 5.4.2 |
| **Heroicons** | Icons | 2.2.0 |
| **Framer Motion** | Animations | 12.23.12 |

## 🌟 Key Features Breakdown

### Analytics Dashboard
- **Real-time Metrics**: Live updating counters and charts
- **Data Visualization**: Interactive SVG-based charts
- **Performance Tracking**: Revenue, users, orders, growth rates

### User Management
- **User Profiles**: Complete user information with avatars
- **Role Management**: Admin, Editor, User roles
- **Status Tracking**: Active, Inactive, Pending states
- **Search & Filter**: Real-time user filtering

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Perfect tablet experience
- **Desktop Enhanced**: Full desktop functionality
- **Touch Friendly**: Optimized touch targets

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern SaaS platforms like Stripe, Vercel, and Linear
- **Icons**: [Heroicons](https://heroicons.com/) by the Tailwind CSS team
- **Images**: [Pexels](https://pexels.com/) for high-quality stock photos
- **Fonts**: [Inter](https://rsms.me/inter/) by Rasmus Andersson

## 📞 Support

If you have any questions or need help, please:

- 📧 Email: wid2839@gmail.com


---

<div align="center">
  <p>Made with ❤️ by Ganeshyam Verma</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
