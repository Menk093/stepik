```mermaid
flowchart LR
User --> Chat
Chat --> Agent
Agent --> API
API --> DB
API --> Realtime
Realtime --> Frontend
Frontend --> Map
Frontend --> Charts

---

## 🧠 **State Plan**

```md id="state_dashboard"
realtimeStore:
- vehicles: []

uiStore:
- filters
- selectedRoute
- chartConfig

chatStore:
- messages
- commands
