export function parseIntent(message) {
  const text = message.toLowerCase()

  if (text.includes("найди")) {
    return { intent: "FIND_SPOT", params: {} }
  }

  if (text.includes("забронируй")) {
    return { intent: "BOOK_SPOT", params: {} }
  }

  return { intent: "UNKNOWN" }
}
