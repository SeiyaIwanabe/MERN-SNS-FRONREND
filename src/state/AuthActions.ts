// ユーザー入力に応じたアクションの設定
export const LoginStart = (user: any) => ({
    type: 'LOGIN_START',
});

export const LoginSuccess = (user: any) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
});

export const LoginError = (error: any) => ({
    type: 'LOGIN_ERROR',
    payload: error,
});
