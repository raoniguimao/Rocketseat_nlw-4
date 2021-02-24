import styles from '../styles/components/Profile.module.css';

export function Profile() {
	return (
		<div className={styles.profileContainer}>
			<img src="http://github.com/raoniguimao.png" alt="Raoni Rocha" />
			<div>
				<strong>Raoni Alves Rocha</strong>
				<p>
					<img src="icons/level.svg" alt="Level" />
					Level 1
				</p>
			</div>
		</div>
	);
}