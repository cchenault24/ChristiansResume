#!/bin/bash

# Setup Vercel Environment Variables
# This script reads your .env file and sets variables in Vercel

set -e

echo "🔧 Setting up Vercel environment variables..."
echo ""

# Check if .env exists
if [ ! -f .env ]; then
  echo "❌ .env file not found!"
  echo "Please create a .env file with your Firebase configuration."
  exit 1
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  echo "❌ Vercel CLI not found!"
  echo "Install it with: npm install -g vercel"
  exit 1
fi

# Read .env and set variables
echo "📝 Reading .env file..."
while IFS= read -r line; do
  # Skip comments and empty lines
  if [[ $line =~ ^#.*$ ]] || [[ -z $line ]]; then
    continue
  fi

  # Extract variable name
  var_name=$(echo "$line" | cut -d '=' -f 1)
  var_value=$(echo "$line" | cut -d '=' -f 2-)

  # Only process VITE_ variables
  if [[ $var_name == VITE_* ]]; then
    echo "Setting $var_name..."
    echo "$var_value" | vercel env add "$var_name" production --yes
    echo "$var_value" | vercel env add "$var_name" preview --yes
  fi
done < .env

echo ""
echo "✅ Environment variables set successfully!"
echo ""
echo "🚀 Redeploy your app to apply changes:"
echo "   vercel --prod"
