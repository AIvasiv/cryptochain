const Block = require('./block'); 

 describe('Block', () => {
    const timestamp = 'a-date';
    const lastHash = 'foo-hash';
    const hash = 'bar-hash';
    const data = ['blockchain', 'data'];
    const block = new Block (
        timestamp,
        lastHash,
        hash,
        data
    );
    /**As an example above you can also use this syntax
     * 
     * const block = new Block (
        timestamp,
        lastHash,
        hash,
        data
     * );
     * **/

    it('a block has all of the properties ', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });
 });