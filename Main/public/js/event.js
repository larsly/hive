const eventFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the event form
    const name = document.querySelector('#').value.trim();
    const description = document.querySelector('#').value.trim();
    const date = document.querySelector('#').value
  
    if (name && description && date) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/', {
        method: 'POST',
        body: JSON.stringify({ name, description, date}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the home page
        document.location.replace('/homepage');
      } else {
        alert(response.statusText);
      }
    }
  };