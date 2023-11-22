import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';
import style from './login.module.css';
import { string } from 'yup';
import { emailZHAW, password } from '../../utils/customValidators';

interface Props {}

function Login({}: Props) {
  return (
    <div className={style.mainContainer}>
      <div className={style.header}>
        <label className={style.title}>USER LOGIN</label>
      </div>
      <div className={style.login}>
        <Input icon="user" placeholder="E-Mail" validator={emailZHAW} />
        <Input icon="lock" placeholder="Password" validator={password} />
        <Button text="LOGIN" />
        <div className={style.signUpLink}>
          <label>Not a member?</label>
          <a className={style.linkText} href="https://www.docgpt.ch/signup/">
            Sign up now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
