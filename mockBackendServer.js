app.get("/api/realtime", (req, res) => {
  const vehicles = generateVehicles(50)
  res.json(vehicles)
})
