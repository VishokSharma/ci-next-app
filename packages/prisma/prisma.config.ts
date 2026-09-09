import path from "path";
import dotenv from "dotenv";

// Load .env from packages/prisma/.env and root workspace .env
dotenv.config({ path: path.resolve(__dirname, ".env") });
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export default {
  datasource: {
    url: process.env.DATABASE_URL,
  },
};
