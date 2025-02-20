interface DashboardCardProp {
  title: string;
  count: number;
  imagePath: string;
}
export default function DashboardCard({
  title,
  count,
  imagePath,
}: DashboardCardProp) {
  return (
    <div className="w-full h-36 shadow-md flex justify-between  shadow-maincolor/10 border-gray-100 border rounded-md bg-white p-6">
      <div className="flex flex-col justify-between">
        <h2 className="">{title}</h2>
        <h1 className="text-5xl font-bold">{count}</h1>
      </div>
      <div className="h-full flex items-center">
        <img className="w-14" src={imagePath} alt="" />
      </div>
    </div>
  );
}
