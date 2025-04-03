const assert = require('assert');
const axios = require('axios');

const API_URL = 'http://localhost:3001/tasks';

describe('Task API Integration Tests', () => {
  let taskId;

  it('should add a task', async () => {
    const task = { title: 'Test Task' };
    const response = await axios.post(API_URL, task);
    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.data.title, task.title);
    taskId = response.data.id;
  });

  it('should edit a task', async () => {
    const updatedTask = { title: 'Updated Task' };
    const response = await axios.put(`${API_URL}/${taskId}`, updatedTask);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.title, updatedTask.title);
  });

  it('should mark a task as complete', async () => {
    const response = await axios.patch(`${API_URL}/${taskId}/complete`);
    assert.strictEqual(response.status, 200);
    assert.strictEqual(response.data.completed, true);
  });

  it('should delete a task', async () => {
    const response = await axios.delete(`${API_URL}/${taskId}`);
    assert.strictEqual(response.status, 204);

    // Verify that the task is deleted
    try {
      await axios.get(`${API_URL}/${taskId}`);
    } catch (error) {
      assert.strictEqual(error.response.status, 404);
      return;
    }
    assert.fail('Task should have been deleted');
  });
});
