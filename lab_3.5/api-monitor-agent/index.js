const cron = require("node-cron");
const { checkEndpoint } = require("./probe");
const { analyzeResult, dispatchAction } = require("./analyzer");
const { analyzeWithAI } = require("./aiAnalyzer");
const logger = require("./logger");

const URL = "https://jsonplaceholder.typicode.com/posts/1";

let consecutiveFailures = 0;

cron.schedule("*/5 * * * *", async () => {
  logger.info("Starting check...");

  const result = await checkEndpoint(URL);

  // если медленно → используем AI
  if (result.responseTime > 2000) {
    const ai = await analyzeWithAI(result);
    logger.warn("AI ANALYSIS: " + JSON.stringify(ai));
  }

  const analysis = analyzeResult(result);

  consecutiveFailures = dispatchAction(
    analysis,
    consecutiveFailures
  );

  logger.info("Check finished");
});