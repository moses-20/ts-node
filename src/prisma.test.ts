describe("prisma configuration", () => {
  test("prisma can connect to db", async () => {
    const consoleSpy = jest.spyOn(console, "log");

    console.log("hola");

    expect(consoleSpy).toBeCalledWith("hola");
  });
});
