interface VehicleVideo {
  name: string;
  url: string;
  start: string;
  end: string;
}

const vehicleVideos: VehicleVideo[] = [
  { name: "T-14 Armata", url: "https://youtu.be/K4l3hwMpjrU?si=jlRkkKFOvFlSlm7z", start: "0:09", end: "0:50" },
  { name: "M1128 Stryker", url: "https://www.youtube.com/watch?v=example2", start: "0:15", end: "0:40" }
];

export default vehicleVideos;
