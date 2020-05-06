import type { History } from "history";
import ReactRouter from "react-router-dom";
import React from "react";

type ForEach = (value: string, name: string, target: URLSearchParams) => void;
type WriteMode = "push" | "replace";

class SearchParams implements URLSearchParams {
  private readonly searchParams: URLSearchParams;
  private readonly handleChange: () => void;

  constructor(history: History, writeMode: WriteMode = "push") {
    this.searchParams = new URLSearchParams(history.location.search);
    this.handleChange = () => {
      const search = this.toString();
      let path = history.location.pathname;

      if (search) {
        path += `?${search}`;
      }

      history[writeMode](path);
    };
  }

  *[Symbol.iterator](): IterableIterator<[string, string]> {
    yield* this.searchParams;
  }

  append(name: string, value: string): void {
    this.searchParams.append(name, value);
    this.handleChange();
  }

  delete(name: string): void {
    this.searchParams.delete(name);
    this.handleChange();
  }

  entries(): IterableIterator<[string, string]> {
    return this.searchParams.entries();
  }

  forEach(fn: ForEach): void {
    this.searchParams.forEach(fn);
  }

  get(name: string): string | null {
    return this.searchParams.get(name);
  }

  getAll(name: string): string[] {
    return this.searchParams.getAll(name);
  }

  has(name: string): boolean {
    return this.searchParams.has(name);
  }

  keys(): IterableIterator<string> {
    return this.searchParams.keys();
  }

  set(name: string, value: string): void {
    this.searchParams.set(name, value);
    this.handleChange();
  }

  sort(): void {
    this.searchParams.sort();
  }

  toString(): string {
    return this.searchParams.toString();
  }

  values(): IterableIterator<string> {
    return this.searchParams.values();
  }
}

function useSearchParams(writeMode?: WriteMode): URLSearchParams {
  const history = ReactRouter.useHistory();
  const location = ReactRouter.useLocation();

  return React.useMemo(() => new SearchParams(history, writeMode), [
    history,
    location,
    writeMode,
  ]);
}

export default useSearchParams;
export type { ForEach, WriteMode };
