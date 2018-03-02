import { ProductFilterPipe } from './product-filter.pipe';

xdescribe('ProductFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new ProductFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
