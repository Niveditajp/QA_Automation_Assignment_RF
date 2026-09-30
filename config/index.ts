import path from 'path';
import dotenv from 'dotenv';
import dev from './dev.json';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const requiredEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
};

/**
 * Runtime config combines public test data with credentials loaded from the
 * ignored `.env` file. Secrets must never be stored in committed files.
 */
export const config = {
  ui: {
    ...dev.ui,
    users: {
      standard: {
        username: requiredEnv('SAUCE_USERNAME'),
        password: requiredEnv('SAUCE_PASSWORD'),
      },
      lockedOut: {
        username: requiredEnv('SAUCE_LOCKED_USERNAME'),
        password: requiredEnv('SAUCE_LOCKED_PASSWORD'),
      },
      problem: {
        username: process.env.SAUCE_PROBLEM_USERNAME ?? '',
        password: process.env.SAUCE_PROBLEM_PASSWORD ?? '',
      },
    },
  },
  api: {
  baseURL: dev.api.baseURL,

  },
};