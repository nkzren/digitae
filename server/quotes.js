const quote = (source, text) => {
  return {
    source,
    text,
  };
};

const quoteList = [
  quote(
    "Ezekiel 25:17",
    "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness. For he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know I am the Lord when I lay my vengeance upon you."
  ),
  quote(
    "Obi Wan Kenobi. Star Wars: Episode III - The Revenge of the Sith",
    "You were the Chosen One! It was said that you would destroy the Sith, not join them. Bring balance to the force, not leave it in darkness. You were my brother, Anakin! I loved you."
  ),
  quote(
    "Tyler Durden, Fight Club (1999)",
    "God damn it, an entire generation pumping gas, waiting tables; slaves with white collars. Advertising has us chasing cars and clothes, working jobs we hate so we can buy shit we don't need. We're the middle children of history, man. No purpose or place. We have no Great War. No Great Depression. Our Great War's a spiritual war... our Great Depression is our lives. We've all been raised on television to believe that one day we'd all be millionaires, and movie gods, and rock stars. But we won't. And we're slowly learning that fact. And we're very, very pissed off."
  ),
  quote(
    "Rocky Balboa (2006)",
    "The world ain't all sunshine and rainbows. It's a very mean and nasty place, and I don't care how tough you are, it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't about how hard you hit. It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That's how winning is done!"
  ),
  quote(
    "Rick Astley. Never Gonna Give You Up (1987)",
    "We're no strangers to love, you know the rules and so do I. A full commitments what I'm thinking of. You wouldn't get this from any other guy. I just wanna tell you how I'm feeling, gotta make you understand. Never gonna give you up, never gonna let you down, never gonna run around and desert you. Never gonna make you cry, never gonna say goodbye, never gonna tell a lie and hurt you"
  ),
];

const getRandomQuote = () => {
  const random = Math.floor(Math.random() * quoteList.length);
  return quoteList[random];
};

module.exports = {
  getRandomQuote,
  quoteList,
};
