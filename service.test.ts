import repo from './repo';
import MyService from './service';

jest.mock('./repo');

describe('my suite', () => {
  test('original mock', async () => {
    const service = new MyService();
    await expect(service.find()).resolves.toBe('ZZZ');
  });
  test('new mock', async () => {
    (repo.findOne as jest.Mock).mockResolvedValue('CCC')
    const service = new MyService();
    await expect(service.find()).resolves.toBe('CCC');
  });
});
