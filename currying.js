// Logging using currying

const logger = (level) => (tag) => (message) => {
  console.log(`${level} ::::: ${tag} ::::: ${message}`);
};

const infoLog = logger("INFO");
const debugLog = logger("DEBUG");

infoLog("App")("Application started");
debugLog("App")("Debug message");

// output:
// INFO ::::: App ::::: Application started
// DEBUG ::::: App ::::: Debug message
