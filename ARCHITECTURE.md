```mermaid
flowchart LR
User --> Frontend
Frontend --> AgentCore
AgentCore --> Stores
Frontend --> Backend
Backend --> LLM
LLM --> Backend
Backend --> Frontend

subgraph Frontend
ChatWidget
ParkingMap
Stores
end


---

## 🧠 **State Plan**

```md id="state_plan"
parkingMapStore:
- spots: [{id, coordinates, status, price, sensorId}]
- methods: findClosestSpot, updateStatus

bookingStore:
- bookings: [{id, spotId, time, duration}]
- methods: createBooking, cancelBooking

chatStore:
- messages: [{role, content}]
- loading: boolean
