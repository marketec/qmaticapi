// Replace these values with your actual credentials
const apiToken = "989847f9-516e-43ee-9aff-02c55e576a3e";
const username = "mark";
const password = "Qmatic1234";

// Set the server URL and the API endpoint
const server = "https://us-publicsales.qmatic.cloud";
const endpoint = "/rest/managementinformation/v2/branches/";

// Create the request headers
const headers = new Headers({
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Auth-token": apiToken,
});

// Make a GET request to the Qmatic API using the Fetch API
fetch(server + endpoint, {
  method: "GET",
  headers: headers,
  credentials: "include",
  mode: "cors",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((branches) => {
    const branchInfoDiv = document.getElementById("branchInfo");

    branches.forEach((branch) => {
      const branchElement = document.createElement("div");
      branchElement.innerHTML = `
        <h2>Branch ID: ${branch.id}</h2>
        <p>Branch Name: ${branch.name}</p>
        <p>Number of Served Services: ${branch.numberOfServedServices}</p>
        <p>Service Level: ${branch.serviceLevel}</p>
      `;

      branchInfoDiv.appendChild(branchElement);
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
