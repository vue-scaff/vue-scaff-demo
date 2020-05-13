export default (group = {}) => {
  // Each Utils
  Object.keys(group).map(key => {
    // Secret
    const secret = key
      // Remove Vue
      .replace(/^vue-/, "$")
      // Change Hump
      .replace(/-(\w)/g, ($0, $1) => $1.toUpperCase());

    if (secret != key) {
      // Name
      group[secret] = group[key];
      // Delete Origin
      delete group[key];
    }
  });
  // Return Utils
  return group;
};
