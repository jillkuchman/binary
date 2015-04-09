describe('binary', function() {
    it("will return 0 if the user submits 0", function() {
        expect(binary(0)).to.equal(0);
    });
    it("will return 1 if the user submits 1", function() {
        expect(binary(1)).to.equal(1);
    });
    it("will return 2 if the user submits 10", function() {
        expect(binary(101010001011)).to.equal(2);
    });
});
