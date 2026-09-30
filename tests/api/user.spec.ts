import { test, expect } from '@playwright/test';
import { config } from '../../config';

const API_BASE = config.api.baseURL;

test.describe('Users API', () => {
  // Checks both the collection response and the required user contract.
  test('GET /users?page=2 returns a valid list of users', async ({ request }) => {
    const response = await request.get(`${API_BASE}/users?page=2`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.data)).toBeTruthy();
    expect(body.data.length).toBeGreaterThan(0);

    for (const user of body.data) {
      expect(user).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          email: expect.any(String),
          first_name: expect.any(String),
          last_name: expect.any(String),
        }),
      );
    }
  });

  // ReqRes echoes the submitted fields and supplies server-generated metadata.
  test('POST /users creates a user and echoes the payload', async ({ request }) => {
    const payload = { name: 'morpheus', job: 'leader' };
    const response = await request.post(`${API_BASE}/users`, { data: payload });

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.name).toBe(payload.name);
    expect(body.job).toBe(payload.job);
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });

  // ReqRes does not persist test data, so this documents the create-side
  // contract without asserting a follow-up GET that the service cannot support.
  test('bonus: create-then-verify flow structure', async ({ request }) => {
    const createPayload = { name: 'trinity', job: 'operator' };
    const createResponse = await request.post(`${API_BASE}/users`, {
      data: createPayload,
    });
    expect(createResponse.status()).toBe(201);

    const created = await createResponse.json();
    expect(created.id).toBeTruthy();
    expect(created.name).toBe(createPayload.name);
    expect(created.job).toBe(createPayload.job);

  });
});