import { db } from "./firebase.js";
import { ref, set } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

set(ref(db, "gameRooms/testRoom"), {
  status: "room created",
  time: Date.now(),
  currentTurn: "knight"
});
