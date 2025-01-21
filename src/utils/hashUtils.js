// Function to format expiration time
export const formatExpirationTime = (timestamp) => {
  return new Date(timestamp).toLocaleString();
};

// Function to check if a date is expired
export const isExpired = (expiresAt) => {
  return Date.now() > new Date(expiresAt).getTime();
};

// Function to format time remaining
export const formatTimeRemaining = (expiresAt) => {
  const remaining = new Date(expiresAt).getTime() - Date.now();
  
  if (remaining <= 0) {
    return 'Expired';
  }

  const hours = Math.floor(remaining / (1000 * 60 * 60));
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

  if (hours > 24) {
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} remaining`;
  }

  if (hours > 0) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} min remaining`;
  }

  return `${minutes} min remaining`;
};