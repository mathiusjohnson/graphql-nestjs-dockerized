// src/constants.ts
export const MONGO_DB_CONNECTION_STRING =
  process.env.MONGO_DB_CONNECTION_STRING ||
  'mongodb+srv://admin:admin@cluster0.aym4a.mongodb.net/nestjs-docker?retryWrites=true&w=majority';
