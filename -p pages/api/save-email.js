import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const filePath = path.join(process.cwd(), 'data', 'users.json');
    let users = [];

    // Read existing users if file exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      users = JSON.parse(fileContent);
      
      // Check if email already exists
      if (users.includes(email)) {
        return res.status(200).json({ message: 'Email already exists' });
      }
    }

    // Add new email and save
    users.push(email);
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return res.status(200).json({ message: 'Email saved successfully' });
  } catch (error) {
    console.error('Error saving email:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
