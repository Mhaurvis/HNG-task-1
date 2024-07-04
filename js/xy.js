function updateTimeAndDay() {
    const now = new Date();
    
    // Get the current time in UTC
    const utcHours = now.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
    const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
    
    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[now.getUTCDay()];

    // Update the HTML content
    document.getElementById('utc-time').textContent = `${utcTime}`;
    document.getElementById('day-of-week').textContent = `${dayOfWeek},`;
}

// Update the time and day immediately and then every second
updateTimeAndDay();
setInterval(updateTimeAndDay, 1000);