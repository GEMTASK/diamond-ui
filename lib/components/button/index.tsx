import styles2 from './styles.module.scss';

function Button({
  ...props
  // }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
}: React.ComponentProps<"button">) {
  return <button className={styles2.scss} {...props} />;
}

export default Button;
