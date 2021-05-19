'use strict';

const { IsInChina, Environment } = require('../sdk/others');

describe('Others', () => {
  test('IsInChina', async () => {
    const client = new IsInChina();
    const res = await client.inChina();

    expect(res).toEqual({
      IsInChina: expect.any(Boolean),
    });
  });

  test('Environment', async () => {
    const client = new Environment();
    const res = await client.useGlobalStore();

    expect(res).toEqual(false);
  });

  test('Environment: GLOBAL_ACCELERATOR_NA=true', async () => {
    process.env.GLOBAL_ACCELERATOR_NA = true;
    const client = new Environment();
    const res = await client.useGlobalStore();

    expect(res).toEqual(true);
  });
});
