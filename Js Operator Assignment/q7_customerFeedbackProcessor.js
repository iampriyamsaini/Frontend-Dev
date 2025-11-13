let feedback = "Great product! Fast delivery and amazing sound quality!";
let words = feedback.replace(/[^\w\s]/g, '').split(/\s+/).filter(Boolean);
let wordCount = words.length;
let lower = feedback.toLowerCase();
let negative = lower.includes('bad') || lower.includes('poor');
console.log('Feedback:', feedback);
console.log('Word count:', wordCount);
console.log(negative ? 'Needs Improvement' : 'Positive Feedback');
