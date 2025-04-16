import styles from './styles.module.css';

function Input({
  ...props
}: React.ComponentProps<"input">) {
  return <input className={styles.input} {...props} />;
}

export default Input;
