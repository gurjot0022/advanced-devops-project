CREATE TABLE IF NOT EXISTS demo_status (
  id SERIAL PRIMARY KEY,
  message VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO demo_status (message) VALUES ('Database initialized for Advanced DevOps Project');
