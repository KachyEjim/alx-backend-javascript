export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure

    if (success) {
      resolve('Data fetched successfully!');
    } else {
      reject(new Error('Failed to fetch data.'));
    }
  });
}
