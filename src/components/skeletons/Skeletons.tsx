import "./skeletons.css";

interface SkeletonProps {
  width: number | string | undefined;
  height: number;
  borderRadius?: number;
  margin?: number | string;
  className?: string;
}

function Skeletons({ className, width = undefined, height, borderRadius = 0, margin = 0 }: SkeletonProps) {
  console.log("Skeleton className:", className);
  return <div className={`${className} skeletons`} style={{ width, height, borderRadius, margin }}></div>;
}

export default Skeletons;
