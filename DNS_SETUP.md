# DNS Setup Guide

## Discord Domain Verification

This project requires a DNS TXT record for Discord domain verification.

### Required DNS Record

| Field | Value |
|-------|-------|
| **Type** | TXT |
| **Name/Host** | `_discord` (or `_discord.mwtassistant.com` depending on registrar) |
| **Value** | `dh=fca3fe5679cc51e80bee9f3151b04bfa89acdf77` |
| **TTL** | Default (usually 1 hour or automatic) |

### How to Add the Record

1. **Log into your domain registrar** (GoDaddy, Namecheap, Cloudflare, etc.)
2. **Navigate to DNS Management** for `mwtassistant.com`
3. **Add a new TXT record** with the values above
4. **Save changes**

### Verification

After adding the record, you can verify it's working:

#### Using the included script:
\`\`\`bash
node scripts/dns-verification.js
\`\`\`

#### Using command line:
\`\`\`bash
# Windows
nslookup -type=TXT _discord.mwtassistant.com

# macOS/Linux
dig TXT _discord.mwtassistant.com
\`\`\`

#### Online tools:
- [Google Admin Toolbox - Dig](https://toolbox.googleapps.com/apps/dig/)
- [DNSChecker.org](https://dnschecker.org/)
- [MXToolbox](https://mxtoolbox.com/TXTLookup.aspx)

### Important Notes

- **DNS Propagation**: Can take 5 minutes to several hours
- **Record Name**: Some registrars require the full domain (`_discord.mwtassistant.com`), others just the subdomain part (`_discord`)
- **Value**: Must be exact - no extra spaces or quotes
- **TTL**: Leave as default unless you have specific requirements

### Troubleshooting

If verification fails:

1. **Wait for propagation** - DNS changes take time
2. **Check for typos** - Ensure the record name and value match exactly
3. **Verify record type** - Make sure it's TXT, not CNAME or A record
4. **Check registrar interface** - Some registrars have different naming conventions

### Current Status

- ✅ Script created for verification
- ⏳ DNS record needs to be added manually
- ⏳ Verification pending record creation
