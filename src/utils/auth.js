// export const isAuthenticated = user => !!user;

// export const isAllowed = (user, rights) => 
//     rights.some(right => user.rights.includes(right));

export const hasRole = (user, usertype) => 
    usertype.some(role => user.user_type === role);