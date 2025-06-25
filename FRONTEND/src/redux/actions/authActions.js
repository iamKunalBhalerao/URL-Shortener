import { 
  loginStart, 
  loginSuccess, 
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout
} from '../slices/authSlice';
import { signin, signup } from '../../api/User.api';

// Login action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await signin(email, password);
    
    if (response.success) {
      dispatch(loginSuccess(response.user));
      return { success: true };
    } else {
      dispatch(loginFailure(response.message));
      return { success: false, message: response.message };
    }
  } catch (error) {
    dispatch(loginFailure(error.message || 'Login failed'));
    return { success: false, message: error.message || 'Login failed' };
  }
};

// Register action
export const register = (username, email, password) => async (dispatch) => {
  try {
    dispatch(registerStart());
    const response = await signup(username, email, password);
    
    if (response.success) {
      dispatch(registerSuccess(response.user));
      return { success: true };
    } else {
      dispatch(registerFailure(response.message));
      return { success: false, message: response.message };
    }
  } catch (error) {
    dispatch(registerFailure(error.message || 'Registration failed'));
    return { success: false, message: error.message || 'Registration failed' };
  }
};

// Logout action
export const logoutUser = () => (dispatch) => {
  // Here you would typically call an API to invalidate the session
  dispatch(logout());
  return { success: true };
};