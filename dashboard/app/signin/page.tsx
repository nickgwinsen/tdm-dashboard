import { SignInPage, type AuthProvider } from "@toolpad/core/SignInPage";

const Login = () => {
    const providers = [{ id: "credentials", name: "Email and Password" }];
    return <SignInPage providers={providers} />;
};

export default Login;
