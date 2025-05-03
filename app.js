const quotes = [
  "Hey! That looks cool!",
  "I love that outfit!",
  "Looking sharp!",
  "Now that’s style!",
  "Wow! Awesome choice!"
];

function toggleItem(id) {
  const item = document.getElementById(id);
  item.style.display = item.style.display === 'none' ? 'block' : 'none';
  document.getElementById('quote').innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
  // Placeholder: add confetti animation logic here
}
