const LOG_ENDPOINT = "http://20.244.56.144/evaluation-service/logs";
const LEVELS = ["debug", "info", "warn", "error", "fatal"];
const STACK = ["frontend", "backend"];
export const Log = async (stack, level, packageName, message) => {
  try {
    if (!STACK.includes(stack)) stack = "frontend";
    if (!LEVELS.includes(level)) level = "info";
    const payload = {
      stack,
      level,
      package: packageName,
      message,
      timestamp: new Date().toISOString(),
    };
    await fetch(LOG_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    console.log("Log sent:", payload);
  } catch (err) {
    console.error("Logging failed:", err);
  }
};
export const logInfo = (pkg, msg) => Log("frontend", "info", pkg, msg);
export const logError = (pkg, msg) => Log("frontend", "error", pkg, msg);
export const logWarn = (pkg, msg) => Log("frontend", "warn", pkg, msg);