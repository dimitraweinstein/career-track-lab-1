import fetchQuote from './fetchquotes';

describe('fetch futurama quote', () => {
  it('should fetch and return a single quote from the futurama API in specific format', async () => {
    const characterQuote = await fetchQuote();

    expect.objectContaining(characterQuote);
  });
});
