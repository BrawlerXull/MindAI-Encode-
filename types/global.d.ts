// global.d.ts
import { Mongoose } from 'mongoose'

declare global {
  // Extend globalThis to include mongoose
  var mongoose: { conn: Mongoose | null; promise: Promise<Mongoose> | null };
}

export {}
