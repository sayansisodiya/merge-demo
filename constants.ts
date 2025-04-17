import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../../../..', '.env') });

export const ALPHA = process.env.ALPHA || 'development';