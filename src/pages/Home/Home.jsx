import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signinLinkTextStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/register");
    // console.log("click");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title={" Welcome to CodersHouse "} icon={"logo"}>
        <p className={styles.text}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we're adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button handleClick={handleClick} text="Get your username" />
        </div>
        <div className={styles.siginwrapper}>
          <span className={styles.inviteText}>Have an invite text?</span>
          <Link style={signinLinkTextStyle} to={"/login"}>
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
