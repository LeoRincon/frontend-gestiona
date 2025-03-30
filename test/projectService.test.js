import { describe, it, vi, expect } from "vitest";
import * as projectService from "../src/services/projectService";

describe("fetchProjects service", () => {

  it("fetchProjects should return an array of projects", async () => {
    const mockResponse = [
      {
        id: 1,
        nombre: "Project 1",
        descripcion: "Description 1",
      },
      {
        id: 2,
        nombre: "Project 2",
        descripcion: "Description 2",
      },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    );

    const projects = await projectService.fetchProjects();

    expect(projects).toBeDefined();
    expect(projects).toEqual(mockResponse);
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty("id");
  });
});