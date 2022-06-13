import request from "supertest";
import app from ".";

describe("requests to base path", () => {
  const agent = request.agent(app);

  describe("GET /", () => {
    test("respond with status code 200", async () => {
      const response = await agent.get("/");

      expect(response.statusCode).toBe(200);
    });

    test("respond with welcome text", async () => {
      const response = await agent.get("/");

      expect(response.text).toEqual(
        `<p style='text-align: center'> welcome </p>`
      );
    });
  });

  describe("GET /:name", () => {
    test("log user to the console", async () => {
      const consoleSpy = jest.spyOn(console, "log");
      await agent.get("/moses");

      expect(consoleSpy).toBeCalledWith("moses logged in");
    });

    test("respond with name of user", async () => {
      const response = await agent.get("/moses");

      expect(response.text).toEqual("moses logged in");
    });
  });
});
