export default ({ host }, replace) => {
  return {
    observe: `${host}/observe`,
    mock: replace(`/mock/{name}`)
  };
};
