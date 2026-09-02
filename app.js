const logo = "assets/sansfx-logo.jpeg";

/*
  GANTI URL DI BAWAH INI DENGAN LINK PENDAFTARAN BROKER
  YANG NANTI DIBERIKAN OLEH TEAM SANS.FX.
*/
const brokerRegistrationUrl = "https://example.com/daftar-broker";

let state = {
  role: "management",
  tab: "overview"
};

const defaultBio = {
  name: "Nama Mitra Anda",
  logo: logo,
  description:
    "Bangun jaringan dan berkembang bersama ekosistem SANS.FX.",
  whatsapp: "https://wa.me/6281200000000",
  instagram: "https://instagram.com/",
  telegram: "https://t.me/",
  broker: brokerRegistrationUrl
};

function getBio() {
  return JSON.parse(
    localStorage.getItem("sansfx_bio")
  ) || defaultBio;
}

function saveBio() {
  const bio = {
    name: document.querySelector("#bioName").value,
    logo: document.querySelector("#bioLogo").value || logo,
    description: document.querySelector("#bioDescription").value,
    whatsapp: document.querySelector("#bioWhatsapp").value,
    instagram: document.querySelector("#bioInstagram").value,
    telegram: document.querySelector("#bioTelegram").value,
    broker: document.querySelector("#bioBroker").value
  };

  localStorage.setItem("sansfx_bio", JSON.stringify(bio));

  document.querySelector("#saveMessage").innerHTML = `
    <div class="notice">
      Pengaturan Link Bio berhasil disimpan di browser ini.
    </div>
  `;
}

function topbar() {
  return `
    <header class="topbar">
      <nav class="nav">
        <a href="#/" class="brand">
          <img src="${logo}" alt="SANS.FX">

          <span>
            <span class="brand-name">
              SANS.<b>FX</b>
            </span>

            <span class="brand-tagline">
              Smart Advertising and Network Solutions
            </span>
          </span>
        </a>

        <div class="navlinks">
          <a href="#/about">Tentang</a>
          <a href="#/how-it-works">Cara Kerja</a>
          <a href="#/apply">Kerja Sama</a>
          <a href="#/dashboard">Login</a>
        </div>

        <a class="btn btn-gold" href="#/apply">
          Kerja Sama SANS.FX
        </a>
      </nav>
    </header>
  `;
}

function home() {
  return `
    <div class="shell">
      ${topbar()}

      <main>
        <section class="hero">
          <div>
            <div class="eyebrow">
              SMART NETWORK • SMART ADVERTISING
            </div>

            <h1>
              Bangun jaringan Anda.
              <span class="grad">
                Kembangkan potensi bersama SANS.FX.
              </span>
            </h1>

            <p class="lead">
              SANS.FX membantu mitra dan komunitas membangun jaringan yang
              lebih terarah melalui strategi advertising yang cerdas,
              solusi digital, dan pengelolaan hubungan yang profesional.
            </p>

            <div class="actions">
              <a class="btn btn-gold" href="#/apply">
                Kerja Sama SANS.FX
              </a>

              <a class="btn btn-dark" href="#/how-it-works">
                Pelajari Cara Kerja
              </a>
            </div>

            <div class="mini-grid">
              <div class="mini">
                <b>Smart</b>
                <span>Strategi promosi</span>
              </div>

              <div class="mini">
                <b>Network</b>
                <span>Jaringan terarah</span>
              </div>

              <div class="mini">
                <b>Solutions</b>
                <span>Sistem untuk mitra</span>
              </div>
            </div>
          </div>

          <div class="hero-card">
            <img src="${logo}" alt="SANS.FX">

            <div class="mini-grid">
              <div class="mini">
                <b>Brand</b>
                <span>Lebih profesional</span>
              </div>

              <div class="mini">
                <b>System</b>
                <span>Lebih terstruktur</span>
              </div>

              <div class="mini">
                <b>Growth</b>
                <span>Lebih terukur</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="about">
          <h2>Solusi untuk jaringan yang berkembang</h2>

          <p class="section-sub">
            SANS.FX menghadirkan ruang kerja digital bagi mitra yang ingin
            mengembangkan komunitas, membangun brand, dan mengelola jaringan
            secara lebih efektif.
          </p>

          <div class="grid3">
            <article class="card">
              <div class="icon">✦</div>
              <h3>Smart Advertising</h3>
              <p>
                Bantu komunitas dan mitra menjangkau audiens yang tepat
                melalui promosi digital yang lebih terarah.
              </p>
            </article>

            <article class="card">
              <div class="icon">◈</div>
              <h3>Network Management</h3>
              <p>
                Kelola struktur mitra, tim, dan client secara terorganisir
                melalui sistem yang terhubung.
              </p>
            </article>

            <article class="card">
              <div class="icon">↗</div>
              <h3>Performance Insight</h3>
              <p>
                Tampilkan perkembangan trading secara manual dan profesional
                sebagai nilai tambah bagi jaringan Anda.
              </p>
            </article>
          </div>
        </section>

        <section class="section" id="how-it-works">
          <div class="card">
            <h2>Bagaimana SANS.FX bekerja?</h2>

            <p class="section-sub">
              Kami membangun kerja sama bersama mitra yang ingin mengembangkan
              komunitas atau jaringan mereka. Setelah disetujui, mitra akan
              mendapatkan akses aplikasi atau web dari SANS.FX.
            </p>

            <div class="grid3">
              <article class="card">
                <div class="icon">1</div>
                <h3>Ajukan Kerja Sama</h3>
                <p>
                  Isi formulir kerja sama dengan informasi dasar mengenai
                  diri dan jaringan Anda.
                </p>
              </article>

              <article class="card">
                <div class="icon">2</div>
                <h3>Review Team</h3>
                <p>
                  Team SANS.FX memeriksa dan menghubungi calon mitra.
                </p>
              </article>

              <article class="card">
                <div class="icon">3</div>
                <h3>Mulai Berkembang</h3>
                <p>
                  Mitra mendapatkan akses sistem dan link pendaftaran broker
                  resmi yang ditentukan SANS.FX.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section class="section">
          <div class="card">
            <h2>Siap membangun jaringan yang lebih kuat?</h2>

            <p class="section-sub">
              Mulai percakapan kerja sama bersama SANS.FX hari ini.
            </p>

            <a class="btn btn-gold" href="#/apply">
              Kerja Sama SANS.FX
            </a>
          </div>
        </section>
      </main>

      <footer class="footer">
        © 2026 SANS.FX — Smart Advertising and Network Solutions
      </footer>
    </div>
  `;
}

function applyPage() {
  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div class="bio-card">
          <img src="${logo}" alt="SANS.FX">

          <h1>Kerja Sama SANS.FX</h1>

          <p>
            Isi data berikut agar team SANS.FX dapat memahami profil
            dan kebutuhan kerja sama Anda.
          </p>

          <div class="form-grid" style="text-align:left">
            <div class="field">
              <label>Nama Lengkap</label>
              <input id="applyName" placeholder="Nama lengkap">
            </div>

            <div class="field">
              <label>Nama Komunitas atau Bisnis</label>
              <input id="applyCommunity" placeholder="Nama komunitas">
            </div>

            <div class="field">
              <label>WhatsApp</label>
              <input id="applyWhatsapp" placeholder="+62">
            </div>

            <div class="field">
              <label>Email</label>
              <input id="applyEmail" type="email" placeholder="email@example.com">
            </div>

            <div class="field">
              <label>Kota / Negara</label>
              <input id="applyLocation" placeholder="Contoh: Jakarta, Indonesia">
            </div>

            <div class="field">
              <label>Profil Kerja Sama</label>
              <select id="applyProfile">
                <option>Sudah memiliki komunitas</option>
                <option>Belum memiliki komunitas</option>
                <option>Memiliki jaringan atau tim</option>
                <option>Ingin mengembangkan brand</option>
              </select>
            </div>

            <div class="field" style="grid-column: 1 / -1">
              <label>Ceritakan rencana kerja sama Anda</label>
              <textarea
                id="applyMessage"
                rows="5"
                placeholder="Tuliskan informasi singkat mengenai jaringan atau rencana Anda"></textarea>
            </div>
          </div>

          <button
            class="btn btn-gold"
            style="width:100%;margin-top:18px"
            onclick="submitApplication()">
            Kirim Pengajuan
          </button>

          <div id="applyResult"></div>

          <a
            href="#/"
            class="btn btn-dark"
            style="display:block;margin-top:10px">
            Kembali
          </a>
        </div>
      </main>
    </div>
  `;
}

function submitApplication() {
  const name = document.querySelector("#applyName").value.trim();
  const community = document.querySelector("#applyCommunity").value.trim();
  const whatsapp = document.querySelector("#applyWhatsapp").value.trim();
  const email = document.querySelector("#applyEmail").value.trim();
  const location = document.querySelector("#applyLocation").value.trim();
  const profile = document.querySelector("#applyProfile").value;
  const message = document.querySelector("#applyMessage").value.trim();

  const result = document.querySelector("#applyResult");

  if (!name || !community || !whatsapp || !email || !location) {
    result.innerHTML = `
      <div class="notice">
        Mohon lengkapi nama, komunitas/bisnis, WhatsApp, email,
        dan kota/negara.
      </div>
    `;
    return;
  }

  const application = {
    name,
    community,
    whatsapp,
    email,
    location,
    profile,
    message,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(
    "sansfx_application",
    JSON.stringify(application)
  );

  result.innerHTML = `
    <div class="notice">
      Pengajuan kerja sama berhasil dicatat pada prototype ini.
      <br><br>
      Silakan lanjut ke pendaftaran broker resmi melalui tombol berikut.
      <br><br>

      <a
        class="btn btn-gold"
        href="${brokerRegistrationUrl}"
        target="_blank"
        rel="noopener">
        Lanjut ke Pendaftaran Broker
      </a>
    </div>
  `;
}

function sidebar() {
  const menu = [
    ["overview", "Overview"],
    ["network", "Jaringan Saya"],
    ["clients", "Client"],
    ["bio", "Link Bio"],
    ["performance", "Trading Performance"]
  ];

  return `
    <aside class="sidebar">
      <div class="sidebrand">
        <img src="${logo}" alt="SANS.FX">

        <div>
          <strong>SANS.FX HUB</strong>
          <small>Partner Workspace</small>
        </div>
      </div>

      <div class="menu">
        ${menu.map(item => `
          <button
            class="${state.tab === item[0] ? "active" : ""}"
            onclick="setTab('${item[0]}')">
            ${item[1]}
          </button>
        `).join("")}

        <button onclick="location.hash = '#/'">
          ← Kembali ke Website
        </button>
      </div>
    </aside>
  `;
}

function dashboard() {
  let content = overview();

  if (state.tab === "network") content = network();
  if (state.tab === "clients") content = clients();
  if (state.tab === "bio") content = bioSettings();
  if (state.tab === "performance") content = performance();

  return `
    <div class="shell">
      ${topbar()}

      <main class="dashboard">
        ${sidebar()}

        <section class="content">
          <div class="dashhead">
            <div>
              <div class="eyebrow">PRIVATE WORKSPACE</div>
              <h2>Dashboard ${state.role}</h2>
            </div>

            <div class="role-switch">
              <button
                class="${state.role === "Management" ? "active" : ""}"
                onclick="setRole('Management')">
                Management
              </button>

              <button
                class="${state.role === "Mitra" ? "active" : ""}"
                onclick="setRole('Mitra')">
                Mitra
              </button>

              <button
                class="${state.role === "Tim" ? "active" : ""}"
                onclick="setRole('Tim')">
                Tim
              </button>

              <button
                class="${state.role === "Client" ? "active" : ""}"
                onclick="setRole('Client')">
                Client
              </button>
            </div>
          </div>

          ${content}
        </section>
      </main>
    </div>
  `;
}

function overview() {
  return `
    <div class="stats">
      <div class="stat">
        <span>Jaringan Aktif</span>
        <b>18</b>
        <small>terkelola</small>
      </div>

      <div class="stat">
        <span>Tim</span>
        <b>42</b>
        <small>terdaftar</small>
      </div>

      <div class="stat">
        <span>Client</span>
        <b>284</b>
        <small>tercatat</small>
      </div>

      <div class="stat">
        <span>Performance Update</span>
        <b>76%</b>
        <small>bulan ini</small>
      </div>
    </div>

    <div class="panel">
      <h3>Aktivitas Terbaru</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Aktivitas</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Waktu</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Pendaftaran client baru</td>
            <td>Ahmad F.</td>
            <td>Menunggu verifikasi</td>
            <td>Hari ini</td>
          </tr>

          <tr>
            <td>Update trading performance</td>
            <td>Andi Gold Team</td>
            <td>Berhasil</td>
            <td>Kemarin</td>
          </tr>

          <tr>
            <td>Tim baru ditambahkan</td>
            <td>Rizky A.</td>
            <td>Aktif</td>
            <td>2 hari lalu</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function network() {
  return `
    <div class="panel">
      <h3>Jaringan Saya</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Peran</th>
            <th>Client</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Andi Gold Team</td>
            <td>Tim</td>
            <td>63</td>
            <td>Aktif</td>
          </tr>

          <tr>
            <td>Budi Trader Club</td>
            <td>Tim</td>
            <td>42</td>
            <td>Aktif</td>
          </tr>

          <tr>
            <td>Raka Community</td>
            <td>Tim</td>
            <td>28</td>
            <td>Menunggu update</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function clients() {
  return `
    <div class="panel">
      <div class="dashhead">
        <div>
          <h3>Client</h3>
          <p class="section-sub">
            Client yang bergabung melalui jaringan Anda.
          </p>
        </div>

        <button
          class="btn btn-gold"
          onclick="alert('Form client akan disambungkan ke database pada tahap berikutnya.')">
          + Tambah Client
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Mentor</th>
            <th>Status</th>
            <th>Performance</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Ahmad F.</td>
            <td>Andi Gold Team</td>
            <td>Aktif</td>
            <td>Sudah diperbarui</td>
          </tr>

          <tr>
            <td>Rizky A.</td>
            <td>Andi Gold Team</td>
            <td>Aktif</td>
            <td>Belum diperbarui</td>
          </tr>

          <tr>
            <td>Dimas P.</td>
            <td>Budi Trader Club</td>
            <td>Menunggu</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function bioSettings() {
  const bio = getBio();

  return `
    <div class="two">
      <div class="panel">
        <h3>Pengaturan Link Bio</h3>

        <div class="form-grid">
          <div class="field">
            <label>Nama</label>
            <input id="bioName" value="${bio.name}">
          </div>

          <div class="field">
            <label>URL Logo</label>
            <input id="bioLogo" value="${bio.logo}">
          </div>

          <div class="field" style="grid-column:1/-1">
            <label>Deskripsi</label>
            <textarea id="bioDescription" rows="4">${bio.description}</textarea>
          </div>

          <div class="field">
            <label>WhatsApp</label>
            <input id="bioWhatsapp" value="${bio.whatsapp}">
          </div>

          <div class="field">
            <label>Instagram</label>
            <input id="bioInstagram" value="${bio.instagram}">
          </div>

          <div class="field">
            <label>Telegram</label>
            <input id="bioTelegram" value="${bio.telegram}">
          </div>

          <div class="field">
            <label>Link Pendaftaran Broker</label>
            <input id="bioBroker" value="${bio.broker}">
          </div>
        </div>

        <button
          class="btn btn-gold"
          style="margin-top:18px"
          onclick="saveBio()">
          Simpan Link Bio
        </button>

        <div id="saveMessage"></div>
      </div>

      <div class="panel">
        <h3>Link Publik Anda</h3>

        <p class="section-sub">
          Gunakan link ini pada TikTok, Instagram, WhatsApp,
          atau platform lainnya.
        </p>

        <div class="notice">
          sanss09.github.io/SANS.FX/#/bio/mitra
        </div>

        <a
          class="btn btn-gold"
          style="margin-top:16px"
          href="#/bio/mitra">
          Preview Link Bio
        </a>
      </div>
    </div>
  `;
}

function performance() {
  return `
    <div class="panel">
      <h3>Trading Performance</h3>

      <p class="section-sub">
        Data pada tahap ini diinput secara manual. Sistem belum mengambil
        data langsung dari broker.
      </p>

      <div class="form-grid">
        <div class="field">
          <label>Starting Equity</label>
          <input id="start" type="number" placeholder="1000">
        </div>

        <div class="field">
          <label>Ending Equity</label>
          <input id="end" type="number" placeholder="1200">
        </div>

        <div class="field">
          <label>Deposit Tambahan</label>
          <input id="deposit" type="number" placeholder="0">
        </div>

        <div class="field">
          <label>Withdrawal</label>
          <input id="withdrawal" type="number" placeholder="0">
        </div>

        <div class="field">
          <label>Total Trade</label>
          <input id="trades" type="number" placeholder="20">
        </div>

        <div class="field">
          <label>Winning Trade</label>
          <input id="wins" type="number" placeholder="13">
        </div>
      </div>

      <button
        class="btn btn-gold"
        style="margin-top:18px"
        onclick="calculatePerformance()">
        Hitung Performance
      </button>

      <div id="performanceResult"></div>
    </div>
  `;
}

function calculatePerformance() {
  const start = Number(document.querySelector("#start").value) || 0;
  const end = Number(document.querySelector("#end").value) || 0;
  const deposit = Number(document.querySelector("#deposit").value) || 0;
  const withdrawal = Number(document.querySelector("#withdrawal").value) || 0;
  const trades = Number(document.querySelector("#trades").value) || 0;
  const wins = Number(document.querySelector("#wins").value) || 0;

  const profit = end - start - deposit + withdrawal;
  const returnRate = start ? (profit / start) * 100 : 0;
  const winRate = trades ? (wins / trades) * 100 : 0;

  document.querySelector("#performanceResult").innerHTML = `
    <div class="mini-grid">
      <div class="mini">
        <b>${profit.toFixed(2)}</b>
        <span>Net Trading P/L</span>
      </div>

      <div class="mini">
        <b>${returnRate.toFixed(2)}%</b>
        <span>Return</span>
      </div>

      <div class="mini">
        <b>${winRate.toFixed(2)}%</b>
        <span>Win Rate</span>
      </div>
    </div>
  `;
}

function bioPage() {
  const bio = getBio();

  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div class="bio-card">
          <img src="${bio.logo}" alt="${bio.name}">

          <h1>${bio.name}</h1>

          <p>${bio.description}</p>

          <div class="bio-links">
            <a
              class="primary"
              href="${bio.broker}"
              target="_blank"
              rel="noopener">
              Daftar Broker Resmi
            </a>

            <a
              href="${bio.whatsapp}"
              target="_blank"
              rel="noopener">
              WhatsApp
            </a>

            <a
              href="${bio.instagram}"
              target="_blank"
              rel="noopener">
              Instagram
            </a>

            <a
              href="${bio.telegram}"
              target="_blank"
              rel="noopener">
              Telegram
            </a>

            <a href="#/dashboard">
              Masuk ke Workspace
            </a>
          </div>
        </div>

        <div class="footer">
          Powered by SANS.FX
        </div>
      </main>
    </div>
  `;
}

function setRole(role) {
  state.role = role;
  state.tab = role === "Client" ? "performance" : "overview";
  render();
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function render() {
  const route = location.hash || "#/";

  if (route === "#/apply") {
    document.querySelector("#app").innerHTML = applyPage();
    return;
  }

  if (route.startsWith("#/bio/")) {
    document.querySelector("#app").innerHTML = bioPage();
    return;
  }

  if (route.startsWith("#/dashboard")) {
    document.querySelector("#app").innerHTML = dashboard();
    return;
  }

  document.querySelector("#app").innerHTML = home();
}

window.setRole = setRole;
window.setTab = setTab;
window.submitApplication = submitApplication;
window.saveBio = saveBio;
window.calculatePerformance = calculatePerformance;

window.addEventListener("hashchange", render);

render();
