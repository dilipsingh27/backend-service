const contentController = require("../../src/controllers/contentController");
const contentServices = require("../../src/services/contentServices");
describe("User Controller", () => {
  describe("add content", () => {
    it("should add content", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      contentServices.addContent = jest.fn().mockResolvedValue({ _id: "1" });
      await contentController.addContent(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("add fields", () => {
    it("should add fields", async () => {
      const req = {
        params: {
          contentId: "1",
        },
        body: {
          field: "field",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      contentServices.addField = jest.fn().mockResolvedValue({ _id: "1" });
      await contentController.addField(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ _id: "1" });
    });

  });
 
  describe("get contents", () => {
    it("should get contents", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      contentServices.getContents = jest.fn().mockResolvedValue({ _id: "1" });
      await contentController.getContents(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ _id: "1" });
    });
  });
  describe("update content field", () => {
    it("should update content field", async () => {
        const req = {
            params: {
            contentId: "1",
            },
            body: {
            field: "field",
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
        };
        contentServices.updateField = jest
            .fn()
            .mockResolvedValue({ _id: "1" });
        await contentController.updateField(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ _id: "1" });
        });
    
  });
  describe("get content count", () => {
    it("should get content count", async () => {
      const req = {
        body: {
          content: "content",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      contentServices.getContentCount = jest.fn().mockResolvedValue({ _id: "1" });
      await contentController.getContentCount(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
    });

    
  });
  describe("get content by id", () => {
    it("should get content by id", async () => {
      const req = {
        params: {
          contentId: "1",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn().mockReturnThis(),
      };
      contentServices.getContentById = jest.fn().mockResolvedValue({ _id: "1" });
      await contentController.getContent(req, res);
      expect(res.status).toHaveBeenCalledWith(500);
    });
  });
  describe("delete content field", () => {
    it("should delete content field", async () => {
        const req = {
            params: {
            contentId: "1",
            },
            body: {
            field: "field",
            },
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn().mockReturnThis(),
        };
        contentServices.deleteField = jest
            .fn()
            .mockResolvedValue({ _id: "1" });
        await contentController.deleteField(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith({ _id: "1" });
        });
  });
});