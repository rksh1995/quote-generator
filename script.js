const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't count the days, make the days count. - Muhammad Ali"
  ];
  
  const quoteText = document.getElementById("quoteTexts");
  const generateQuotes = document.getElementById('generate-quotes');
  generateQuotes.addEventListener("click",generateQuote);

  function generateQuote(){
    const randomIndex = Math.floor(Math.random()*quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = randomQuote;

  }
  generateQuote();