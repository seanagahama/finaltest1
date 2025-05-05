<script>
  // Sample data for console/gadget reviews
  const reviews = [
    {
      image_url: "https://placehold.co/300x200/003791/FFFFFF?text=CONSOLEIMG",
      title: "PlayStation 5 Review",
      description: "A powerful console with immersive graphics and exclusive titles."
    },
    {
      image_url: "https://placehold.co/300x200/E60012/FFFFFF?text=CONSOLEIMG",
      title: "Xbox Series X Review",
      description: "Top-tier performance with Game Pass integration for endless gameplay."
    },
    {
      image_url: "https://placehold.co/300x200/107C10/FFFFFF?text=CONSOLEIMG",
      title: "Nintendo Switch OLED Review",
      description: "Flexible gaming at home or on the go, now with a brilliant OLED display."
    },
    {
      image_url: "https://placehold.co/300x200/000000/FFFFFF?text=GADGETIMG",
      title: "Samsung Galaxy Watch 6",
      description: "A sleek wearable packed with features for fitness and productivity."
    },
    {
      image_url: "https://placehold.co/300x200/FF0000/FFFFFF?text=GADGETIMG",
      title: "Razer Gaming Headset",
      description: "Immerse yourself in high-quality sound with this sleek gaming headset."
    },
    {
      image_url: "https://placehold.co/300x200/0078D7/FFFFFF?text=GADGETIMG",
      title: "Logitech G Pro Wireless Mouse",
      description: "Lightweight, precise, and built for competitive gaming."
    }
  ];

  // Get the container
  const featureSections = document.querySelectorAll(".feature-section");
  const itemsPerSection = 3;

  // Clear any placeholder content
  featureSections.forEach(section => section.innerHTML = '');

  // Loop through reviews and split them between the two sections
  reviews.forEach((item, index) => {
    const section = featureSections[Math.floor(index / itemsPerSection)];

    const div = document.createElement("div");
    div.classList.add("feature");
    div.innerHTML = `
      <img src="${item.image_url}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;

    section.appendChild(div);
  });
</script>
