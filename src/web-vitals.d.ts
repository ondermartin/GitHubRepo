declare module 'web-vitals' {
    export type ReportHandler = (metric: Metric) => void;

    interface Metric {
        name: string;
        delta: number;
        value: number;
        entries: PerformanceEntryList;
    }

    export function getCLS(callback: ReportHandler): void;
    export function getFID(callback: ReportHandler): void;
    export function getLCP(callback: ReportHandler): void;
    export function getFCP(callback: ReportHandler): void;
    export function getTTFB(callback: ReportHandler): void;
}
