import dotenv from 'dotenv';
import path from 'path';

// Use import.meta.url to resolve __dirname equivalent in ES modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Load .env with explicit path
dotenv.config({ path: path.resolve(__dirname, '.env') });

console.log("Test MONGO_DB_URI:", process.env.MONGO_DB_URI);
