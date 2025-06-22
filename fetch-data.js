// Define the async function to fetch user data
async function fetchUserData() {
  // API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Select the data container
  const dataContainer = document.getElementById("api-data");

  try {
    // Fetch data from the API
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message
    dataContainer.innerHTML = "";

    // Create a <ul> to hold the user names
    const userList = document.createElement("ul");

    // Loop through users and create <li> for each name
    users.forEach(function (user) {
      const li = document.createElement("li");
      li.textContent = user.name;
      userList.appendChild(li);
    });

    // Append the list to the container
    dataContainer.appendChild(userList);
  } catch (error) {
    // Handle errors
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

// Run fetchUserData when DOM is fully loaded
document.addEventListener("DOMContentLoaded", fetchUserData);
