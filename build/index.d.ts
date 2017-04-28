declare class Mark {
    private ctx;
    private ie;
    private _opt;
    private _iterator;
    constructor(ctx: any);
    opt: any;
    readonly iterator: any;
    log(msg: any, level?: string): void;
    escapeStr(str: any): any;
    createRegExp(str: any): any;
    createSynonymsRegExp(str: any): any;
    setupWildcardsRegExp(str: any): any;
    createWildcardsRegExp(str: any): any;
    setupIgnoreJoinersRegExp(str: any): any;
    createIgnoreJoinersRegExp(str: any): any;
    createDiacriticsRegExp(str: any): any;
    createMergedBlanksRegExp(str: any): any;
    createAccuracyRegExp(str: any): string;
    getSeparatedKeywords(sv: any): {
        "keywords": any[];
        "length": number;
    };
    getTextNodes(cb: any): void;
    matchesExclude(el: any): boolean;
    wrapRangeInTextNode(node: any, start: any, end: any): any;
    wrapRangeInMappedTextNode(dict: any, start: any, end: any, filterCb: any, eachCb: any): void;
    wrapMatches(regex: any, ignoreGroups: any, filterCb: any, eachCb: any, endCb: any): void;
    wrapMatchesAcrossElements(regex: any, ignoreGroups: any, filterCb: any, eachCb: any, endCb: any): void;
    unwrapMatches(node: any): void;
    normalizeTextNode(node: any): void;
    markRegExp(regexp: any, opt: any): void;
    mark(sv: any, opt: any): void;
    unmark(opt: any): void;
}
export default Mark;
