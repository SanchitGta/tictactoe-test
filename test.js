const assert = require('assert');
const axios = require('axios');

const API_URL = 'http://localhost:3001/tasks';

describe('Task API Integration Tests', () => {
  it('should add a task', async () => {
    const task = { title: 'Test Task' };
    const response = await axios.post(API_URL, task);
    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.data.title, task.title);
  });
});
