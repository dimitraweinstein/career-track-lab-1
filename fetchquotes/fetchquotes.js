import fetch from 'node-fetch';

const fetchQuote = async () => {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes');
  const body = await res.json();

  body.map((quote) => ({
    character: quote.character,
    text: quote.quote,
    image: quote.image
  }));

  return body[0];
    
};
export default fetchQuote;
