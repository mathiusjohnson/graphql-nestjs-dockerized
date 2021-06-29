// src/constants.ts
export const MONO_DB_CONNECTION_STRING =
  process.env.MONO_DB_CONNECTION_STRING ||
  'mongodb+srv://admin:admin@cluster0.aym4a.mongodb.net/nestjs-docker?retryWrites=true&w=majority';
