# 📡 Trading News Radar

A high-performance, minimal news aggregator designed for traders to monitor headlines in real-time across multiple major financial sources.

## 🚀 Live Demo
[https://trading-rss-feed.vercel.app](https://trading-rss-feed.vercel.app)

## 🎨 Visual Preview

```text
________________________________________________________________________________
|                                                                              |
|  Trading News Radar                                               [ Live ]     |
|  __________________________________________________________________________  |
|                                                                              |
|  [ Yahoo Finance ] Fed signals potential rate cut in coming months      (10:15)|
|  __________________________________________________________________________  |
|                                                                              |
|  [ CNBC ] Tech stocks rally as AI demand surges                        (10:12)|
|  __________________________________________________________________________  |
|                                                                              |
|  [ CNN Business ] Oil prices stabilize amid Middle East tensions        (10:05)|
|  __________________________________________________________________________  |
|                                                                              |
|  [ Yahoo Finance ] Market opens higher on strong jobs report            (09:30)|
|  __________________________________________________________________________  |
|                                                                              |
|                                                                              |
|______________________________________________________________________________|
```

## ✨ Features
- **Aggregated Intelligence**: Pulls from Yahoo Finance, CNBC, and CNN Business.
- **Trader-First UI**: Dark-themed, distraction-free interface.
- **Real-time Awareness**: Auto-refreshes every 60 seconds to ensure no news is missed.
- **Serverless Architecture**: Deployed on Vercel for near-zero latency and global availability.

## 🛠️ Tech Stack
- **Backend**: Node.js (Vercel Serverless Functions)
- **Parsing**: `rss-parser`
- **Frontend**: Vanilla HTML5/CSS3/JS
- **Deployment**: Vercel + GitHub

## 📦 Local Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/paulyoh1/trading-rss-feed.git
   cd trading-rss-feed
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

## 📄 License
MIT
