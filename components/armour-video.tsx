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
  { name: "Al-Khalid", url: "https://youtu.be/1RuL7_zMyUs?si=RNVINx4abZG8WOgH", start: "0:28", end: "0:54" },
  { name: "Arjun Mk.2", url: "https://youtu.be/r6AlamckwwM?si=cAFkYRwn_p3jHAjO", start: "4:19", end: "4:48" },
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
  { name: "T-90M", url: "https://youtu.be/79tBU-YziHU?si=aekLLVGrAdmElNGz", start: "1:27", end: "2:15" },
  { name: "ZLT-11", url: "https://youtu.be/pa3FohCQVAc", start: "", end: "" },
  { name: "M1 AGDS", url: "https://youtu.be/30djqeyzcGE?si=nGTsaXhSZ3RbuhiW", start: "0:55", end: "1:29" },
  { name: "T-15 Barbaris", url: "https://youtu.be/4LsQ0YcUKOU?si=tQYaSpZd_z-8x196", start: "1:39", end: "2:33" },
  { name: "Leopard 2 Revolution", url: "https://youtu.be/YetbVX0KXzk?si=QkYeVE28PTvFLjjQ", start: "3:20", end: "4:01" },
  { name: "Panzer 87-140", url: "https://youtu.be/nR86B10S0gk?si=ylEfPae3aGwGwGL8", start: "0:00", end: "0:55" },
  { name: "ZTQ-15", url: "https://youtu.be/zAEkp0sQRQc?si=Z9RzoZJkfu76Pia4", start: "0:00", end: "1:04" },




{ name: "Leopard 2A4", url: "https://youtu.be/ADYn5h6REy8?si=ko7f1KNBdyzFUh9l", start: "1:13", end: "1:44" },
{ name: "T-72A", url: "https://youtu.be/F5IDobI4sa0?si=PQ-ESOgZkfhUno7L", start: "1:16", end: "1:36" },
{ name: "M1A1 Abrams", url: "https://youtu.be/QcSBtdRkIoE?si=5u8EAljAcrmlFgWa", start: "0:07", end: "0:40" },
{ name: "MBT-70", url: "https://youtu.be/M6gZPpIVlls?si=B86cpgUDgUC8L069", start: "0:24", end: "1:01" },
{ name: "PT-91 Twardy", url: "https://youtu.be/wKR__cc3Pdo?si=GFiW4gWuvaByeYsN", start: "1:27", end: "2:06" },
{ name: "T-64BV", url: "https://youtu.be/hNwWFWSTBPw?si=mRiRGQLq5rK0H7SD", start: "1:18", end: "2:16" },
{ name: "Type 90", url: "https://youtu.be/vOH9qktP_f4?si=QS8vn9NwjIUd2DU_", start: "1:16", end: "1:40" },
{ name: "M60A3 (MZK)", url: "https://youtu.be/wOIc50_bSK4?si=QeqOnQso_tulIJB3", start: "1:04", end: "1:38" },
{ name: "ZTZ85-II", url: "https://youtu.be/oMDvUArHyi4?si=WijBndtauPPKp5US", start: "1:57", end: "2:14" },
{ name: "ZTZ96", url: "https://youtu.be/8U7XdRlE2vM?si=X9V_LwpXtHsj-54Y", start: "0:02", end: "0:54" },
{ name: "ZTZ-96A (P)", url: "https://youtu.be/Zf0wSurvgFg?si=gK2mcNEgYGI0ay3r", start: "1:34", end: "2:36" },
{ name: "AMX-30 Super", url: "https://youtu.be/loIvXOljiMM?si=eMTjhwqUrI3Jh2LK", start: "1:20", end: "1:58" },
{ name: "PLZ-07B", url: "https://youtu.be/zbZOfESSplg?si=8TQjdIiG6dr-P-Pu", start: "0:07", end: "0:30" },
{ name: "M110A2", url: "https://youtu.be/ywa6waXiawo?si=SAK517euWJw9n_nx", start: "1:12", end: "1:40" },
{ name: "2S31 Vena", url: "https://youtu.be/9NDg2iaVMGk?si=jQ8PWIwo0Y65_odg", start: "0:08", end: "0:41" },  //Bob
{ name: "XM2001 Crusader", url: "https://youtu.be/nr6aHvs1qL4?si=sh_II2K7HnEC7jU1", start: "1:33", end: "2:19" },
{ name: "Gepard 1A2", url: "https://youtu.be/6XuAEp6zHnY?si=dt8dkR76x06uIxzP", start: "1:27", end: "2:12" },
{ name: "K-31 Cheonma", url: "https://youtu.be/9LtuvTKDO2I?si=MzCGXBnUyut7RE8s", start: "0:49", end: "1:13" },
{ name: "PGZ-09", url: "https://youtu.be/8xeKoQ1dovk?si=GhsVxuHkvESk2pgW", start: "1:42", end: "2:10" },
{ name: "2S6M1 Tunguska-M1", url: "https://youtu.be/6XuAEp6zHnY?si=E_6gyE_s30zgVA9G", start: "1:27", end: "2:10" },
{ name: "Type 625E SHORAD", url: "https://youtu.be/ORb2Wa32HLw?si=75KtAD40ktq_BOiu", start: "1:18", end: "1:42" },
{ name: "XM975", url: "https://youtu.be/PNseZj9cti8?si=DottoZu7cWEqt2-G", start: "0:12", end: "0:35" },
{ name: "AFT-10", url: "https://youtu.be/7Kgf0l3T1qE?si=7RRrRPmJR-vVPiCL", start: "0:09", end: "0:38" },
{ name: "M113 Hellfire", url: "https://youtu.be/UWNhzHnfZLE?si=44UyUSrksKR2Sl2t", start: "0:08", end: "0:36" },  //Bob
{ name: "9A52-2 Smerch", url: "https://youtu.be/LqzTuZkgy1I?si=tPP8SnxcGUE9323P", start: "0:39", end: "0:57" },
{ name: "Type 89 MLRS", url: "https://youtu.be/aDwdzuGcXN8?si=t3T_y9viCWLAtnBD", start: "1:25", end: "1:40" },
{ name: "Type 75 MLRS", url: "https://youtu.be/8M24qhnJpRA?si=CaMOCo5btffE67G5", start: "1:02", end: "1:26" },
{ name: "AFT-09", url: "https://youtu.be/NydibiQrqf8?si=acC7xZM7YxE6RNZU", start: "1:03", end: "1:20" },
{ name: "LAV-600", url: "https://youtu.be/r9zqeVbOZaU?si=GsJYFvTLReQdzxh7", start: "0:18", end: "0:35" },
{ name: "HSTV-L", url: "https://youtu.be/dPydHqze5_Y?si=4lMwfxpBjkX2OnKF", start: "1:09", end: "1:27" },
{ name: "K21 KNIFV", url: "https://youtu.be/5P40RxJ7Cgw?si=Ls-_YgcdODElAi62", start: "1:18", end: "1:56" },
{ name: "Rookiat MTTD", url: "https://youtu.be/8jkfJf1odh8?si=p_sLzaE7XEdqEu7p", start: "1:17", end: "2:10" },
{ name: "ZBL-08", url: "https://youtu.be/B_6uVLiTlKk?si=0eoXP6Ec8FPSEYfp", start: "0:59", end: "1:11" },
{ name: "ХM8 AGS", url: "https://youtu.be/zq1Yw8VszxE?si=9tctfvjis2V1Tkjd", start: "1:19", end: "2:10" },
{ name: "VBCI-2", url: "https://youtu.be/SiSaUoftRnk?si=ZtP7bz0FDCcLYMt1", start: "1:43", end: "2:39" },
{ name: "WMA301", url: "https://youtu.be/owHnjNfNX5g?si=DGfyPqbVjlYe9M5u", start: "1:27", end: "1:43" },
{ name: "Centauro I 120", url: "https://youtu.be/AJb7wRtdghs?si=fCKEpepCQ4LmDxtu", start: "1:14", end: "1:47" },
{ name: "BMD3", url: "https://youtu.be/lsfaocg-oWY?si=LnVz-K6h4E9SOqn3", start: "2:15", end: "2:40" },
{ name: "Strf 9040 BILL", url: "https://youtu.be/ybzazLIpflE?si=H685YxMswhm4sMjH", start: "1:10", end: "1:34" },
{ name: "M3A3 Bradley", url: "https://youtu.be/9nrSQ6TOv2s?si=OQUMRfbtgnEeubK3", start: "0:23", end: "0:44" },
{ name: "Merkava Mk.3", url: "https://youtu.be/9e0u3YtWzdo?si=mnRJDYEiLefRdiUB", start: "1:26", end: "2:18" },
{ name: "T-72B1", url: "https://youtu.be/XDuCbv863Qo?si=IsuHwk1fHj1j6u5z", start: "0:25", end: "1:00" },
{ name: "M1A1 AIM TUSK", url: "https://youtu.be/cEAR72jJZPw?si=dYqzGvggH2gaDpAU", start: "0:01", end: "1:10" },


{ name: "M60 Patton", url: "", start: "", end: "" },  
{ name: "Object 122 TM", url: "", start: "", end: "" },  
{ name: "Type 74E", url: "", start: "", end: "" },  
{ name: "Type 74G/Kai", url: "", start: "", end: "" },  
{ name: "T-62", url: "", start: "", end: "" },  
{ name: "T-62 545", url: "", start: "", end: "" },  
{ name: "Stridsvagn 105", url: "", start: "", end: "" },  
{ name: "XM803", url: "", start: "", end: "" },  
{ name: "XM1 (GM)", url: "", start: "", end: "" },  
{ name: "BMP-2", url: "", start: "", end: "" },  
{ name: "BTR-82AT", url: "", start: "", end: "" },  
{ name: "BTR-82A1", url: "", start: "", end: "" },  
{ name: "M3 Bradley", url: "", start: "", end: "" },  
{ name: "M551 Sheridan", url: "", start: "", end: "" },  
{ name: "Object 685", url: "", start: "", end: "" },  
{ name: "IT-1 Dragon", url: "", start: "", end: "" },  
{ name: "M163 VADS", url: "", start: "", end: "" },  
{ name: "PGZ-04A", url: "", start: "", end: "" },  
{ name: "ZSU-23-4M4 Shilka", url: "", start: "", end: "" },  
{ name: "LAV-300", url: "", start: "", end: "" },  
{ name: "PTL-02", url: "", start: "", end: "" },  
{ name: "M109", url: "", start: "", end: "" },  
{ name: "PLL-05", url: "", start: "", end: "" },  
{ name: "PLZ-83", url: "", start: "", end: "" },  
{ name: "2S1 Gvozdika", url: "", start: "", end: "" },  
{ name: "2S3 Akatsiya", url: "", start: "", end: "" },  
{ name: "Type 74 SPH", url: "", start: "", end: "" },  

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
