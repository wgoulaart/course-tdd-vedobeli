const { sum, minus, divide, multiply} = require('./calculator');

describe('Calculator SUM', () => {
  it('should sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  it('should sum 2 and 2 even if one of them is a string and the result must be 4', () => {
    expect(sum('2', '2')).toBe(4);
  });

  it('should throw an error if what is provided to the method cannot be summed', () => {
    expect(() => {
      sum('', '2');
    }).toThrowError();

    expect(() => {
      sum([2, 2]);
    }).toThrowError();

    expect(() => {
      sum({});
    }).toThrowError();

    expect(() => {
      sum();
    }).toThrowError();
  });
});


describe('Calculator Minus', () => {
  it('should minus 2 and 2 and te result must be 8', () => {
    expect(minus(10, 2)).toBe(8)
  })
  it('should minus 2 and 2 even if one of them is a string and the result must be 4', () => {
    expect(minus('2', '2')).toBe(0);
  });
})

describe('Calculator Divide', () => {
  it('should divide 2 and 2 and te result must be 5', () => {
    expect(divide(10, 2)).toBe(5)
  })
  it('should divide 2 and 2 even if one of them is a string and the result must be 0', () => {
    expect(divide('2', '2')).toBe(1);
  });
})

describe('Calculator multiply', () => {
  it('should multiply 2 and 2 and te result must be 20', () => {
    expect(multiply(10, 2)).toBe(20)
  })
  it('should multiply 2 and 2 even if one of them is a string and the result must be 4', () => {
    expect(multiply('2', '2')).toBe(4);
  });
})