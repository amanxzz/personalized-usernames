// Generate Random Name
document.getElementById("randomNameBtn").addEventListener("click", () => {
  const names = ["Emma", "Noah", "Olivia", "Liam", "Sophia", "Mason", "Isabella", "Jacob"];
  const randomName = names[Math.floor(Math.random() * names.length)];
  document.getElementById("randomName").innerText = `Random Name: ${randomName}`;
});

// Handle Theme-based Name Suggestions
document.getElementById("themeForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the page from reloading
  const theme = document.getElementById("themeInput").value.toLowerCase();
  const themeNames = {
    nature: ["Lily", "Ash", "River", "Sky"],
    fantasy: ["Arwen", "Frodo", "Gandalf", "Legolas"]
  };
  const results = themeNames[theme] || ["No suggestions found!"];
  const resultsList = document.getElementById("themeResults");
  resultsList.innerHTML = ""; // Clear previous results
  results.forEach((name) => {
    const li = document.createElement("li");
    li.innerText = name;
    resultsList.appendChild(li);
  });
});

// Handle Filtering
document.getElementById("applyFiltersBtn").addEventListener("click", () => {
  const gender = document.getElementById("genderFilter").value;
  const origin = document.getElementById("originFilter").value;

  let names = [
    { name: "Emma", gender: "female", origin: "english" },
    { name: "Liam", gender: "male", origin: "irish" },
    { name: "Aarav", gender: "male", origin: "indian" },
    { name: "Sophia", gender: "female", origin: "american" }
  ];

  // Apply filters
  const filteredNames = names.filter((n) =>
    (gender === "all" || n.gender === gender) &&
    (origin === "all" || n.origin === origin)
  );

  alert("Filtered Names: " + filteredNames.map((n) => n.name).join(", "));
});
