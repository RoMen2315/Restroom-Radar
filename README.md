# Restroom Radar Backend

This is a minimal Express + MongoDB backend implementing basic models and API endpoints for the Restroom Radar application.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file and set `MONGO_URI` if not using the default local MongoDB instance.
3. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- `POST /review` – submit a new bathroom review.
- `GET /bathrooms` – list bathrooms.
- `POST /jobs/:id/accept` – accept a cleaning job.
- `POST /jobs/:id/complete` – complete a job with photo URLs.
- `POST /businesses/:id/claim` – business claims a restroom.
- `GET /dashboard` – placeholder dashboard endpoint.

Data models are defined in the `src/models` directory using Mongoose.
