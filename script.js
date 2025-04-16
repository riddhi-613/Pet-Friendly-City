// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle form submission
  document.getElementById('volunteer-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for volunteering! 🐾');
    this.reset();
  });
  
  // Dynamic pet carousel (AI-suggested)
  const pets = [
    { name: 'Milo', breed: 'Beagle', image: 'images/beagle_1.jpg' },
    { name: 'Bunny', breed: 'Holland Lop', image: 'images/holland_lops.jpg' },
    { name: 'Luna', breed: 'Persian Cat', image: 'images/perssian_cat.jpg' },
    { name: 'Shelly', breed: 'Musk Turtle', image: 'images/Musk_Turtle.jpg' },
    { name: 'Buddy', breed: 'Golden Retriever', image: 'images/golden_retreiver.jpg' },
  ];
  
  const petCarousel = document.getElementById('pet-carousel');
  pets.forEach(pet => {
    const petCard = document.createElement('div');
    petCard.className = 'pet-card';
    petCard.innerHTML = `
      <img src="${pet.image}" alt="${pet.name}" width="100%">
      <h3>Name : ${pet.name}</h3>
      <p>Breed : ${pet.breed}</p>
      <button class="adopt-button" onclick="alert('Thanks for showing interest in adopting ${pet.name}!')">Adopt Me</button>
    `;
    petCarousel.appendChild(petCard);
  });
  
  
  // Simple chatbot logic (simulate ChatGPT-like interaction)
  document.getElementById("send-button").addEventListener("click", sendMessage);
  document.getElementById("userInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;

    appendMessage("You", message);
    input.value = "";

    const typingIndicator = document.getElementById('typing-indicator');
    typingIndicator.style.display = 'block';

    setTimeout(() => {
      const response = generateBotReply(message);
      appendMessage("PawBuddy 🐶", response);
      typingIndicator.style.display = 'none';
    }, 1200);
  }

  function appendMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function generateBotReply(input) {
    const msg = input.toLowerCase();
    if (msg.includes("volunteer") || msg.includes("animal")) return "You can volunteer via the form above! 😊";
    if (msg.includes("adopt") || msg.includes("adoption")) return "Check out our Adopt a Pet section for adorable friends 🐶🐱";
    if (msg.includes("hello") || msg.includes("hi")) return "Hi there! I'm PawBuddy, your pet-friendly assistant 🐾";
    return "I'm still learning! Try asking about volunteering, adoption, or saying hi 🐶";
  }



  document.getElementById("volunteer-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const city = document.getElementById("city").value;
    const role = document.getElementById("role").value;
  
    try {
      const res = await axios.post("http://localhost:5000/api/volunteer", {
        name,
        city,
        role
      });
      alert("Thanks for volunteering!");
      e.target.reset();
    } catch (error) {
      alert("There was an error. Please try again later.");
    }
  });
  