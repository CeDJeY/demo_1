import crypto from 'node:crypto';


const countryCodes = ['us', 'ca', 'gb', 'de', 'fr', 'es', 'it', 'br', 'cn', 'jp'];

function random(from: number, to: number): number {
  const range = to - from;
  const randomBuffer = crypto.randomBytes(4);
  const randomInt = randomBuffer.readUInt32BE(0);
  return from + (randomInt % (range + 1));
}

function randomCountry(): string {
  return countryCodes[random(0, countryCodes.length - 1)];
}

function randomCategory(): string {
  return `Category ${random(1, 10)}`;
}

function randomSubcategory(): string {
  return `Subcategory ${random(1, 30)}`;
}

function randomDate(): number {
  const now = Date.now();
  const from = now - 1000 * 60 * 60 * 24 * 14; // 14 days for demo
  return random(from, now);
}

const reportMocks: Demo.Report[] = Array.from({ length: 1000 }, () => ({
  userAgent: `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/${random(100, 1000)}.36`,
  category: randomCategory(),
  countryid: randomCountry(),
  creationdate: randomDate(),
  id: crypto.randomUUID(),
  clientid: crypto.randomUUID(),
  subcategory: randomSubcategory(),
}));

export default reportMocks;
