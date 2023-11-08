import { Progress } from "antd";
import CountUp from "react-countup";
import Link from "next/link";

const RenderProgress = ({ number, name, link = "#" }) => (
  <Link href={link}>
    <a>
      <Progress
        type="circle"
        strokeColor={{
          "0%": "#666",
          "50%": "#fff",
          "100%": "#111",
        }}
        percent={100}
        format={() => <CountUp end={number} delay={2} duration={5} 
        onEnd={() => console.log('Ended! 👏')}
        onStart={() => console.log('Started! 💨')} speed={number * 100} />}
      />
      <p style={{ marginTop: 18, color: "#666" }}>{name.toUpperCase()}</p>
    </a>
  </Link>
);

export default RenderProgress;