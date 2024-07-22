const request = require("supertest");
const express = require("express");
const healthRouter = require("../routers/health_router.js");

const app = express();
app.use(express.json());
app.use("/api/health", healthRouter);

describe("GET /api/health", () => {
    it("should get response", async () => {
        const res = await request(app).get("/api/health");
        expect(res.statusCode).toBe(200);
    });
});