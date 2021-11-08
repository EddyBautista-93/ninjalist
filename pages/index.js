import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>kmfkl;wem wekmrklwmekl eqklwmneklqwneklq ndfklnlqwikniroqwn nqownelkqwnelkwq</p>
      <Link href="/ninjas">
        <a>Ninjas Listing</a>
      </Link>
    </div>
  );
}
