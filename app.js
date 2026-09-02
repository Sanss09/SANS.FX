const logo = "assets/sansfx-logo.jpeg";

const brokerRegistrationUrl =
  "https://example.com/daftar-broker";

const defaultProfile = {
  name: "Nama Pengguna",
  city: "Jakarta",
  logo: logo,
  background: "",
  description: "Berkembang bersama jaringan SANS.FX.",
  links: [
    {
      label: "Daftar Broker Resmi",
      url: brokerRegistrationUrl
    },
    {
      label: "WhatsApp",
      url: "https://wa.me/6281200000000"
    },
    {
      label: "Instagram",
      url: "https://instagram.com/"
    }
  ]
};

let state = {
  role: "Management",
  tab: "dashboard",
  sidebarOpen: true
};

function profileData() {
  return JSON.parse(
    localStorage.getItem("sansfx_profile")
  ) || defaultProfile;
}

function saveProfile(data) {
  localStorage.setItem(
    "sansfx_profile",
    JSON.stringify(data)
  );
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
              SANS.FX membantu mitra dan komunitas membangun jaringan
              yang lebih terarah melalui strategi advertising yang cerdas,
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

        <section class="section">
          <h2>Solusi untuk jaringan yang berkembang</h2>

          <p class="section-sub">
            Membangun koneksi, memperkuat brand, dan mengelola jaringan
            dalam satu ruang kerja digital.
          </p>

          <div class="grid3">
            <article class="card">
              <div class="icon">✦</div>
              <h3>Smart Advertising</h3>
              <p>
                Membantu mitra menjangkau audiens yang tepat melalui
                strategi promosi digital yang lebih terarah.
              </p>
            </article>

            <article class="card">
              <div class="icon">◈</div>
              <h3>Network Management</h3>
              <p>
                Mengatur hubungan antara mitra, tim, dan client secara
                lebih rapi dan profesional.
              </p>
            </article>

            <article class="card">
              <div class="icon">↗</div>
              <h3>Performance Insight</h3>
              <p>
                Menampilkan perkembangan trading sebagai nilai tambah
                bagi jaringan dan komunitas.
              </p>
            </article>
          </div>
        </section>

        <section class="section" id="how-it-works">
          <div class="card">
            <h2>Bagaimana SANS.FX bekerja?</h2>

            <p class="section-sub">
              Kami membangun kerja sama bersama mitra yang ingin
              mengembangkan komunitas atau jaringan mereka.
            </p>

            <div class="grid3">
              <article class="card">
                <div class="icon">1</div>
                <h3>Ajukan Kerja Sama</h3>
                <p>
                  Isi formulir kerja sama dengan informasi dasar
                  mengenai diri dan jaringan Anda.
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
                  Mitra mendapatkan akses sistem dan link broker resmi.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        © 2026 SANS.FX — Smart Advertising and Network Solutions
      </footer>
    </div>
  `;
}

function applicationPage() {
  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div class="bio-card">
          <img src="${logo}" alt="SANS.FX">

          <h1>Kerja Sama SANS.FX</h1>

          <p>
            Isi formulir untuk mengajukan kerja sama bersama SANS.FX.
          </p>

          <div class="form-grid" style="text-align:left">
            <div class="field">
              <label>Nama Lengkap</label>
              <input id="applyName">
            </div>

            <div class="field">
              <label>Nama Komunitas atau Bisnis</label>
              <input id="applyCommunity">
            </div>

            <div class="field">
              <label>WhatsApp</label>
              <input id="applyWhatsapp">
            </div>

            <div class="field">
              <label>Email</label>
              <input id="applyEmail" type="email">
            </div>

            <div class="field">
              <label>Nama Kota</label>
              <input id="applyCity">
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

            <div class="field" style="grid-column:1/-1">
              <label>Pesan</label>
              <textarea id="applyMessage" rows="5"></textarea>
            </div>
          </div>

          <button
            class="btn btn-gold"
            style="width:100%;margin-top:18px"
            onclick="submitApplication()">
            Kirim Pengajuan
          </button>

          <div id="applyResult"></div>
        </div>
      </main>
    </div>
  `;
}

function submitApplication() {
  const data = {
    name: document.querySelector("#applyName").value.trim(),
    community: document.querySelector("#applyCommunity").value.trim(),
    whatsapp: document.querySelector("#applyWhatsapp").value.trim(),
    email: document.querySelector("#applyEmail").value.trim(),
    city: document.querySelector("#applyCity").value.trim(),
    profile: document.querySelector("#applyProfile").value,
    message: document.querySelector("#applyMessage").value.trim(),
    createdAt: new Date().toISOString()
  };

  if (!data.name || !data.community || !data.whatsapp ||
      !data.email || !data.city) {
    document.querySelector("#applyResult").innerHTML = `
      <div class="notice">
        Mohon lengkapi semua data wajib.
      </div>
    `;
    return;
  }

  localStorage.setItem(
    "sansfx_application",
    JSON.stringify(data)
  );

  document.querySelector("#applyResult").innerHTML = `
    <div class="notice">
      Pengajuan berhasil dicatat.<br><br>

      Silakan lanjut ke pendaftaran broker resmi:
      <br><br>

      <a
        class="btn btn-gold"
        href="${brokerRegistrationUrl}"
        target="_blank"
        rel="noopener">
        Daftar Broker
      </a>
    </div>
  `;
}

function sidebarItems() {
  if (state.role === "Management") {
    return [
      ["dashboard", "▦", "Dashboard"],
      ["partners", "◎", "Mitra"],
      ["teams", "◈", "Tim"],
      ["clients", "♙", "Client"],
      ["settings", "⚙", "Setting"]
    ];
  }

  if (state.role === "Mitra") {
    return [
      ["dashboard", "▦", "Dashboard"],
      ["teams", "◈", "Team"],
      ["clients", "♙", "Client"],
      ["bio", "↗", "Link Bio"],
      ["performance", "％", "Trading Performance"],
      ["join-team", "＋", "Join Team"],
      ["settings", "⚙", "Setting"]
    ];
  }

  return [
    ["dashboard", "▦", "Dashboard"],
    ["clients", "♙", "Data Client"],
    ["bio", "↗", "Link Bio"],
    ["performance", "％", "Trading Performance"],
    ["settings", "⚙", "Setting"]
  ];
}

function sidebar() {
  return `
    <aside class="dashboard-sidebar ${state.sidebarOpen ? "" : "closed"}">
      <div class="side-user">
        <img src="${profileData().logo}" alt="Profile">

        <div class="side-user-info">
          <strong>${state.role}</strong>
          <small>${profileData().name}</small>
        </div>
      </div>

      <div class="menu">
        ${sidebarItems().map(item => `
          <button
            class="${state.tab === item[0] ? "active" : ""}"
            onclick="setTab('${item[0]}')">
            <span>${item[1]}</span>
            <span class="menu-text">${item[2]}</span>
          </button>
        `).join("")}

        <button class="logout-button" onclick="logout()">
          <span>↪</span>
          <span class="menu-text">Logout</span>
        </button>
      </div>
    </aside>

    <button
      class="sidebar-toggle ${state.sidebarOpen ? "" : "closed"}"
      onclick="toggleSidebar()">
      ‹
    </button>
  `;
}

function roleInfo() {
  if (state.role === "Management") {
    return [
      ["Role", "Management"],
      ["Mitra", "18 aktif"],
      ["Kota", "12 kota"]
    ];
  }

  if (state.role === "Mitra") {
    return [
      ["Role", "Mitra"],
      ["Team", "8 anggota"],
      ["Kota", profileData().city]
    ];
  }

  return [
    ["Role", "Client"],
    ["Nama Mentor", "Andi Saputra"],
    ["Kota", profileData().city]
  ];
}

function dashboardSummary() {
  if (state.role === "Management") {
    return [
      ["Mitra Aktif", "18", "+3 bulan ini"],
      ["Total Team", "64", "+8.2%"],
      ["Total Client", "842", "+12.6%"],
      ["Kota", "12", "terjangkau"]
    ];
  }

  if (state.role === "Mitra") {
    return [
      ["Team Saya", "8", "+2 bulan ini"],
      ["Total Client", "126", "+14.4%"],
      ["Performance", "76%", "bulan ini"],
      ["Bio Views", "2.481", "+18.3%"]
    ];
  }

  return [
    ["Performance", "+8.42%", "bulan ini"],
    ["Win Rate", "64.2%", "tercatat"],
    ["Mentor", "Andi", "aktif"],
    ["Status", "Aktif", "terverifikasi"]
  ];
}

function dashboardPage() {
  return `
    <div class="shell">
      ${topbar()}

      <main class="dashboard-layout">
        ${sidebar()}

        <section class="dashboard-main">
          <div class="dashhead">
            <div>
              <div class="eyebrow">PRIVATE WORKSPACE</div>
              <h2>Dashboard ${state.role}</h2>
            </div>

            <div class="role-switch">
              <button
                class="${state.role === "Management" ? "active" : ""}"
                onclick="changeRole('Management')">
                Management
              </button>

              <button
                class="${state.role === "Mitra" ? "active" : ""}"
                onclick="changeRole('Mitra')">
                Mitra
              </button>

              <button
                class="${state.role === "Client" ? "active" : ""}"
                onclick="changeRole('Client')">
                Client
              </button>
            </div>
          </div>

          <p class="dashboard-intro">
            Selamat datang, ${profileData().name}.
            Berikut ringkasan aktivitas Anda hari ini.
          </p>

          <div class="role-info">
            ${roleInfo().map(item => `
              <div class="info-box">
                <span>${item[0]}</span>
                <b>${item[1]}</b>
              </div>
            `).join("")}
          </div>

          ${dashboardContent()}
        </section>
      </main>
    </div>
  `;
}

function dashboardContent() {
  if (state.tab === "bio") return bioSettings();
  if (state.tab === "settings") return settingsPage();
  if (state.tab === "join-team") return joinTeamPage();
  if (state.tab === "performance") return performancePage();
  if (state.tab === "clients") return clientsPage();
  if (state.tab === "partners") return partnersPage();
  if (state.tab === "teams") return teamsPage();

  return dashboardHome();
}

function dashboardHome() {
  return `
    <div class="stats">
      ${dashboardSummary().map(item => `
        <div class="stat">
          <span>${item[0]}</span>
          <b>${item[1]}</b>
          <small>${item[2]}</small>
        </div>
      `).join("")}
    </div>

    <div class="panel">
      <h3>Aktivitas Terbaru</h3>

      <div class="activity-list">
        <div class="activity-item">
          <strong>Data jaringan diperbarui</strong>
          <span>Hari ini</span>
        </div>

        <div class="activity-item">
          <strong>Client baru terdaftar</strong>
          <span>Kemarin</span>
        </div>

        <div class="activity-item">
          <strong>Performance diperbarui</strong>
          <span>2 hari lalu</span>
        </div>
      </div>
    </div>
  `;
}

function partnersPage() {
  return `
    <div class="panel">
      <h3>Daftar Mitra</h3>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Komunitas</th>
              <th>Kota</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Andi Saputra</td>
              <td>Andi Gold Team</td>
              <td>Jakarta</td>
              <td>Aktif</td>
            </tr>

            <tr>
              <td>Budi Trader</td>
              <td>Budi Community</td>
              <td>Bandung</td>
              <td>Aktif</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function teamsPage() {
  return `
    <div class="panel">
      <h3>Team</h3>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Kota</th>
              <th>Client</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Rizky A.</td>
              <td>Jakarta</td>
              <td>42</td>
              <td>Aktif</td>
            </tr>

            <tr>
              <td>Dimas P.</td>
              <td>Depok</td>
              <td>28</td>
              <td>Aktif</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function clientsPage() {
  return `
    <div class="panel">
      <h3>Data Client</h3>

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama Client</th>
              <th>Nama Mentor</th>
              <th>Kota</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ahmad F.</td>
              <td>Andi Saputra</td>
              <td>Jakarta</td>
              <td>Aktif</td>
            </tr>

            <tr>
              <td>Rizky A.</td>
              <td>Andi Saputra</td>
              <td>Bekasi</td>
              <td>Aktif</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function bioSettings() {
  const data = profileData();

  return `
    <div class="two">
      <div class="panel">
        <h3>Pengaturan Link Bio</h3>

        <div class="field">
          <label>Nama</label>
          <input id="bioName" value="${data.name}">
        </div>

        <br>

        <div class="upload-box">
          <label>Logo</label>

          <input
            id="bioLogoFile"
            type="file"
            accept="image/*"
            onchange="previewImage(event, 'bioLogoPreview')">

          <img
            id="bioLogoPreview"
            src="${data.logo}"
            style="width:80px;height:80px;object-fit:cover;border-radius:50%;margin-top:12px">
        </div>

        <br>

        <div class="upload-box">
          <label>Background Link Bio</label>

          <input
            id="bioBackgroundFile"
            type="file"
            accept="image/*"
            onchange="previewImage(event, 'bioBackgroundPreview')">

          <div
            id="bioBackgroundPreview"
            class="preview-background"
            style="background-image:url('${data.background}')">
            Preview Background
          </div>
        </div>

        <br>

        <div class="field">
          <label>Deskripsi</label>
          <textarea id="bioDescription" rows="4">${data.description}</textarea>
        </div>

        <h3 style="margin-top:22px">Link Tambahan</h3>

        <div id="linkEditor" class="link-editor">
          ${data.links.map((link, index) => `
            <div class="link-row">
              <input
                class="link-label"
                value="${link.label}"
                placeholder="Nama link">

              <input
                class="link-url"
                value="${link.url}"
                placeholder="https://...">

              <button
                class="btn btn-dark"
                onclick="removeLink(${index})">
                Hapus
              </button>
            </div>
          `).join("")}
        </div>

        <button
          class="btn btn-dark"
          style="margin-top:12px"
          onclick="addLink()">
          + Tambah Link
        </button>

        <br>

        <button
          class="btn btn-gold"
          style="margin-top:18px"
          onclick="saveBio()">
          Simpan Link Bio
        </button>

        <div id="bioMessage"></div>
      </div>

      <div class="panel">
        <h3>Preview Link Bio</h3>

        <p class="section-sub">
          Link Bio dapat digunakan di media sosial dan WhatsApp.
        </p>

        <div class="notice">
          sanss09.github.io/SANS.FX/#/bio/mitra
        </div>

        <a
          class="btn btn-gold"
          style="margin-top:16px"
          href="#/bio/mitra">
          Buka Preview
        </a>
      </div>
    </div>
  `;
}

function previewImage(event, targetId) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const target = document.querySelector(`#${targetId}`);

    if (targetId.includes("Logo")) {
      target.src = reader.result;
    } else {
      target.style.backgroundImage =
        `url('${reader.result}')`;
    }

    target.dataset.image = reader.result;
  };

  reader.readAsDataURL(file);
}

function addLink() {
  document.querySelector("#linkEditor").insertAdjacentHTML(
    "beforeend",
    `
      <div class="link-row">
        <input class="link-label" placeholder="Nama link">
        <input class="link-url" placeholder="https://...">

        <button
          class="btn btn-dark"
          onclick="this.parentElement.remove()">
          Hapus
        </button>
      </div>
    `
  );
}

function removeLink(index) {
  const rows = document.querySelectorAll(".link-row");

  if (rows[index]) {
    rows[index].remove();
  }
}

function saveBio() {
  const oldData = profileData();

  const logoPreview = document.querySelector("#bioLogoPreview");
  const backgroundPreview =
    document.querySelector("#bioBackgroundPreview");

  const links = [...document.querySelectorAll(".link-row")]
    .map(row => ({
      label: row.querySelector(".link-label").value.trim(),
      url: row.querySelector(".link-url").value.trim()
    }))
    .filter(link => link.label && link.url);

  saveProfile({
    ...oldData,
    name: document.querySelector("#bioName").value.trim(),
    logo: logoPreview.dataset.image || oldData.logo,
    background:
      backgroundPreview.dataset.image || oldData.background,
    description:
      document.querySelector("#bioDescription").value.trim(),
    links
  });

  document.querySelector("#bioMessage").innerHTML = `
    <div class="notice">
      Link Bio berhasil disimpan di browser ini.
    </div>
  `;
}

function settingsPage() {
  const data = profileData();

  return `
    <div class="panel">
      <h3>Setting Komunitas</h3>

      <div class="form-grid">
        <div class="field">
          <label>Nama Komunitas</label>
          <input id="settingName" value="${data.name}">
        </div>

        <div class="field">
          <label>Nama Kota</label>
          <input id="settingCity" value="${data.city}">
        </div>
      </div>

      <div class="upload-box" style="margin-top:16px">
        <label>Upload Logo Komunitas</label>

        <input
          type="file"
          accept="image/*"
          onchange="previewImage(event, 'settingLogoPreview')">

        <img
          id="settingLogoPreview"
          src="${data.logo}"
          style="width:80px;height:80px;object-fit:cover;border-radius:50%;margin-top:12px">
      </div>

      <div class="upload-box" style="margin-top:16px">
        <label>Upload Background Komunitas</label>

        <input
          type="file"
          accept="image/*"
          onchange="previewImage(event, 'settingBackgroundPreview')">

        <div
          id="settingBackgroundPreview"
          class="preview-background"
          style="background-image:url('${data.background}')">
          Preview Background
        </div>
      </div>

      <button
        class="btn btn-gold"
        style="margin-top:18px"
        onclick="saveSettings()">
        Simpan Setting
      </button>

      <div id="settingsMessage"></div>
    </div>
  `;
}

function saveSettings() {
  const oldData = profileData();

  const logoPreview =
    document.querySelector("#settingLogoPreview");

  const backgroundPreview =
    document.querySelector("#settingBackgroundPreview");

  saveProfile({
    ...oldData,
    name: document.querySelector("#settingName").value,
    city: document.querySelector("#settingCity").value,
    logo: logoPreview.dataset.image || oldData.logo,
    background:
      backgroundPreview.dataset.image || oldData.background
  });

  document.querySelector("#settingsMessage").innerHTML = `
    <div class="notice">
      Setting komunitas berhasil disimpan.
    </div>
  `;
}

function joinTeamPage() {
  return `
    <div class="join-team-box">
      <h2>Join Team</h2>

      <p class="section-sub">
        Tambahkan anggota baru ke dalam team Anda melalui
        pendaftaran broker resmi.
      </p>

      <div class="form-grid">
        <div class="field">
          <label>Nama Calon Anggota</label>
          <input id="teamName">
        </div>

        <div class="field">
          <label>WhatsApp</label>
          <input id="teamWhatsapp">
        </div>

        <div class="field">
          <label>Email</label>
          <input id="teamEmail" type="email">
        </div>

        <div class="field">
          <label>Nama Kota</label>
          <input id="teamCity">
        </div>
      </div>

      <button
        class="btn btn-gold"
        style="margin-top:18px"
        onclick="submitTeamInvite()">
        Kirim Undangan
      </button>

      <div id="teamResult"></div>
    </div>
  `;
}

function submitTeamInvite() {
  const name = document.querySelector("#teamName").value.trim();
  const whatsapp =
    document.querySelector("#teamWhatsapp").value.trim();
  const email =
    document.querySelector("#teamEmail").value.trim();
  const city =
    document.querySelector("#teamCity").value.trim();

  if (!name || !whatsapp || !email || !city) {
    document.querySelector("#teamResult").innerHTML = `
      <div class="notice">
        Lengkapi semua data terlebih dahulu.
      </div>
    `;
    return;
  }

  document.querySelector("#teamResult").innerHTML = `
    <div class="notice">
      Undangan berhasil dibuat.<br><br>

      <a
        class="btn btn-gold"
        href="${brokerRegistrationUrl}"
        target="_blank"
        rel="noopener">
        Daftar Broker
      </a>
    </div>
  `;
}

function performancePage() {
  return `
    <div class="panel">
      <h3>Trading Performance</h3>

      <p class="section-sub">
        Data performance dimasukkan secara manual karena belum
        terhubung langsung dengan broker.
      </p>

      <div class="form-grid">
        <div class="field">
          <label>Starting Equity</label>
          <input id="start" type="number">
        </div>

        <div class="field">
          <label>Ending Equity</label>
          <input id="end" type="number">
        </div>

        <div class="field">
          <label>Total Trade</label>
          <input id="trades" type="number">
        </div>

        <div class="field">
          <label>Winning Trade</label>
          <input id="wins" type="number">
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
  const trades =
    Number(document.querySelector("#trades").value) || 0;
  const wins =
    Number(document.querySelector("#wins").value) || 0;

  const profit = end - start;
  const returnRate = start ? profit / start * 100 : 0;
  const winRate = trades ? wins / trades * 100 : 0;

  document.querySelector("#performanceResult").innerHTML = `
    <div class="mini-grid">
      <div class="mini">
        <b>${profit.toFixed(2)}</b>
        <span>Net Performance</span>
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
  const data = profileData();

  const background = data.background
    ? `background-image:url('${data.background}')`
    : "";

  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div
          class="bio-card"
          style="${background}">

          <img src="${data.logo}" alt="${data.name}">

          <h1>${data.name}</h1>

          <p>${data.description}</p>

          <div class="bio-links">
            ${data.links.map(link => `
              <a
                href="${link.url}"
                target="_blank"
                rel="noopener">
                ${link.label}
              </a>
            `).join("")}

            <a href="#/dashboard">
              Masuk ke Workspace
            </a>
          </div>
        </div>
      </main>
    </div>
  `;
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  render();
}

function setTab(tab) {
  state.tab = tab;
  render();
}

function changeRole(role) {
  state.role = role;
  state.tab = "dashboard";
  render();
}

function logout() {
  state.role = "Management";
  state.tab = "dashboard";
  state.sidebarOpen = true;
  location.hash = "#/";
}

function render() {
  const route = location.hash || "#/";

  if (route === "#/apply") {
    document.querySelector("#app").innerHTML =
      applicationPage();
    return;
  }

  if (route.startsWith("#/dashboard")) {
    document.querySelector("#app").innerHTML =
      dashboardPage();
    return;
  }

  if (route.startsWith("#/bio/")) {
    document.querySelector("#app").innerHTML =
      bioPage();
    return;
  }

  document.querySelector("#app").innerHTML = home();
}

window.toggleSidebar = toggleSidebar;
window.setTab = setTab;
window.changeRole = changeRole;
window.logout = logout;
window.submitApplication = submitApplication;
window.submitTeamInvite = submitTeamInvite;
window.previewImage = previewImage;
window.addLink = addLink;
window.removeLink = removeLink;
window.saveBio = saveBio;
window.saveSettings = saveSettings;
window.calculatePerformance = calculatePerformance;

window.addEventListener("hashchange", render);

render();
