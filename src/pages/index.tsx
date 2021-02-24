import { CompletedChallenges } from "../Components/CompletedChallenges";
import { Countdown } from "../Components/Countdown";
import { ExperienceBar } from "../Components/ExperinceBar";
import { Profile } from "../Components/Profile";
import { ChallengeBox } from "../Components/ChallengeBox";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar posicaoAtual="300" total="600" />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
