#!/bin/bash

# Cloudflare Zone ID
ZONE_ID="cc6d38d868b3e28bbdef0b6ba8e531bd"

echo "🔍 Fetching existing DNS records..."

# Get all DNS records for the root domain
RECORDS=$(curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records?name=christianchenault.com" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json")

echo "$RECORDS" | jq -r '.result[] | "ID: \(.id) | Type: \(.type) | Name: \(.name) | Value: \(.content)"'

echo ""
echo "🗑️  Deleting old DNS records..."

# Delete all existing A and AAAA records for the root domain
echo "$RECORDS" | jq -r '.result[] | select(.type == "A" or .type == "AAAA") | .id' | while read -r record_id; do
  echo "Deleting record: $record_id"
  curl -s -X DELETE "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records/$record_id" \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -H "Content-Type: application/json" | jq '.success'
done

echo ""
echo "➕ Adding new Firebase DNS records..."

# Add A record for Firebase
echo "Adding A record: christianchenault.com → 199.36.158.100"
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "A",
    "name": "christianchenault.com",
    "content": "199.36.158.100",
    "ttl": 1,
    "proxied": false
  }' | jq '.success, .result.id'

# Add TXT record for Firebase verification
echo "Adding TXT record for verification"
curl -s -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" \
  --data '{
    "type": "TXT",
    "name": "christianchenault.com",
    "content": "hosting-site-christiansresume-42c08",
    "ttl": 1
  }' | jq '.success, .result.id'

echo ""
echo "✅ DNS records updated!"
echo ""
echo "🔍 Current DNS records:"
curl -s -X GET "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records?name=christianchenault.com" \
  -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
  -H "Content-Type: application/json" | jq -r '.result[] | "Type: \(.type) | Name: \(.name) | Value: \(.content)"'

echo ""
echo "🎯 Next steps:"
echo "1. Go back to Firebase Console"
echo "2. Click 'Verify' on the domain"
echo "3. Wait for SSL certificate provisioning (can take a few minutes)"
