import styles from './button.module.css';

interface Props {
  text: string;
}

function Button({ text }: Props) {
  return <button className={styles.button}>{text}</button>;
}

export default Button;
