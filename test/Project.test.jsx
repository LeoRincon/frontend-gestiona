import { render, screen, waitFor } from "@testing-library/react";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { WrapperTest } from "./WrapperTest.jsx";
import Project from "../src/views/Project.jsx";
import * as projectService from "../src/services/projectService"

vi.mock("../src/services/projectService", () => ({
  getProjectsByUserId: vi.fn(),
  updateSessionProjects: vi.fn(),
}));

describe("Project view", () => {
  beforeAll(() => {
    //Polyfill to simulate the sessionStorage in the test environment
    const storageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
          store[key] = String(value);
        },
        removeItem: (key) => {
          delete store[key];
        },
        clear: () => {
          store = {};
        },
      };
    })();

    Object.defineProperty(global, "sessionStorage", {
      value: storageMock,
    });
  });

  beforeEach(() => {
    const mockUserData = JSON.stringify({
      id: 123,
      nombre: "John Doe",
      email: "john.doe@cor.com",
    });

    vi.spyOn(sessionStorage, "getItem").mockImplementation((key) => {
      if (key === "user_data") {
        return mockUserData;
      }
      return null;
    });
  });

  afterEach(() => {
    vi.resetAllMocks(); //restore all mocks to their original implementation
  });

  it("Renderiza InitialView cuando no hay proyectos", () => {
    const { container } = render(
      <WrapperTest>
        <Project />
      </WrapperTest>
    );

    expect(
      screen.getByText(/Crea un nuevo proyecto para comenzar/i)
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it("Renderiza ProjectsList cuando hay proyectos", async () => {
    const mockProjects = [
      { id: 1, nombre: "Proyecto 1", descripcion: "Descripción 1" },
      { id: 2, nombre: "Proyecto 2", descripcion: "Descripción 2" },
    ];

    projectService.getProjectsByUserId.mockResolvedValue(mockProjects);

    render(
      <WrapperTest>
        <Project />
      </WrapperTest>
    );
    await waitFor(() => {
      expect(screen.getByText(/Proyecto 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Proyecto 2/i)).toBeInTheDocument();
    });
  });
});
