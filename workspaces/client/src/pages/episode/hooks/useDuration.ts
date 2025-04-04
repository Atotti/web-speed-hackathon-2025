import { useStore } from '@wsh-2025/client/src/app/StoreContext';

export function useDuration() {
  return useStore((s) => s.pages.episode.duration);
}
