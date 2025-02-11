interface Props {
  heading: string;
  description: string;
}

const EmptyTable = ({ heading, description }: Props) => {
  return (
    <div className="flex h-[21rem] flex-col items-center justify-center gap-8 rounded-lg border border-dashed bg-card">
      <div className="flex flex-col items-center justify-center gap-y-3 text-center">
        <h2 className="text-4xl font-black text-destructive">{heading}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default EmptyTable;
