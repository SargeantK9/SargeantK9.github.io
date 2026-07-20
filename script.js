function generateForm() {
  // 1. Create the dark background overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;";

  // 2. Create the form container
  const form = document.createElement("form");
  form.style.cssText = "background: white; padding: 20px; display: flex; flex-direction: column; gap: 10px; border-radius: 5px;";

  // 3. Create the inputs
  const nameInput = document.createElement("input");
  nameInput.placeholder = "Name";
  nameInput.required = true;

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Email";
  emailInput.required = true;

  const messageInput = document.createElement("textarea");
  messageInput.placeholder = "Message";
  messageInput.required = true;

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Send me your message";
  submitBtn.type = "submit";

  // 4. Handle the form submission
  form.onsubmit = function(event) {
    event.preventDefault(); // Prevents the page from reloading
    
    // Log the data to the console (you can replace this with email logic later)
    console.log("Name:", nameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Message:", messageInput.value);
    
    // Close the popup by removing the overlay from the body
    document.body.removeChild(overlay);
  };

  // 5. Assemble the elements and inject them into the webpage
  form.append(nameInput, emailInput, messageInput, submitBtn);
  overlay.appendChild(form);
  document.body.appendChild(overlay);
}
