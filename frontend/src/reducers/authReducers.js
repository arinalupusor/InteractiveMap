
export const login = () => {
    
    return {
      type: 'LOGIN',
      payload: {
        isAuthenticated: true,
        isGuest: false,
        
      },
    };
  };
  
  export const loginGuest = () => {
    
    return {
      type: 'LOGIN_GUEST',
      payload: {
        isAuthenticated: true,
        isGuest: true,
      },
    };
  };
  
  