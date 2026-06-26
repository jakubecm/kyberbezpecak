/**
 * Simple in-memory rate limiter for API routes.
 * Uses a sliding window approach.
 *
 * For production with multiple instances, replace with Redis-based solution.
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of store.entries()) {
    entry.timestamps = entry.timestamps.filter((t) => now - t < 3600000);
    if (entry.timestamps.length === 0) store.delete(key);
  }
}, 300000);

export function rateLimit(
  identifier: string,
  maxRequests: number,
  windowMs: number
): { success: boolean; remaining: number } {
  const now = Date.now();
  const entry = store.get(identifier) ?? { timestamps: [] };

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);

  if (entry.timestamps.length >= maxRequests) {
    store.set(identifier, entry);
    return { success: false, remaining: 0 };
  }

  entry.timestamps.push(now);
  store.set(identifier, entry);
  return { success: true, remaining: maxRequests - entry.timestamps.length };
}
