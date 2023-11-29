import * as React from 'react';

export function useMediaQuery(
  query: string,
  defaultMatches: boolean = false,
  matchMedia: typeof window.matchMedia | null = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined' ? window.matchMedia : null,
  ssrMatchMedia: ((query: string) => { matches: boolean }) | null = null,
  noSsr: boolean = false,
): boolean {
  const getDefaultSnapshot = React.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = React.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia!(query).matches;
    }

    if (ssrMatchMedia !== null) {
      const { matches } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = React.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }

    const mediaQueryList = matchMedia(query);

    return [
      () => mediaQueryList.matches,
      (notify: () => void) => {
        // TODO: Use `addEventListener` once support for Safari < 14 is dropped
        mediaQueryList.addListener(notify);
        return () => {
          mediaQueryList.removeListener(notify);
        };
      },
    ];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return match;
}