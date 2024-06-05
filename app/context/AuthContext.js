import { createContext, useReducer, useContext, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isLoggedIn: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isLoggedIn: false, user: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isLoggedIn: false,
    user: null,
  });

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const fetchUser = async () => {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        try {
          const response = await fetch('https://bilapi.ads-webapp.com/profile', requestOptions);
          if (response.ok) {
            const data = await response.json();
            dispatch({ type: 'LOGIN', payload: { ...data.user, accessToken: token } });
          } else {
            localStorage.removeItem('accessToken');
          }
        } catch (error) {
          localStorage.removeItem('accessToken');
        }
      };

      fetchUser();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
