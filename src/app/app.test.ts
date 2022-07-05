import app from ".";
import request from "supertest";
import { createUser } from "../models/user.model";
import { prismaMock } from "../__mocks__/app";

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

  describe("GET /user", () => {
    const agent = request.agent(app);

    test("log user to the console", async () => {
      const consoleSpy = jest.spyOn(console, "log");
      await agent.get("/user?name=moses");

      expect(consoleSpy).toBeCalledWith("moses logged in");
    });

    test("create new user", async () => {
      const user = {
        id: 1,
        name: "moses",
        email: "moses@google.com",
      };

      prismaMock.user.create.mockResolvedValue(user);

      await expect(
        createUser({ name: "moses", email: "moses@google.com" })
      ).resolves.toEqual(user);
    });
  });

  // describe("GET /:name", () => {
  //   test("log user to the console", async () => {
  //     const consoleSpy = jest.spyOn(console, "log");
  //     await agent.get("/moses");

  //     expect(consoleSpy).toBeCalledWith("moses logged in");
  //   });

  //   test("respond with name of user", async () => {
  //     const response = await agent.get("/moses");

  //     expect(response.text).toEqual("moses logged in");
  //   });
  // });
});
