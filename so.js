/* ==========================================================================
   SISTEM OPERASI (SO) ARCHIVE - INTERACTIVE SCRIPT
   Arfyn Diazs Aryada - Teknik Informatika UNPER
   ========================================================================== */

const STORAGE_KEY = 'arfyn_so_assignments_disk_v2';

// Bersihkan cache lama jika ada
try {
  localStorage.removeItem('arfyn_so_assignments_v1');
} catch (e) {}

// Dataset Utama: TUGAS 1 SISTEM OPERASI (Disk Scheduling)
const DEFAULT_TASKS = [
  {
    id: 'so-tugas-1',
    num: 'Tugas 01',
    title: 'Simulasi Perhitungan Algoritma Penjadwalan Disk (Disk Scheduling)',
    pertemuan: 'Pertemuan Disk Scheduling',
    category: 'penjadwalan',
    categoryLabel: 'Algoritma Penjadwalan Disk',
    date: 'Deadline: 23 November 2026',
    soal: `Sebuah hard disk memiliki 200 track bernomor 0 hingga 199. Saat ini posisi head berada pada track 50. Antrian permintaan akses track yang masuk secara berurutan adalah: 62, 170, 43, 150, 23, 16, 185, 123, 67, 43, 162, 23, 71, 111, 43, 178.

Hitunglah total banyaknya lintasan yang dilewati menggunakan seluruh algoritma yang ada (buat dalam bentuk tabel) dan gambarkan arah proses yang terjadi secara lengkap !

Parameter Awal:
• Total Track: 200 (0 hingga 199)
• Posisi Awal Head: Track 50
• Antrian Permintaan: 62, 170, 43, 150, 23, 16, 185, 123, 67, 43, 162, 23, 71, 111, 43, 178
• Antrian Unik Terurut (untuk algoritma optimalisasi): 16, 23, 43, 62, 67, 71, 111, 123, 150, 162, 170, 178, 185
(Catatan: Untuk algoritma SCAN, C-SCAN, LOOK, dan C-LOOK, diasumsikan arah pergerakan awal head adalah naik (menuju track yang lebih besar / menuju 199) karena permintaan pertama setelah posisi 50 adalah 62)`,
    jawaban: `
      <!-- Parameter Ringkasan -->
      <div style="background:var(--pale-oak-light); padding:16px 20px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); margin-bottom:24px;">
        <h4 style="margin-bottom:8px; color:var(--espresso); font-size:1rem;">📌 Parameter Acuan Soal:</h4>
        <ul style="margin:0; padding-left:20px; font-size:0.93rem; color:var(--text-main); line-height:1.7;">
          <li><strong>Total Track Hard Disk:</strong> 200 track (nomor 0 s.d 199)</li>
          <li><strong>Posisi Awal Head:</strong> Track 50</li>
          <li><strong>Antrian Kedatangan:</strong> 62, 170, 43, 150, 23, 16, 185, 123, 67, 43, 162, 23, 71, 111, 43, 178 (Total 16 permintaan)</li>
          <li><strong>Antrian Unik Terurut:</strong> 16, 23, 43, 62, 67, 71, 111, 123, 150, 162, 170, 178, 185 (13 track unik)</li>
          <li><strong>Asumsi Arah Head:</strong> Bergerak <em>NAIK</em> (menuju track 199) karena request pertama setelah 50 adalah 62.</li>
        </ul>
      </div>

      <!-- 1. FCFS -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 1</span>
            <h4 class="algo-title">1. FCFS (First-Come, First-Served)</h4>
          </div>
          <span class="algo-total-pill">Total: 1.348 Lintasan</span>
        </div>
        <p class="algo-desc">
          Memproses antrian tepat sesuai urutan kedatangannya tanpa optimasi posisi. Permintaan yang berulang (seperti 43 dan 23) tetap dikunjungi secara terpisah satu per satu sesuai urutan antrian.
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">16</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">185</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178</span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Rumus Jarak Mutlak:</strong></div>
          <div class="calc-formula">|50-62| + |62-170| + |170-43| + |43-150| + |150-23| + |23-16| + |16-185| + |185-123| + |123-67| + |67-43| + |43-162| + |162-23| + |23-71| + |71-111| + |111-43| + |43-178|</div>
          <div class="calc-numbers">= 12 + 108 + 127 + 107 + 127 + 7 + 169 + 62 + 56 + 24 + 119 + 139 + 48 + 40 + 68 + 135</div>
          <div class="calc-total">Total Banyaknya Lintasan = 1.348 Track</div>
        </div>
      </div>

      <!-- 2. SSTF -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 2</span>
            <h4 class="algo-title">2. SSTF (Shortest Seek Time First)</h4>
          </div>
          <span class="algo-total-pill">Total: 318 Lintasan</span>
        </div>
        <p class="algo-desc">
          Memilih permintaan dengan jarak (waktu pencarian) terdekat dari posisi head saat ini. Saat mengunjungi suatu track, semua permintaan untuk track tersebut diselesaikan sekaligus.
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43 <small>(Δ7)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62 <small>(Δ19)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67 <small>(Δ5)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71 <small>(Δ4)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111 <small>(Δ40)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123 <small>(Δ12)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150 <small>(Δ27)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162 <small>(Δ12)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170 <small>(Δ8)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178 <small>(Δ8)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">185 <small>(Δ7)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23 <small>(Δ162)</small></span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">16 <small>(Δ7)</small></span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Rumus Jarak Mutlak:</strong></div>
          <div class="calc-formula">|50-43| + |43-62| + |62-67| + |67-71| + |71-111| + |111-123| + |123-150| + |150-162| + |162-170| + |170-178| + |178-185| + |185-23| + |23-16|</div>
          <div class="calc-numbers">= 7 + 19 + 5 + 4 + 40 + 12 + 27 + 12 + 8 + 8 + 7 + 162 + 7</div>
          <div class="calc-total">Total Banyaknya Lintasan = 318 Track</div>
        </div>
      </div>

      <!-- 3. SCAN -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 3</span>
            <h4 class="algo-title">3. SCAN (Elevator Algorithm)</h4>
          </div>
          <span class="algo-total-pill">Total: 332 Lintasan</span>
        </div>
        <p class="algo-desc">
          Head bergerak dari posisi saat ini menuju salah satu ujung disk (ke atas menuju 199) sambil melayani permintaan di sepanjang jalurnya, kemudian berbalik arah menuju ujung lainnya melayani sisa permintaan.
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">185</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node highlight-ujung">199 (Ujung Disk)</span><span class="flow-arrow-icon">↺ berbalik →</span>
            <span class="flow-node">43</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">16</span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Perhitungan Lintasan:</strong></div>
          <div class="calc-formula">• Gerak maju ke ujung disk : |199 - 50| = 149</div>
          <div class="calc-formula">• Berbalik arah ke track 16 : |199 - 16| = 183</div>
          <div class="calc-numbers">= 149 + 183</div>
          <div class="calc-total">Total Banyaknya Lintasan = 332 Track</div>
        </div>
      </div>

      <!-- 4. C-SCAN -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 4</span>
            <h4 class="algo-title">4. C-SCAN (Circular SCAN)</h4>
          </div>
          <span class="algo-total-pill">Total: 391 Lintasan</span>
        </div>
        <p class="algo-desc">
          Head bergerak melayani permintaan hingga ujung disk (199). Setelah mencapai ujung disk, head langsung melompat kembali ke awal track fisik (0) tanpa melayani permintaan, kemudian melanjutkan pencarian ke arah semula.
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">185</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node highlight-ujung">199 (Ujung Disk)</span><span class="flow-arrow-icon">↷ lompat →</span>
            <span class="flow-node highlight-ujung">0 (Awal Disk)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">16</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43</span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Perhitungan Lintasan:</strong></div>
          <div class="calc-formula">• Menuju ujung atas disk : |199 - 50| = 149</div>
          <div class="calc-formula">• Lompatan kembali ke track 0 : |199 - 0| = 199</div>
          <div class="calc-formula">• Melayani sisa track (0 ke 43) : |43 - 0| = 43</div>
          <div class="calc-numbers">= 149 + 199 + 43</div>
          <div class="calc-total">Total Banyaknya Lintasan = 391 Track</div>
        </div>
      </div>

      <!-- 5. LOOK -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 5</span>
            <h4 class="algo-title">5. LOOK <span class="badge-best">⭐ Paling Efisien</span></h4>
          </div>
          <span class="algo-total-pill">Total: 304 Lintasan</span>
        </div>
        <p class="algo-desc">
          Mirip dengan SCAN, namun head hanya bergerak hingga permintaan track terjauh pada arah tersebut (185) lalu langsung berbalik arah, tanpa perlu membuang lintasan ke ujung fisik disk (199).
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node highlight-ujung">185 (Track Terjauh)</span><span class="flow-arrow-icon">↺ berbalik →</span>
            <span class="flow-node">43</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">16</span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Perhitungan Lintasan:</strong></div>
          <div class="calc-formula">• Menuju track terjauh atas : |185 - 50| = 135</div>
          <div class="calc-formula">• Berbalik arah ke track terendah : |185 - 16| = 169</div>
          <div class="calc-numbers">= 135 + 169</div>
          <div class="calc-total">Total Banyaknya Lintasan = 304 Track</div>
        </div>
      </div>

      <!-- 6. C-LOOK -->
      <div class="algo-card-item">
        <div class="algo-header">
          <div class="algo-title-wrap">
            <span class="algo-badge">Algoritma 6</span>
            <h4 class="algo-title">6. C-LOOK (Circular LOOK)</h4>
          </div>
          <span class="algo-total-pill">Total: 331 Lintasan</span>
        </div>
        <p class="algo-desc">
          Mirip dengan C-SCAN, namun head berbalik pada permintaan terjauh (185) dan langsung melompat ke permintaan terendah (16), bukan ke ujung fisik hard disk (199 maupun 0).
        </p>
        <div class="flow-path-container">
          <div class="flow-path-label">Arah Proses Head:</div>
          <div class="flow-path">
            <span class="flow-node start">50 (Mulai)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">62</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">67</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">71</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">111</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">123</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">150</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">162</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">170</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">178</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node highlight-ujung">185 (Track Terjauh)</span><span class="flow-arrow-icon">↷ lompat →</span>
            <span class="flow-node highlight-ujung">16 (Request Terendah)</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">23</span><span class="flow-arrow-icon">→</span>
            <span class="flow-node">43</span>
          </div>
        </div>
        <div class="calc-block">
          <div class="calc-formula"><strong>Perhitungan Lintasan:</strong></div>
          <div class="calc-formula">• Menuju track terjauh atas : |185 - 50| = 135</div>
          <div class="calc-formula">• Lompatan kembali ke track 16 : |185 - 16| = 169</div>
          <div class="calc-formula">• Melayani sisa track (16 ke 43) : |43 - 16| = 27</div>
          <div class="calc-numbers">= 135 + 169 + 27</div>
          <div class="calc-total">Total Banyaknya Lintasan = 331 Track</div>
        </div>
      </div>

      <!-- Tabel Ringkasan Hasil Komparasi -->
      <div style="margin-top:28px;">
        <h4 style="font-size:1.15rem; color:var(--espresso); margin-bottom:10px;">📊 Tabel Ringkasan Hasil Komparasi Algoritma:</h4>
        <div class="so-table-responsive">
          <table class="so-table">
            <thead>
              <tr>
                <th style="width: 22%;">Nama Algoritma</th>
                <th style="width: 24%;">Total Banyaknya Lintasan</th>
                <th style="width: 54%;">Keterangan &amp; Karakteristik Proses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>FCFS</strong></td>
                <td><strong style="color:#C62828;">1.348 Track</strong></td>
                <td>Melayani murni sesuai urutan kedatangan antrian (tidak ada optimasi, pergerakan bolak-balik ekstrem)</td>
              </tr>
              <tr>
                <td><strong>SSTF</strong></td>
                <td><strong style="color:#2E7D32;">318 Track</strong></td>
                <td>Memilih jarak terdekat dari posisi head saat ini (sangat efisien namun berpotensi kelaparan/starvation)</td>
              </tr>
              <tr>
                <td><strong>SCAN</strong></td>
                <td><strong>332 Track</strong></td>
                <td>Bergerak ke arah naik hingga ujung fisik disk (199), lalu berbalik arah melayani track tersisa</td>
              </tr>
              <tr>
                <td><strong>C-SCAN</strong></td>
                <td><strong>391 Track</strong></td>
                <td>Bergerak hingga ujung disk (199), melompat kembali ke track awal (0), lalu maju kembali</td>
              </tr>
              <tr>
                <td><strong>LOOK</strong></td>
                <td><strong style="color:#2E7D32;">304 Track</strong> <span class="badge-best">Juara 1</span></td>
                <td>Bergerak naik hingga permintaan track terjauh (185) lalu berbalik arah (paling hemat lintasan)</td>
              </tr>
              <tr>
                <td><strong>C-LOOK</strong></td>
                <td><strong>331 Track</strong></td>
                <td>Bergerak hingga permintaan terjauh (185), melompat langsung ke permintaan terendah (16)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    code: `=== VISUALISASI DIAGRAM LINTASAN PERGERAKAN HEAD (DISK SCHEDULING) ===
Track Range  : 0 s.d 199 | Posisi Awal: 50 | Arah: NAIK (Menuju 199)
Antrian Unik : 16, 23, 43, 62, 67, 71, 111, 123, 150, 162, 170, 178, 185

1. FCFS (Total: 1.348 track):
   50 -> 62 -> 170 -> 43 -> 150 -> 23 -> 16 -> 185 -> 123 -> 67 -> 43 -> 162 -> 23 -> 71 -> 111 -> 43 -> 178

2. SSTF (Total: 318 track):
   50 -> 43 -> 62 -> 67 -> 71 -> 111 -> 123 -> 150 -> 162 -> 170 -> 178 -> 185 -> 23 -> 16

3. SCAN (Total: 332 track):
   50 -> 62 -> 67 -> 71 -> 111 -> 123 -> 150 -> 162 -> 170 -> 178 -> 185 -> [199 Ujung] 
   == BERBALIK ==
   -> 43 -> 23 -> 16

4. C-SCAN (Total: 391 track):
   50 -> 62 -> 67 -> 71 -> 111 -> 123 -> 150 -> 162 -> 170 -> 178 -> 185 -> [199 Ujung]
   == LOMPAT KE TRACK 0 ==
   -> [0 Awal] -> 16 -> 23 -> 43

5. LOOK (Total: 304 track) [PALING EFISIEN]:
   50 -> 62 -> 67 -> 71 -> 111 -> 123 -> 150 -> 162 -> 170 -> 178 -> [185 Terjauh]
   == BERBALIK ==
   -> 43 -> 23 -> 16

6. C-LOOK (Total: 331 track):
   50 -> 62 -> 67 -> 71 -> 111 -> 123 -> 150 -> 162 -> 170 -> 178 -> [185 Terjauh]
   == LOMPAT LANGSUNG KE PERMINTAAN TERENDAH ==
   -> [16 Terendah] -> 23 -> 43`,
    notes: 'Algoritma LOOK menghasilkan jumlah lintasan terkecil (304 track) karena tidak mengunjungi ujung fisik disk yang tidak diminta, diikuti oleh SSTF (318 track).'
  }
];

// State Aplikasi
let currentTasks = [];
let activeFilter = 'all';
let searchQuery = '';

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
  loadTasks();
  initEventListeners();
  renderTasks();
  updateStats();
});

// Memuat data dari localStorage atau default
function loadTasks() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      currentTasks = JSON.parse(saved);
    } else {
      currentTasks = [...DEFAULT_TASKS];
      saveTasksToStorage();
    }
  } catch (err) {
    console.error('Gagal membaca storage, menggunakan default:', err);
    currentTasks = [...DEFAULT_TASKS];
  }
}

function saveTasksToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTasks));
  } catch (err) {
    console.error('Gagal menyimpan ke storage:', err);
  }
}

// Inisialisasi Event Listener Interaktif
function initEventListeners() {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show-mobile');
    });
  }

  // 2. Search Box Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderTasks();
    });
  }

  // 3. Filter Chips
  const filterChips = document.querySelectorAll('.filter-chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-filter') || 'all';
      renderTasks();
    });
  });

  // 4. Modal Buka & Tutup
  const openModalBtn = document.getElementById('openAddModalBtn');
  const heroAddBtn = document.getElementById('heroAddBtn');
  const modalOverlay = document.getElementById('taskModalOverlay');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const cancelModalBtn = document.getElementById('cancelModalBtn');
  const taskForm = document.getElementById('taskForm');

  const openModal = (isEdit = false, taskData = null) => {
    taskForm.reset();
    document.getElementById('taskIdInput').value = '';
    const modalTitle = document.getElementById('modalTitle');
    
    if (isEdit && taskData) {
      modalTitle.textContent = 'Edit Tugas Sistem Operasi';
      document.getElementById('taskIdInput').value = taskData.id;
      document.getElementById('taskNumInput').value = taskData.num || '';
      document.getElementById('taskTitleInput').value = taskData.title || '';
      document.getElementById('taskPertemuanInput').value = taskData.pertemuan || '';
      document.getElementById('taskCategoryInput').value = taskData.category || 'penjadwalan';
      document.getElementById('taskSoalInput').value = taskData.soal || '';
      document.getElementById('taskJawabanInput').value = taskData.jawaban || '';
      document.getElementById('taskCodeInput').value = taskData.code || '';
      document.getElementById('taskNotesInput').value = taskData.notes || '';
    } else {
      modalTitle.textContent = 'Tambah Tugas Baru';
      const nextNum = currentTasks.length + 1;
      document.getElementById('taskNumInput').value = `Tugas ${nextNum < 10 ? '0' + nextNum : nextNum}`;
      document.getElementById('taskPertemuanInput').value = `Pertemuan ${nextNum}`;
    }

    modalOverlay.classList.add('active');
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
  };

  if (openModalBtn) openModalBtn.addEventListener('click', () => openModal(false));
  if (heroAddBtn) heroAddBtn.addEventListener('click', () => openModal(false));
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (cancelModalBtn) cancelModalBtn.addEventListener('click', closeModal);

  // Tutup jika klik luar modal
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Simpan Form Tugas
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('taskIdInput').value;
    const num = document.getElementById('taskNumInput').value.trim();
    const title = document.getElementById('taskTitleInput').value.trim();
    const pertemuan = document.getElementById('taskPertemuanInput').value.trim();
    const category = document.getElementById('taskCategoryInput').value;
    const soal = document.getElementById('taskSoalInput').value.trim();
    const jawaban = document.getElementById('taskJawabanInput').value.trim();
    const code = document.getElementById('taskCodeInput').value.trim();
    const notes = document.getElementById('taskNotesInput').value.trim();

    const categoryNames = {
      penjadwalan: 'Algoritma Penjadwalan Disk',
      praktikum: 'Praktikum Linux / CLI',
      teori: 'Teori & Konsep',
      memori: 'Manajemen Memori',
      deadlock: 'Deadlock & Concurrency'
    };

    const taskObj = {
      id: id || 'so-task-' + Date.now(),
      num: num || 'Tugas Baru',
      title: title || 'Tugas Sistem Operasi',
      pertemuan: pertemuan || 'Pertemuan Kuliah',
      category: category,
      categoryLabel: categoryNames[category] || 'Sistem Operasi',
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
      soal: soal,
      jawaban: jawaban,
      code: code,
      notes: notes
    };

    if (id) {
      const index = currentTasks.findIndex(t => t.id === id);
      if (index !== -1) {
        currentTasks[index] = taskObj;
      }
      showToast('Tugas berhasil diperbarui!');
    } else {
      currentTasks.unshift(taskObj);
      showToast('Tugas baru berhasil disimpan!');
    }

    saveTasksToStorage();
    renderTasks();
    updateStats();
    closeModal();
  });

  // Ekspor & Impor Data JSON
  const exportBtn = document.getElementById('exportJsonBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', exportTasksJson);
  }

  const importBtn = document.getElementById('importJsonBtn');
  const importFileInput = document.getElementById('importFileInput');
  if (importBtn && importFileInput) {
    importBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', handleImportJson);
  }

  // Reset ke Tugas Utama (Tugas 1 Disk Scheduling)
  const resetBtn = document.getElementById('resetDefaultBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Kembalikan ke TUGAS 1 resmi (Disk Scheduling)?')) {
        currentTasks = [...DEFAULT_TASKS];
        saveTasksToStorage();
        renderTasks();
        updateStats();
        showToast('Data TUGAS 1 telah dipulihkan.');
      }
    });
  }
}

// Render Seluruh Tugas ke Layar
function renderTasks() {
  const container = document.getElementById('tasksContainer');
  const emptyState = document.getElementById('emptyState');
  if (!container) return;

  // Filter & Search
  const filtered = currentTasks.filter(task => {
    const matchCat = (activeFilter === 'all') || (task.category === activeFilter);
    if (!matchCat) return false;

    if (!searchQuery) return true;
    const combined = `${task.num} ${task.title} ${task.pertemuan} ${task.soal} ${task.code} ${task.notes}`.toLowerCase();
    return combined.includes(searchQuery);
  });

  if (filtered.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  container.innerHTML = filtered.map((task, idx) => {
    const isFirst = idx === 0;
    const formattedSoal = escapeHtml(task.soal).replace(/\n/g, '<br>');

    return `
      <article class="task-card ${isFirst ? 'expanded' : ''}" id="card-${task.id}" data-id="${task.id}">
        <div class="task-card-header" onclick="toggleTaskCard('${task.id}')">
          <div class="task-header-left">
            <div class="task-meta-row">
              <span class="task-num-badge">${escapeHtml(task.num || 'Tugas')}</span>
              <span class="task-cat-badge ${task.category}">${escapeHtml(task.categoryLabel || task.category)}</span>
              <span class="task-cat-badge selesai">✓ ${escapeHtml(task.pertemuan || 'Materi SO')}</span>
            </div>
            <h3 class="task-title">${escapeHtml(task.title)}</h3>
          </div>
          <div class="task-header-right">
            <div class="toggle-arrow" aria-label="Buka/Tutup Tugas">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>

        <div class="task-card-body">
          <!-- Soal / Instruksi -->
          <div class="task-section-block">
            <div class="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Soal / Instruksi Tugas (Deadline: 23 November 2026)
            </div>
            <div class="soal-box">
              ${formattedSoal}
            </div>
          </div>

          <!-- Jawaban / Pembahasan Lengkap -->
          <div class="task-section-block">
            <div class="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Pembahasan &amp; Perhitungan Seluruh Algoritma
            </div>
            <div class="jawaban-box" id="ans-${task.id}">
              ${task.jawaban}
            </div>
          </div>

          ${task.code ? `
          <!-- Diagram / Ringkasan Lintasan Text -->
          <div class="task-section-block">
            <div class="section-label">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              Diagram Arah Proses &amp; Format Teks Jawaban (Siap Disalin)
            </div>
            <div class="terminal-card">
              <div class="terminal-header">
                <div class="terminal-dots">
                  <span class="terminal-dot dot-red"></span>
                  <span class="terminal-dot dot-yellow"></span>
                  <span class="terminal-dot dot-green"></span>
                </div>
                <div class="terminal-title">disk-scheduling &bull; tugas1-so@unper:~$</div>
                <button type="button" class="btn-copy-code" onclick="copyCodeSnippet('${task.id}')">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                  Salin Diagram Teks
                </button>
              </div>
              <div class="terminal-body">
                <pre id="code-${task.id}">${escapeHtml(task.code)}</pre>
              </div>
            </div>
          </div>
          ` : ''}

          ${task.notes ? `
          <div class="task-section-block">
            <div class="form-helper" style="font-size:0.88rem; color:var(--text-muted); padding: 10px 14px; background:var(--pale-oak-light); border-radius:6px; border-left:3px solid var(--espresso);">
              <strong>💡 Kesimpulan &amp; Analisis:</strong> ${escapeHtml(task.notes)}
            </div>
          </div>
          ` : ''}

          <!-- Footer Kartu -->
          <div class="task-card-footer">
            <div class="task-footer-left">
              <span><strong>Status:</strong> Selesai Dihitung &bull; ${task.date || 'Tugas Kuliah'}</span>
            </div>
            <div class="task-footer-buttons">
              <button type="button" class="btn-action-ghost" onclick="copyFullAnswer('${task.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Salin Jawaban Lengkap
              </button>
              <button type="button" class="btn-action-ghost" onclick="editTask('${task.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                Edit
              </button>
              <button type="button" class="btn-action-ghost btn-delete-task" onclick="deleteTask('${task.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Hapus
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Buka/Tutup Accordion Card
window.toggleTaskCard = function(id) {
  const card = document.getElementById(`card-${id}`);
  if (card) {
    card.classList.toggle('expanded');
  }
};

// Salin Kode / Diagram Terminal
window.copyCodeSnippet = function(id) {
  const codeEl = document.getElementById(`code-${id}`);
  if (!codeEl) return;
  const text = codeEl.innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Diagram & arah proses teks berhasil disalin!');
  }).catch(() => {
    showToast('Gagal menyalin otomatis.');
  });
};

// Salin Jawaban Lengkap (Soal + Perhitungan + Tabel)
window.copyFullAnswer = function(id) {
  const task = currentTasks.find(t => t.id === id);
  if (!task) return;

  const fullText = `TUGAS 1 SISTEM OPERASI (Deadline: 23 November 2026)
Materi: Simulasi Algoritma Penjadwalan Disk (Disk Scheduling)
Nama: Arfyn Diazs Aryada - Teknik Informatika UNPER

SOAL:
${task.soal}

RINGKASAN HASIL PERHITUNGAN:
1. FCFS   : 1.348 Lintasan
2. SSTF   : 318 Lintasan
3. SCAN   : 332 Lintasan
4. C-SCAN : 391 Lintasan
5. LOOK   : 304 Lintasan (Paling Efisien / Juara 1)
6. C-LOOK : 331 Lintasan

DIAGRAM ARAH PROSES:
${task.code}

KESIMPULAN:
${task.notes}`;

  navigator.clipboard.writeText(fullText).then(() => {
    showToast('Jawaban lengkap TUGAS 1 berhasil disalin!');
  }).catch(() => {
    showToast('Gagal menyalin.');
  });
};

// Edit Tugas
window.editTask = function(id) {
  const task = currentTasks.find(t => t.id === id);
  if (!task) return;

  const modalOverlay = document.getElementById('taskModalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  modalTitle.textContent = 'Edit Tugas Sistem Operasi';

  document.getElementById('taskIdInput').value = task.id;
  document.getElementById('taskNumInput').value = task.num || '';
  document.getElementById('taskTitleInput').value = task.title || '';
  document.getElementById('taskPertemuanInput').value = task.pertemuan || '';
  document.getElementById('taskCategoryInput').value = task.category || 'penjadwalan';
  document.getElementById('taskSoalInput').value = task.soal || '';
  document.getElementById('taskJawabanInput').value = task.jawaban || '';
  document.getElementById('taskCodeInput').value = task.code || '';
  document.getElementById('taskNotesInput').value = task.notes || '';

  modalOverlay.classList.add('active');
};

// Hapus Tugas
window.deleteTask = function(id) {
  const task = currentTasks.find(t => t.id === id);
  if (!task) return;

  if (confirm(`Hapus tugas "${task.title}"?`)) {
    currentTasks = currentTasks.filter(t => t.id !== id);
    saveTasksToStorage();
    renderTasks();
    updateStats();
    showToast('Tugas telah dihapus.');
  }
};

// Perbarui Statistik di Hero
function updateStats() {
  const totalEl = document.getElementById('statTotalTasks');
  const praktikumEl = document.getElementById('statPraktikumTasks');
  const teoriEl = document.getElementById('statTeoriTasks');

  if (totalEl) totalEl.textContent = currentTasks.length;
  if (praktikumEl) {
    praktikumEl.textContent = currentTasks.length === 1 ? '6 Algoritma' : `${currentTasks.filter(t => t.category === 'penjadwalan' || t.code).length} Modul`;
  }
  if (teoriEl) {
    teoriEl.textContent = currentTasks.length === 1 ? '23 Nov 2026' : 'Aktif';
  }
}

// Ekspor JSON
function exportTasksJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentTasks, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `tugas_sistem_operasi_arfyn_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('Cadangan berkas JSON berhasil diunduh!');
}

// Impor JSON
function handleImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const importedData = JSON.parse(event.target.result);
      if (Array.isArray(importedData)) {
        currentTasks = importedData;
        saveTasksToStorage();
        renderTasks();
        updateStats();
        showToast('Tugas berhasil diimpor!');
      } else {
        alert('Format file JSON tidak valid. Pastikan berisi kumpulan tugas.');
      }
    } catch (err) {
      alert('Gagal membaca file JSON: ' + err.message);
    }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// Notifikasi Toast
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${escapeHtml(message)}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Utility: Escape HTML agar aman
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
