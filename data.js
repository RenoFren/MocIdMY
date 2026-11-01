/* DATA MOC: edit file ini saja untuk menambah pemain dan jadwal. */

// PEMAIN: ["Nama","Role","KODE_TIM"]
// Role harus persis: Gold, EXP, Mid, Jungle, atau Roamer
// Kode tim ID: BLZR NOWL TAQSID RBM AE VE | Kode tim MY: PXE TAQSMY FNX HV PJ ANO
const P=[
 // ["Nama Pemain","Gold","BLI"],
];

// JADWAL: ["liga","week","tanggal","jam WIB","KODE_A","KODE_B","status"]
// liga: ID atau MY | tanggal: "2026-11-07" | status: upcoming, live, atau done
const M=[
 // ["ID",1,"2026-11-07","19:00","BLI","AQI","upcoming"],
];

// Jumlah minggu yang dibuka untuk voting mingguan (1 sampai 8)
const MINGGU=1;

// PRESTASI di MOC Pro Internasional: [region,"Nama Tim","KODE_TIM atau kosong","hasil","musim","keterangan"]
const PRESTASI=[
 ["ID","Blitz Revolution","BLZR","2x Champions","S4 dan S6",""],
 ["ID","Delta Reoforce","","1x Champions","S5","Sudah bubar"],
 ["ID","Team Aquarius ID","TAQSID","1x 3rd Place","",""],
 ["ID","Night Owl","NOWL","2x 3rd Place","S1-S3",""],
 ["ID","Phantome Ather","AE","Belum pernah berpartisipasi","",""],
 ["ID","RBM","RBM","Belum pernah berpartisipasi","",""],
 ["ID","Vermilion Team","VE","Belum pernah berpartisipasi","",""],
 ["ID","MMMClan","","3rd Group Stage B","S6",""],
 ["MY","Paradox","PXE","3x Champions","S1-S3",""],
 ["MY","Team KJ (sekarang 6Anomali)","","1x 3rd Place","S4",""],
 ["MY","6Anomali","ANO","1x Runner Up","S5",""],
 ["MY","Fonix","FNX","1x 4th Place","S6",""],
 ["MY","Team Aquarius MY","TAQSMY","1x Runner Up","S6",""],
 ["MY","Phantome X","","Diskualifikasi","",""]
];
