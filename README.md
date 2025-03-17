# Safe Driving Platform (B2B)

A B2B safety driving data visualization platform designed for taxi companies and fleet managers to monitor and analyze drivers' safety performance.

## Features

- **Real-time Safety Monitoring**: Track and display driver safety scores and events in real-time
- **Driver Analytics**: Detailed analysis of each driver's performance and safety records
- **Safety Metrics**: Comprehensive safety indicators and trend analysis
- **Training Management**: Manage driver training courses and progress
- **Company Comparison**: Compare company performance against industry standards and competitors
- **System Settings**: Customize platform settings and notifications

## Technology Stack

### Frontend
- React
- Ant Design UI Framework
- Ant Design Charts for data visualization
- Socket.IO Client (for real-time data updates)

### Backend
- Node.js
- Express
- Socket.IO (for real-time data transmission)

## Project Structure

```
├── public/                 # Static files
├── server/                 # Backend server code
│   ├── index.js            # Server entry file
│   └── package.json        # Backend dependencies configuration
└── src/                    # Frontend source code
    ├── components/         # React components
    ├── data/               # Mock data
    ├── pages/              # Page components
    ├── services/           # Services and APIs
    ├── App.js              # Main application component
    └── index.js            # Application entry point
```

## Installation and Running

### Frontend

```bash
# Install dependencies
npm install

# Start development server
npm start
```

### Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Start server
npm start
```

## Main Pages

- **Dashboard**: Provides an overview of safety metrics and driver performance
- **Driver Analytics**: Detailed analysis of each driver's safety performance
- **Safety Metrics**: Displays safety trends and indicators
- **Training Management**: Manage training courses and driver progress
- **Company Comparison**: Compare company performance against industry standards
- **Settings**: Configure platform parameters and notifications

## Data Visualization

The platform uses various chart types to visualize safety data:

- Line charts: Display safety score trends
- Bar charts: Compare different metrics or drivers
- Radar charts: Multi-dimensional safety indicator comparison
- Tables: Detailed driver and event data

## Real-time Features

The platform uses Socket.IO to implement real-time data updates:

- Real-time safety score updates
- Event notifications in real-time
- Driver status monitoring in real-time
