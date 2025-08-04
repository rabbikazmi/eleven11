#!/bin/bash
# Railway deployment script

echo "🚀 Deploying to Railway..."

# Check if railway CLI is installed
if ! command -v railway &> /dev/null; then
    echo "Installing Railway CLI..."
    npm install -g @railway/cli
fi

# Login to Railway
echo "Please login to Railway..."
railway login

# Initialize project if not exists
if [ ! -f "railway.toml" ]; then
    echo "Initializing Railway project..."
    railway init
fi

# Deploy backend
echo "Deploying backend..."
railway up --service backend

# Deploy frontend  
echo "Deploying frontend..."
railway up --service frontend

echo "✅ Deployment complete!"
echo "🌐 Your app will be available at the URLs provided by Railway"
