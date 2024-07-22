const { REACT_APP_BACKEND } = process.env;
const config = {
  serverUrl: `http://${REACT_APP_BACKEND}:5000`,
}
export default config;