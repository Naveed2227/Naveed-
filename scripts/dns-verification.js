#!/usr/bin/env node

/**
 * DNS Verification Helper Script
 * 
 * This script helps verify DNS records for domain ownership verification.
 * Currently configured for Discord verification.
 */

const { execSync } = require('child_process');

const DISCORD_RECORD_NAME = '_discord';
const DISCORD_RECORD_VALUE = 'dh=fca3fe5679cc51e80bee9f3151b04bfa89acdf77';
const DOMAIN = 'mwtassistant.com';

async function checkTxtRecord(recordName, expectedValue) {
  try {
    console.log(`🔍 Checking TXT record: ${recordName}.${DOMAIN}`);
    
    // Use nslookup command to check TXT record
    try {
      const output = execSync(`nslookup -type=TXT ${recordName}.${DOMAIN}`, { encoding: 'utf8', timeout: 10000 });
      console.log(`📋 DNS Query Output:`, output);
      
      // Parse the output to find TXT records
      const lines = output.split('\n');
      const txtRecords = lines.filter(line => line.includes('text =') || line.includes('TXT'));
      
      if (txtRecords.length > 0) {
        console.log(`📋 Found TXT records:`, txtRecords);
        
        // Check if our expected value exists
        const hasExpectedRecord = txtRecords.some(record => 
          record.includes(expectedValue)
        );
        
        if (hasExpectedRecord) {
          console.log(`✅ SUCCESS: Found expected TXT record: ${expectedValue}`);
          return true;
        } else {
          console.log(`❌ FAILED: Expected record not found`);
          console.log(`   Expected: ${expectedValue}`);
          console.log(`   Found: ${txtRecords.join(', ')}`);
          return false;
        }
      } else {
        console.log(`❌ FAILED: No TXT records found`);
        return false;
      }
    } catch (execError) {
      console.log(`❌ FAILED: DNS query failed - ${execError.message}`);
      return false;
    }
    
  } catch (error) {
    if (error.code === 'ENODATA' || error.code === 'ENOTFOUND') {
      console.log(`❌ FAILED: No TXT record found for ${recordName}.${DOMAIN}`);
    } else {
      console.log(`❌ ERROR: ${error.message}`);
    }
    return false;
  }
}

async function main() {
  console.log('🚀 DNS Verification Script');
  console.log('========================\n');
  
  console.log('📝 Discord Verification Details:');
  console.log(`   Record: _discord.${DOMAIN}`);
  console.log(`   Value: ${DISCORD_RECORD_VALUE}`);
  console.log(`   Type: TXT\n`);
  
  const isSuccess = await checkTxtRecord(DISCORD_RECORD_NAME, DISCORD_RECORD_VALUE);
  
  console.log('\n📊 Summary:');
  if (isSuccess) {
    console.log('✅ DNS verification PASSED');
    console.log('🎉 Your Discord domain verification should work!');
  } else {
    console.log('❌ DNS verification FAILED');
    console.log('🔧 Please check:');
    console.log('   1. DNS record has been added correctly');
    console.log('   2. DNS propagation has completed (can take 5-60 minutes)');
    console.log('   3. Record name and value match exactly');
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { checkTxtRecord, DISCORD_RECORD_NAME, DISCORD_RECORD_VALUE, DOMAIN };
