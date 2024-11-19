import { create } from 'zustand';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
  User as FirebaseUser,
  updateProfile
} from 'firebase/auth';
import { auth } from '../lib/firebase';
import type { User } from '../types';

interface AuthState {
  user: User | null;
  firebaseUser: FirebaseUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  firebaseUser: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,

  signUp: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      await sendEmailVerification(userCredential.user);
      
      set({
        firebaseUser: userCredential.user,
        user: {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
          name,
          isVerified: false,
          title: '',
          location: '',
          skills: [],
          sector: '',
          rating: 0,
          reviewCount: 0,
          joinedDate: new Date(),
        },
        isAuthenticated: true,
      });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      if (!userCredential.user.emailVerified) {
        throw new Error('Please verify your email before signing in');
      }

      set({
        firebaseUser: userCredential.user,
        user: {
          id: userCredential.user.uid,
          email: userCredential.user.email!,
          name: userCredential.user.displayName || '',
          isVerified: true,
          title: '',
          location: '',
          skills: [],
          sector: '',
          rating: 0,
          reviewCount: 0,
          joinedDate: new Date(userCredential.user.metadata.creationTime!),
        },
        isAuthenticated: true,
      });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
      set({ user: null, firebaseUser: null, isAuthenticated: false });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  updateUser: (data) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    })),
}));