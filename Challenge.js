module.exports = function strangeGrid(r, c) {
    // Write your code here
    let tensPart = 0;
    let onesPart = 0;
    const eventRowCaseOnesPart = [1, 3, 5, 7, 9];
    const oddRowCaseOnsePart = [0, 2, 4, 6, 8];
    if (r % 2 === 0) {
        onesPart = eventRowCaseOnesPart[c - 1];
        tensPart = Math.floor(r / 2) - 1;
    } else {
        onesPart = oddRowCaseOnsePart[c - 1];
        tensPart = Math.floor(r / 2);
    }

    const result = parseInt(`${tensPart}${onesPart}`);
    return result;

};
