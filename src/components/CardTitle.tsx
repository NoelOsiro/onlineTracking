interface Iprops {
    title: string;
  }
export const CardTitle: React.FC<Iprops> =({title}:Iprops) => {
    return (
      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
        <h3 className="font-medium text-black dark:text-white">{title}</h3>
      </div>
    );
  }