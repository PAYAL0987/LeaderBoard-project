function addScore() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const country = document.getElementById('country').value;
    const score = document.getElementById('score').value;
  
    if (firstName && lastName && country && score) {
      const leaderboard = document.getElementById('leaderboard');
      const entry = document.createElement('p');
      entry.textContent = ${firstName} ${lastName} (${country}) - Score: ${score};
      leaderboard.appendChild(entry);
  
      // Clear inputs after adding
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('country').value = '';
      document.getElementById('score').value = '';
    } else {
      alert('Please fill in all fields');
    }
  }