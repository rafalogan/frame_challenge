import dotenv from 'dotenv';

import { onLog } from 'src/utils/log-handler';

const isValid = !process.env.NODE_ENV || process.env.NODE_ENV !== 'production';

export const execDotEnv = () =>
	isValid ? dotenv.config(process.env.NODE_ENV === 'test' ? { path: '.env.test' } : { path: '.env' }) : null;
