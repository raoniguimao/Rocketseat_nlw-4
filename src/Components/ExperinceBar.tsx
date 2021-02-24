interface PropsXpBar {
	posicaoAtual: string;
	total: string;
}

import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(props: PropsXpBar) {
	const percAtual = (parseInt(props.posicaoAtual) / parseInt(props.total)) * 100;

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{ width: percAtual + '%' }} />
				<span className={styles.currentExperience} style={{ left: percAtual + '%' }}>
					{props.posicaoAtual} xp
				</span>
			</div>
			<span>{props.total} xp</span>
		</header>
	);
}