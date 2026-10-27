# Incident Tracker (frontend)

    npm install
    npm run dev

- Put your backend URL in .env (VITE_API_URL)
- Backend needs CORS:  import cors from "cors";  app.use(cors());

Flow: Page -> Hook -> Context -> Service -> Backend
