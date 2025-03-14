/**
 * API Testing with Jest
 * This script tests JSONPlaceholder API (Fake API for Testing)
 */
const fetchMock = require("jest-fetch-mock");

beforeEach(() => {
    fetchMock.resetMocks();
});

const fetch = require('node-fetch');

// Base URL for the API
const BASE_URL = "https://jsonplaceholder.typicode.com";

/**
 * Test 1: Fetch all users
 */
// tnpm 

test("Mock API call for fetching a user", async () => {
    fetchMock.mockResponseOnce(
        JSON.stringify({ id: 1, name: "Mock User", email: "mock@example.com" })
    );

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    expect(response.status).toBe(200);

    const user = await response.json();
    expect(user.name).toBe("Mock User");
});