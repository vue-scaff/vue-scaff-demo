// Clean Out
function clean(out) {
  // Clean Timeout
  clearTimeout(out);

  // Reset Out
  out = undefined;
}

export default time => {
  // Set Out for Clean Up
  let out;

  // Use Promise
  return new Promise(resolve => {
    // Assignment Out
    out = setTimeout(
      () => {
        // Clean Up
        clean(out);

        // Execute
        resolve();
      },
      // Time
      time || 0
    );
  });
};
