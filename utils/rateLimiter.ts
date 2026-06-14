// utils/rateLimiter.ts

type RateLimitData = {
  count: number;
  resetTime: number;
};

// This Map stores the IP addresses and their request counts in the server's memory
const rateLimitMap = new Map<string, RateLimitData>();

export function checkRateLimit(ip: string, maxRequests: number, windowMs: number): boolean {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip);

  // Scenario 1: First time we are seeing this IP
  if (!clientData) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Request allowed
  }

  // Scenario 2: The time window has passed, so we reset their count
  if (now > clientData.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // Request allowed
  }

  // Scenario 3: The user has exceeded the allowed number of requests
  if (clientData.count >= maxRequests) {
    return false; // Request denied
  }

  // Scenario 4: User is within the time window and under the limit
  clientData.count += 1;
  return true; // Request allowed
}