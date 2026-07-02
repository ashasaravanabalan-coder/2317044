import React, { useState } from "react";
import "./App.css";
import {Log} from "./Loggingmiddleware/logger";
const NOTIFICATIONS_DATA = {
  "notifications": [
    {
      "ID": "28e860a7-41fa-417d-a3b0-348f672ba9e0",
      "Type": "Event",
      "Message": "tech-fest",
      "Timestamp": "2026-07-02 03:22:39"
    },
    {
      "ID": "99cf854d-5b56-48f7-a5db-00accbdcf642",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-07-01 17:22:23"
    },
    {
      "ID": "6d05a0f6-2211-49b2-956c-1ee49ac67e04",
      "Type": "Event",
      "Message": "cult-fest",
      "Timestamp": "2026-07-01 09:52:07"
    },
    {
      "ID": "f7252867-3498-4254-8ef7-089fe8a5c2b7",
      "Type": "Placement",
      "Message": "Visa Inc. hiring",
      "Timestamp": "2026-07-01 08:51:51"
    },
    {
      "ID": "063efc12-7f79-4de7-9a59-6b2678f966a8",
      "Type": "Placement",
      "Message": "Microsoft Corporation hiring",
      "Timestamp": "2026-07-01 15:21:35"
    },
    {
      "ID": "4aea7d2d-17fb-47a7-a5cc-9cd12d4c1156",
      "Type": "Placement",
      "Message": "Amazon.com Inc. hiring",
      "Timestamp": "2026-07-01 13:51:19"
    },
    {
      "ID": "803873b5-c51d-4da6-8f31-a3c438b0d0b5",
      "Type": "Result",
      "Message": "end-sem",
      "Timestamp": "2026-07-01 08:51:03"
    },
    {
      "ID": "c9962f47-ec5e-4476-a757-1feed55aabfa",
      "Type": "Placement",
      "Message": "Berkshire Hathaway Inc. hiring",
      "Timestamp": "2026-07-02 01:20:47"
    },
    {
      "ID": "0d6d784b-6d48-4a47-b58b-0f4b2e557e16",
      "Type": "Placement",
      "Message": "CSX Corporation hiring",
      "Timestamp": "2026-07-01 21:20:31"
    },
    {
      "ID": "167a7e53-26a5-4423-b357-70f62d782d86",
      "Type": "Result",
      "Message": "internal",
      "Timestamp": "2026-07-01 11:20:15"
    },
    {
      "ID": "d33a72dc-443d-4110-b9a0-3fbb33f088af",
      "Type": "Placement",
      "Message": "CSX Corporation hiring",
      "Timestamp": "2026-07-02 04:19:59"
    },
    {
      "ID": "96df5890-9b0d-4c16-8469-86ee63dfe306",
      "Type": "Event",
      "Message": "farewell",
      "Timestamp": "2026-07-01 05:49:43"
    },
    {
      "ID": "b91aac30-ca2b-4c85-bb59-d7e491b604b3",
      "Type": "Placement",
      "Message": "Apple Inc. hiring",
      "Timestamp": "2026-07-01 11:19:27"
    },
    {
      "ID": "8d6976e7-aaea-43df-b2f7-f24cba3d118d",
      "Type": "Event",
      "Message": "induction",
      "Timestamp": "2026-07-01 10:19:11"
    },
    {
      "ID": "01f44687-83a9-4090-a82a-410261e917d5",
      "Type": "Result",
      "Message": "project-review",
      "Timestamp": "2026-07-01 20:48:55"
    },
    {
      "ID": "a6a6cbea-58c6-456b-b8aa-c3fab9aedcc1",
      "Type": "Result",
      "Message": "end-sem",
      "Timestamp": "2026-07-01 11:18:39"
    },
    {
      "ID": "4ec77200-3dc0-40f1-bb31-714ddc4a9bb2",
      "Type": "Result",
      "Message": "mid-sem",
      "Timestamp": "2026-07-02 04:18:23"
    },
    {
      "ID": "ad592b33-394c-46c8-83d2-f4a52de25938",
      "Type": "Event",
      "Message": "induction",
      "Timestamp": "2026-07-01 20:48:07"
    },
    {
      "ID": "5afda03a-a6e8-4b4d-a269-5e9b5c64a533",
      "Type": "Placement",
      "Message": "Marvell Technology Inc. hiring",
      "Timestamp": "2026-07-01 05:47:51"
    },
    {
      "ID": "ac421c02-8eaa-4b59-8cf6-30aa6a50d156",
      "Type": "Event",
      "Message": "farewell",
      "Timestamp": "2026-07-01 06:17:35"
    }
  ]
};
function App() {
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [topN, setTopN] = useState(5);
  const [showPriority, setShowPriority] = useState(true);
  const allNotifications = NOTIFICATIONS_DATA.notifications || [];
  const getFilteredNotifications = () => {
    let filtered = [...allNotifications];
    if (filterType !== "All") {
      filtered = filtered.filter(n => n.Type === filterType);
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(n => 
        n.Message.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    filtered.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
    return filtered;
  };
  const filteredNotifications = getFilteredNotifications();
  const priorityNotifications = filteredNotifications.slice(0, topN);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  const getTypeColor = (type) => {
    switch(type) {
      case 'Event': return '#1976d2';
      case 'Result': return '#2e7d32';
      case 'Placement': return '#ed6c02';
      default: return '#757575';
    }
  };
  const getTypeEmoji = (type) => {
    switch(type) {
      case 'Event': return '🎉';
      case 'Result': return '📊';
      case 'Placement': return '💼';
      default: return '📌';
    }
  };
  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>📋 Notification Dashboard</h1>
          <p className="subtitle">all your notifications</p>
        </header>
        {/* Controls */}
        <div className="controls">
          <div className="control-group">
            <label>Filter by Type:</label>
            <select 
              value={filterType} 
              onChange={(e) => setFilterType(e.target.value)}
              className="select"
            >
              <option value="All">All Types</option>
              <option value="Event">🎉 Event</option>
              <option value="Result">📊 Result</option>
              <option value="Placement">💼 Placement</option>
            </select>
          </div>
          <div className="control-group">
            <label>Search:</label>
            <input 
              type="text" 
              placeholder="Search notifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="control-group">
            <label>Top N:</label>
            <input 
              type="number" 
              value={topN}
              min="1"
              max="20"
              onChange={(e) => setTopN(Number(e.target.value))}
              className="number-input"
            />
          </div>
          <button 
            className="toggle-btn"
            onClick={() => setShowPriority(!showPriority)}
          >
            {showPriority ? 'Hide' : 'Show'} Priority
          </button>
        </div>
        {/* Stats */}
        <div className="stats">
          <span>Total: {allNotifications.length} notifications</span>
          <span>Filtered: {filteredNotifications.length}</span>
          <span>Priority: {priorityNotifications.length}</span>
        </div>
        {/* Priority Notifications */}
        {showPriority && priorityNotifications.length > 0 && (
          <section className="section">
            <h2 className="section-title priority-title">
              🔥 Priority Notifications (Top {topN})
            </h2>
            <div className="notification-list">
              {priorityNotifications.map((notification) => (
                <div key={notification.ID} className="notification-card priority-card">
                  <div className="card-header">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(notification.Type) }}
                    >
                      {getTypeEmoji(notification.Type)} {notification.Type}
                    </span>
                    <span className="timestamp">{formatDate(notification.Timestamp)}</span>
                  </div>
                  <div className="card-body">
                    <p className="message">{notification.Message}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* All Notifications */}
        <section className="section">
          <h2 className="section-title all-title">
            📢 All Notifications ({filteredNotifications.length})
          </h2>
          {filteredNotifications.length === 0 ? (
            <div className="empty-state">
              <p>No notifications found</p>
            </div>
          ) : (
            <div className="notification-list">
              {filteredNotifications.map((notification) => (
                <div key={notification.ID} className="notification-card">
                  <div className="card-header">
                    <span 
                      className="type-badge"
                      style={{ backgroundColor: getTypeColor(notification.Type) }}
                    >
                      {getTypeEmoji(notification.Type)} {notification.Type}
                    </span>
                    <span className="timestamp">{formatDate(notification.Timestamp)}</span>
                  </div>
                  <div className="card-body">
                    <p className="message">{notification.Message}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
        {/* Footer */}
        <footer className="footer">
          <p>© 2026 Notification Dashboard | {allNotifications.length} Total Notifications</p>
        </footer>
      </div>
    </div>
  );
}
export default App;