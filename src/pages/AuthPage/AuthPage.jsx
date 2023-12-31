import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
// import { getUser } from '../../utilities/users-service';

export default function AuthPage({ setUser }){
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm  setUser={setUser} />
            <LoginForm  setUser={setUser} />
        </main>
    )
}
