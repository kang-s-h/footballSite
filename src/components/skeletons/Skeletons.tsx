import "./skeletons.css";

interface SkeletonProps {
  width: number;
  height: number;
  borderRadius?: number;
  margin?: number;
}

function Skeletons({ width, height, borderRadius = 0, margin = 0 }: SkeletonProps) {
  return <div className="skeletons" style={{ width, height, borderRadius, margin }}></div>;
}

export default Skeletons;
