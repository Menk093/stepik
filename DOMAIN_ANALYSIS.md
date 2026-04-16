# Domain Analysis — Transport Dashboard

## Сущности

Vehicle:
- id
- type (bus, trolleybus, tram)
- routeId
- coordinates (lat, lng)
- speed
- delay (minutes)

Route:
- id
- number
- stops: []

Stop:
- id
- name
- coordinates
- пассажиропоток

Trip:
- id
- vehicleId
- routeId
- startTime
- endTime

## Источники данных
- Mock API (симуляция GTFS)
- REST API (история)
- Поток данных (WebSocket / polling)
