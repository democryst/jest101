describe('unit test life cycle with jest', function(){
    beforeAll(function(){console.log("Before All")});//ก่อนtest ทั้งหมด ใช้กับพวกเปิด DB
    afterAll(function(){console.log("After All")});//ก่อนแต่ละtest case
    beforeEach(function(){console.log("Before Each")});//หลังแต่ละtest case
    afterEach(function(){console.log("After Each")});//หลังtest จบทั้งหมด

    it('Run Test 01', function(){
        console.log("Test Cases");
        expect(true).toBe(true);
    });

    it('Run Test 02', function(){
        console.log("Test krub");
        expect(true).toBe(true);
    });
});