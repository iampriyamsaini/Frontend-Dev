let rawName = " wireless headphones PRO ";
let trimmed = rawName.trim();
let lower = trimmed.toLowerCase();
let replaced = lower.replace(/\bpro\b/g, "pro edition");
let words = replaced.split(/\s+/);
let capitalizedWords = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
let cleanedTitle = capitalizedWords.join(' ');
console.log('Cleaned Title:', cleanedTitle);
console.log('Title Length:', cleanedTitle.length);
