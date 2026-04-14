async function analyzeWithAI(probeResult) {
  // Имитация AI
  if (probeResult.responseTime > 2000) {
    return {
      health: "degraded",
      confidence: 0.7,
      reason: "Response too slow",
    };
  }

  return {
    health: "healthy",
    confidence: 0.95,
    reason: "Everything OK",
  };
}

module.exports = { analyzeWithAI };