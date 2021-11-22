import styles from "../css/LoginModule.module.scss";

const LoginModule = () => {
  const onSubmit = (e) => {};

  return (
    <div className={styles.login_module_container}>
      <div className={styles.id_and_password}>
        <input
          type="text"
          className={styles.input_box}
          style={{ marginBottom: "20px" }}
          placeholder="id"
        />
        <input
          type="password"
          className={styles.input_box}
          placeholder="password"
        ></input>
      </div>
      <div className={styles.login_btn_container} onClick={onSubmit}>
        Log In
        <div className={styles.right_circle}></div>
        <div className={styles.bottom_circle}></div>
      </div>
      <div className={styles.sign_up_and_forgot_password_container}>
        <span>sign up</span>
        <span>forgot password?</span>
      </div>
    </div>
  );
};

export default LoginModule;
