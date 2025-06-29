type WhenProps = {
  condition: boolean;
  children: React.ReactNode;
};

export function When({ condition, children }: WhenProps) {
  return condition ? <>{children}</> : null;
}
