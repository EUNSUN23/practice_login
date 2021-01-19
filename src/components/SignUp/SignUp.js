import TextInput from "./Input/TextInput/TextInput";
import Gender from "./SignUpInfo/Gender/Gender";
import BirthInfo from "./SignUpInfo/BirthInfo/BirthInfo";
import Interest from "./SignUpInfo/Interest/Interest";
import SelfIntroduction from "./SignUpInfo/SelfIntroduction/SelfIntroduction";
import { replace } from "react-router-redux";
import { useDispatch } from "react-redux";
import styles from "./SignUp.module.css";
import { emailVerifying } from "../../store/actions/auth";

const SignUpForm = () => {
  const dispatch = useDispatch();

  const onCanceledHandler = (e) => {
    e.preventDefault();
    console.log("CANCEL SUBMIT");
  };

  const onSubmittedHandler = (e) => {
    e.preventDefault();
    //firebase 이메일인증코드
    dispatch(emailVerifying());
    dispatch(replace("/verifyEmail"));
  };

  return (
    <>
      <form className={styles.SignUpForm}>
        <h2>{`<회원 가입>`}</h2>
        <h4>-아이디, 비밀번호-</h4>
        <TextInput />
        <h4>-성별-</h4>
        <Gender />
        <h4>-생년월일-</h4>
        <BirthInfo />
        <h4>-취미-</h4>
        <Interest />
        <h4>-자기소개-</h4>
        <SelfIntroduction />
        <button onClick={(e) => onCanceledHandler(e)}>취소</button>
        <button onClick={(e) => onSubmittedHandler(e)} type="submit">
          가입하기
        </button>
      </form>
    </>
  );
};
export default SignUpForm;
