import { useAuthStore } from '../../../auth/stores/auth/use-auth-store';
import { useCallback } from 'react';

export function useLoginController() {
  const authStore = useAuthStore();

  const login = useCallback(() => authStore.loginAnonymously(), [authStore]);

  return {
    login,
  };
}
