const logger = require("./logger");

function analyzeResult(result, config = {}) {
  const expectedStatus = config.expectedStatus || 200;
  const maxResponseTime = config.maxResponseTime || 500;

  if (!result.success) {
    return {
      outcome: "ERROR",
      message: result.error,
    };
  }

  if (result.statusCode !== expectedStatus) {
    return {
      outcome: "FAILED_STATUS",
      message: `Wrong status: ${result.statusCode}`,
    };
  }

  if (result.responseTime > maxResponseTime) {
    return {
      outcome: "FAILED_TIMEOUT",
      message: `Slow response: ${result.responseTime}ms`,
    };
  }

  return {
    outcome: "SUCCESS",
    message: "OK",
  };
}

function dispatchAction(analysis, consecutiveFailures) {
  if (analysis.outcome === "SUCCESS") {
    logger.info("SUCCESS: " + analysis.message);
    return 0;
  }

  logger.error("FAIL: " + analysis.message);

  if (consecutiveFailures > 3) {
    console.error("ALERT:", analysis.message);
  }

  return consecutiveFailures + 1;
}

module.exports = { analyzeResult, dispatchAction };