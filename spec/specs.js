describe('binary', function() {
    it("will return 0 if the user submits 0", function() {
        expect(binary("0")).to.equal(0);
    });
    it("will return 1 if the user submits 1", function() {
        expect(binary("1")).to.equal(1);
    });
    it("will return 2 if the user submits 10", function() {
        expect(binary("10")).to.equal(2);
    });
    it("will return 3 if the user submits 11", function() {
        expect(binary("11")).to.equal(3);
    });
    it("will return 853 if the user submits 1101010101", function() {
        expect(binary("1101010101")).to.equal(853);
    });it("will return if the user submits 111111111101010111010001010100101111010100010101101011", function() {
        expect(binary("111111111111111111111")).to.equal(2097151
        );
    });
});
