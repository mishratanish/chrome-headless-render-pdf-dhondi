interface IRenderPdfOptions {
    printLogs?: boolean;
    printErrors?: boolean;
    chromeBinary?: string;
    chromeOptions?: string[];
    remoteHost?: string;
    remotePort?: string;
    noMargins?: boolean;
    landscape?: boolean;
    includeBackground?: boolean;
    windowSize?: boolean;
    paperWidth?: string;
    paperHeight?: string;
    preferCSSPageSize?: boolean;
    pageRanges?: string;
    scale?: number;
    displayHeaderFooter?: boolean;
    headerTemplate?: string;
    footerTemplate?: string;
    jsTimeBudget?: number;
    animationTimeBudget?: number;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
}

interface IJobPair {
    url: string;
    pdf: string;
}

export default class RenderPDF {
    static generateSinglePdf(url: string, filename: string, options?: IRenderPdfOptions): Promise<void>;
    static generateMultiplePdf(pairs: IJobPair[], options?: IRenderPdfOptions): Promise<void>;
    static generatePdfBuffer(url: string, options?: IRenderPdfOptions): Promise<Buffer>;
}
