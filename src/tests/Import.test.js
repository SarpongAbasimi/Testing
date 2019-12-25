import allmethods, { math }   from '../Components/Import';


jest.mock('../Components/Import', () => {
  return {
    esModule:true,
    math: jest.fn(()=> 3)
  }
})

describe('math', ()=> {
  it('returns a number', ()=> {
    expect(math()).toBe(3)
  })
})