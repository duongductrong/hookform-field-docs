import { useWatch } from "react-hook-form";

type Props = {};

const Data = (props: Props) => {
  const data = useWatch();
  return (
    <div className="flex flex-col gap-2">
      <label>Form Data</label>
      {JSON.stringify(data)}
    </div>
  );
};

export default Data;
