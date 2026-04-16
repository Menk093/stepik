function TransportMap({ vehicles }) {
  return vehicles.map(v => (
    <Marker key={v.id} position={v.coordinates} />
  ))
}
