export function formatDate(timestamp) {
    if(!timestamp) return "-";
    // Create a new Date object from the timestamp
    const date = new Date(timestamp);
  
    // Get year in Buddhist Era (BE) format
    const yearBE = date.getFullYear() + 543; // Add 543 to convert to BE
  
    // Get two-digit day, month, and hours/minutes with leading zeros
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    // Format the date string
    const formattedDate = `${day}/${month}/${yearBE}, ${hours}:${minutes}`;
  
    return formattedDate;
  }

  export function truncateText(text, maxLength = 100) {
    if (text.length <= maxLength) {
      return text;
    }
  
    return `${text.slice(0, maxLength - 3)}...`;
  }