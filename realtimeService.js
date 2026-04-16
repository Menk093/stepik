setInterval(async () => {
  const data = await fetch("/api/realtime").then(r => r.json())
  updateStore(data)
}, 5000)
