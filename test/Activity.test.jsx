import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import Activities from '../src/views/Activities';
import { WrapperTest } from "./WrapperTest";
import {getActivities, getActivitiesManagement} from '../src/services/activitiesService';
import {getCropsByProjectId} from '../src/utils/getCropsByProjectId';







// Mock de los servicios
vi.mock("../src/services/activitiesService", () => ({
    getActivities: vi.fn(),
    getActivitiesManagement: vi.fn()
}));

vi.mock("../src/utils/getCropsByProjectId", () => ({
    getCropsByProjectId: vi.fn()
}));

describe("Activity view", () => {
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
        // Configuramos datos de usuario simulados
        const mockUserData = JSON.stringify({
            id: 123,
            nombre: "John Doe",
            email: "john.doe@cor.com",
            projectsByUser: [
                {
                    id: 1,
                    nombre: "Proyecto 1",
                    crops: [
                        { 
                            id: "test-crop-id", 
                            nombre: "Test Crop",
                            seasons: [
                                {
                                    id:"test-season-id",
                                    nombre:"Test Season"
                                }
                            ]
                        }
                    ],
                },
            ],
        });

        // Mock del sessionStorage
        vi.spyOn(sessionStorage, "getItem").mockImplementation((key) => {
            if (key === "user_data") {
                return mockUserData;
            }
            return null;
        });

        window.HTMLDialogElement.prototype.showModal = vi.fn();
        window.HTMLDialogElement.prototype.close = vi.fn();
    });

    afterEach(() => {
        vi.resetAllMocks(); //restore all mocks to their original implementation
    });

    it("Renderiza el título y modales de la vista de ACTIVIDADES", async () => {

        const mockCrops = [
            { id: "test-crop-id", nombre: "Test Crop",
                seasons: [
                    {id:"test-season-id", nombre:"Test Season"}
                    ]
                 }
        ];

        const mockActivities = [{ 
            idActivity:"test-activity-id",
            name: "Test Activity",
            description: "Test Activity Description",
            idCategory: "test-categoria-id",
            category: "Test Category",
            categoryDescription:"Test Category Description"
        }];


        const mockActivitiesManagement = [{
            idManagement: "test-management-id",
            idSeason: "test-season-id",
            idActivity: "test-activity-id",
            cost: 10000,
            idSupplyExpense: null,
            date: "2024-01-01T05:00:00.000Z"
  }];

        getActivities.mockResolvedValue(mockActivities);
        getActivitiesManagement.mockResolvedValue(mockActivitiesManagement);
        getCropsByProjectId.mockReturnValue(mockCrops);

        

        const { container } = render(
           <WrapperTest>
            <Activities />
           </WrapperTest>
          );


        expect(screen.getByText("REGISTRO DE ACTIVIDADES")).toBeInTheDocument();
        


        const buttonPlus = screen.getByLabelText("plus")
        fireEvent.click(buttonPlus)


        const elements = await screen.findAllByText("Añadir Actividad");
        expect(elements.length).toBeGreaterThan(0);


        const buttonModificar = screen.getByLabelText("modificar")
        fireEvent.click(buttonModificar)

        const btnModal = screen.getByLabelText("nueva_actividad")
        expect(btnModal).toBeInTheDocument();

        
        expect(container).toMatchSnapshot();
    });
}); 