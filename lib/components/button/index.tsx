import styles from './styles.module.css';

function Button({
  ...props
  // }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
}: React.ComponentProps<"button">) {
  return <button className={styles.button} {...props} />;
}

export default Button;
