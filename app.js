const quotes = [
  "Looking sharp!",
  "That’s fresh!",
  "Nice combo!",
  "You nailed it!",
  "Stylin' up!"
];

function toggle(item) {
  const el = document.getElementById(item);
  el.classList.toggle('hidden');
  document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
}