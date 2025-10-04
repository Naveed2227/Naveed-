interface VehicleVideo {
  name: string;
  url: string | null;
  start: string;
  end: string;
}

// Full list (with null for missing URLs)
const vehicleVideos: VehicleVideo[] = [
  { name: "T-14 Armata", url: "https://youtu.be/K4l3hwMpjrU", start: "0:09", end: "0:50" },
  { name: "Abrams X", url: "https://youtu.be/5A1LwRYQH0c", start: "0:12", end: "0:59" },
  { name: "Type 10", url: "https://youtu.be/0dlXDNhksFU", start: "1:00", end: "2:55" },
  { name: "M1 Abrams Block 3", url: "https://youtu.be/IUrW-Q4YksI", start: "0:25", end: "0:57" },
  { name: "Leopard 2A7+", url: "https://youtu.be/xczzWYoNQ2s", start: "1:16", end: "2:02" },
  { name: "KF-51 Panther", url: "https://youtu.be/Sx8KS4SnHvQ", start: "0:37", end: "1:12" },
  { name: "Altay", url: "https://youtu.be/DGs6mO3Bw6Q", start: "1:06", end: "1:42" },
  { name: "T-25 Pamir", url: "https://youtu.be/X_f0nnvOL0c", start: "1:49", end: "2:16" },
  { name: "T-90A", url: "https://youtu.be/N6GBX497v9U", start: "1:01", end: "1:22" },
  { name: "T-95M", url: "https://youtu.be/HXTYFk9mulA", start: "2:07", end: "2:48" },
  { name: "T-104 Bastion", url: "https://youtu.be/y3Bayf9jS1M", start: "0:15", end: "1:12" },
  { name: "Type 16 MCV", url: "https://youtu.be/T2GWeVgD3e4", start: "1:14", end: "2:00" },
  { name: "T-14 Armata (152)", url: "https://youtu.be/_FuoNQKIspg", start: "1:24", end: "2:00" },
  { name: "Merkava Mk.4", url: "https://youtu.be/pa3FohCQVAc", start: "0:03", end: "0:42" },
  { name: "BMPT Terminator 2", url: "https://youtu.be/HVfYzQdLAuM", start: "0:14", end: "0:40" },
  { name: "SR-5 GMLRS", url: "https://youtu.be/ty2ID90woiU", start: "1:33", end: "1:45" },
  { name: "2S19 Msta-S", url: "https://youtu.be/CiMkzE11rP8", start: "1:13", end: "1:20" },
  { name: "Pantsir S-1", url: "https://youtu.be/TdCotdLrZU8", start: "1:30", end: "1:48" },
  { name: "M1128 Stryker", url: "https://youtu.be/edTc10UxRbk", start: "1:04", end: "1:21" },
  { name: "M1 Abrams CATTB", url: "https://youtu.be/myT-gh7fsnY", start: "1:29", end: "2:04" },
  { name: "VT-4A1", url: "https://youtu.be/CWMtpRIBw5w", start: "1:40", end: "2:14" },
  { name: "ZTZ99A", url: "https://youtu.be/sy1xfXfgspY", start: "0:25", end: "0:59" },
  { name: "ZTZ99-III", url: "https://youtu.be/DRSRF78JJMY", start: "0:26", end: "0:58" },
  { name: "Challenger 3", url: "https://youtu.be/e-XfUZWr1zo", start: "1:34", end: "2:39" },
  { name: "EMBT 120", url: "https://youtu.be/6OGoC-D2wXc", start: "1:44", end: "2:54" },
  { name: "FV4034 Challenger 2 TES", url: "https://youtu.be/ktFZqH3PpYA", start: "0:51", end: "1:25" },
  { name: "Karrar", url: "https://youtu.be/i8Bf4JzoPFw", start: "1:48", end: "2:27" },
  { name: "Leclerc S2 AZUR", url: "https://youtu.be/hiSKwzX5X_o", start: "1:44", end: "2:56" },
  { name: "Object 640", url: "https://youtu.be/0LnbEzifj3M", start: "1:26", end: "2:22" },
  { name: "Leopard 2A-RC 3.0", url: "https://youtu.be/zj_CG2ZvV_8", start: "1:22", end: "2:06" },
  { name: "Leopard 2A8", url: "https://youtu.be/Qi7-LyeoszI", start: "0:08", end: "0:57" },
  { name: "T-20 Monolit", url: "https://youtu.be/BNhziM0nt98", start: "1:20", end: "1:48" },
  { name: "KF31 Lynx", url: "https://youtu.be/dVaYSIFvP5w", start: "1:45", end: "2:24" },
  { name: "K2 Black Panther", url: "https://youtu.be/cJC2Nx9PPyY", start: "1:21", end: "1:59" },
  { name: "Al-Khalid", url: null, start: "", end: "" },
  { name: "Arjun Mk.2", url: null, start: "", end: "" },
  { name: "M10 Booker", url: "https://youtu.be/Zq77zO3I3Ho", start: "1:39", end: "2:35" },
  { name: "PL-01", url: "https://youtu.be/OjNb3Er2eQg", start: "1:09", end: "1:39" },
  { name: "M-SHORAD", url: "https://youtu.be/sa72brrCgos", start: "1:43", end: "2:12" },
  { name: "TOS-1A", url: "https://youtu.be/NT9qAhahZk0", start: "1:35", end: "1:56" },
  { name: "M270 MLRS", url: "https://youtu.be/VfbGwpeY5Bg", start: "0:25", end: "0:39" },
  { name: "PLZ-05", url: "https://youtu.be/ZpVdKIagEz0?si=mK4nxmwQV61qQ-rG", start: "1:18", end: "1:43" },
  { name: "M109A6 Paladin", url: "https://youtu.be/_U3c6ifyE4M?si=F96vRwiNVCR1Xl9S", start: "1:24", end: "2:10" },
  { name: "FK 2000", url: "https://youtu.be/eRv6VhP-RN8?si=RoaWK7J2nhdY5kG1", start: "1:35", end: "2:12" },
  { name: "Otomatic 76", url: "https://youtu.be/82p_7_XmxeI?si=Y6NA46TNDvPAM3be", start: "1:14", end: "1:54" },
  { name: "BM-57-2 Kochevnik", url: "https://youtu.be/e2gYaosFftg?si=uFjqcAi7yNJlh7fm", start: "0:57", end: "1:11" },
  { name: "ADATS", url: "https://youtu.be/39WF8j01eNc?si=GZqvbdLLZSvJbljj", start: "3:27", end: "3:43" },
  { name: "MGM-166 LOSAT", url: "https://youtu.be/WyxgmKTIplg?si=jiYWpAGGV-GQ0ikg", start: "1:12", end: "2:03" },
];

// Export filtered videos
export const playableVideos = vehicleVideos.filter(v => !!v.url);
export default vehicleVideos;

// --- Example React component ---
import React from "react";

export const VehicleVideoPlayer: React.FC<{ video: VehicleVideo }> = ({ video }) => {
  if (!video.url) return null;

  // Convert YouTube URL to embeddable muted format
  const videoId = video.url.split("v=")[1] || video.url.split("youtu.be/")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${parseTime(video.start)}&end=${parseTime(video.end)}&autoplay=1&mute=1`;

  return (
    <div style={{ aspectRatio: "16/9", width: "100%", borderRadius: "12px", overflow: "hidden" }}>
      <iframe
        src={embedUrl}
        title={video.name}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
};

// Helper to convert "m:ss" → seconds
function parseTime(time: string): number {
  if (!time) return 0;
  const [m, s] = time.split(":").map(Number);
  return m * 60 + s;
}
