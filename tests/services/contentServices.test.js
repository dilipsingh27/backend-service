const controllerServices = require("../../src/services/contentServices");
const { Contents,Entries } = require("../../src/models");

describe("User Services", () => {
  describe("POST /contents", () => {
    it("should add content", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Contents, "create").mockResolvedValue(mockResult);
      const result = await controllerServices.addContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /deleteContent", () => {
    it("should delete content", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Contents, "destroy").mockResolvedValue(mockResult);
      const result = await controllerServices.deleteContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /deleteEntry", () => {
    it("should delete entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "destroy").mockResolvedValue(mockResult);
      const result = await controllerServices.deleteContent(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /updateEntry", () => {
    it("should update entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "update").mockResolvedValue(mockResult);
      const result = await controllerServices.updateEntry(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
  describe("POST /addEntry", () => {
    it("should add entry", async () => {
      const mockResult = {
        content: "test",
      };
      jest.spyOn(Entries, "create").mockResolvedValue(mockResult);
      const result = await controllerServices.addEntry(mockResult);
      expect(result).toEqual(mockResult);
    });
  });
});