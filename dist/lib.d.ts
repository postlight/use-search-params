declare type ForEach = (value: string, name: string, target: URLSearchParams) => void;
declare type WriteMode = "push" | "replace";
declare function useSearchParams(writeMode?: WriteMode): URLSearchParams;
export default useSearchParams;
export type { ForEach, WriteMode };
