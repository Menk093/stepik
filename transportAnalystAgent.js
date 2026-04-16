export function analyze(message) {
  const text = message.toLowerCase()

  if (text.includes("автобус")) {
    return {
      type: "UPDATE_MAP_FILTER",
      payload: { vehicleType: "bus" }
    }
  }

  if (text.includes("график")) {
    return {
      type: "BUILD_CHART",
      payload: { metric: "load" }
    }
  }

  return { type: "UNKNOWN" }
}
