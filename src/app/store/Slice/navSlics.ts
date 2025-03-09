import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
  isMobileMenuOpen: boolean;
  activePage: string;
}

const initialState: NavState = {
  isMobileMenuOpen: false,
  activePage: 'home',
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setActivePage: (state, action: PayloadAction<string>) => {
      state.activePage = action.payload;
      state.isMobileMenuOpen = false;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActivePage } = navSlice.actions;
export default navSlice.reducer;