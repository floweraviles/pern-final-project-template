export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3333"
    : "https://glacial-depths-73081.herokuapp.com";
};
