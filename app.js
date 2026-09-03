const logo = "assets/sansfx-logo.jpeg";

const brokerRegistrationUrl =
  "https://example.com/daftar-broker";

const defaultProfile = {
  owner: "Nama Pemilik Akun",
  community: "Nama Komunitas",
  city: "Jakarta",
  whatsapp: "",
  logo,
  bioBackground: "",
  description: "Berkembang bersama jaringan SANS.FX.",
  links: [
    {
      label: "Daftar Broker Resmi",
      url: brokerRegistrationUrl
    }
  ]
};

let state = {
  internalRole: "ib",
  tab: "dashboard",
  sidebarOpen: true,
  search: "",
  filter: "Semua"
};

function getProfile() {
  return JSON.parse(
    localStorage.getItem("sansfx_profile")
  ) || defaultProfile;
}

function setProfile(data) {
  localStorage.setItem(
    "sansfx_profile",
    JSON.stringify(data)
  );
}

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function publicRole() {
  if (state.internalRole === "management") return "SANS.FX";
  if (state.internalRole === "ib") return "IB";
  if (state.internalRole === "subib") return "Team";
  return "Member";
}

function internalRoleLabel() {
  if (state.internalRole === "management") return "Management";
  if (state.internalRole === "ib") return "Mitra";
  if (state.internalRole === "subib") return "Sub IB";
  return "Member";
}

function topbar() {
  return `
    <header class="topbar">
      <nav class="nav">
        <a class="brand" href="#/">
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
          <a href="#/">Beranda</a>
          <a href="#/about">Tentang</a>
          <a href="#/apply">Kerja Sama</a>
          <a href="#/dashboard">Login</a>
        </div>

        <a href="#/apply" class="btn btn-gold">
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
              solusi digital, dan pengelolaan hubungan profesional.
            </p>

            <div class="actions">
              <a href="#/apply" class="btn btn-gold">
                Kerja Sama SANS.FX
              </a>

              <a href="#/dashboard" class="btn btn-dark">
                Masuk Dashboard
              </a>
            </div>
          </div>

          <div class="hero-card">
            <img src="${logo}" alt="SANS.FX">

            <div class="mini-grid">
              <div class="mini">
                <b>Smart</b>
                <span>Advertising</span>
              </div>

              <div class="mini">
                <b>Network</b>
                <span>Terarah</span>
              </div>

              <div class="mini">
                <b>Growth</b>
                <span>Terukur</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section">
          <h2>Solusi untuk jaringan yang berkembang</h2>

          <p class="section-sub">
            Membangun koneksi, memperkuat komunitas, dan mengelola
            jaringan dalam satu ruang kerja digital.
          </p>

          <div class="grid3">
            <article class="card">
              <div class="icon">✦</div>
              <h3>Smart Advertising</h3>
              <p>
                Strategi promosi digital yang membantu komunitas
                menjangkau audiens yang tepat.
              </p>
            </article>

            <article class="card">
              <div class="icon">◈</div>
              <h3>Network Management</h3>
              <p>
                Mengatur hubungan antara IB, Team, dan Member
                secara terstruktur.
              </p>
            </article>

            <article class="card">
              <div class="icon">↗</div>
              <h3>Performance Insight</h3>
              <p>
                Menampilkan perkembangan trading secara manual
                dan profesional.
              </p>
            </article>
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
            Isi formulir pengajuan kerja sama bersama SANS.FX.
          </p>

          <div class="form-grid" style="text-align:left">
            <div class="field">
              <label>Nama Pemilik</label>
              <input id="applyOwner">
            </div>

            <div class="field">
              <label>Nama Komunitas</label>
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
                <option>Memiliki jaringan atau Team</option>
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
    owner: document.querySelector("#applyOwner").value.trim(),
    community: document.querySelector("#applyCommunity").value.trim(),
    whatsapp: document.querySelector("#applyWhatsapp").value.trim(),
    email: document.querySelector("#applyEmail").value.trim(),
    city: document.querySelector("#applyCity").value.trim(),
    profile: document.querySelector("#applyProfile").value,
    message: document.querySelector("#applyMessage").value.trim(),
    createdAt: new Date().toISOString()
  };

  if (!data.owner || !data.community || !data.whatsapp ||
      !data.email || !data.city) {
    document.querySelector("#applyResult").innerHTML = `
      <div class="notice">
        Mohon lengkapi seluruh data wajib.
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

function roleButtons() {
  return `
    <div class="role-switch">
      <button
        class="${state.internalRole === "management" ? "active" : ""}"
        onclick="changeRole('management')">
        SANS.FX
      </button>

      <button
        class="${state.internalRole === "ib" ? "active" : ""}"
        onclick="changeRole('ib')">
        IB
      </button>

      <button
        class="${state.internalRole === "subib" ? "active" : ""}"
        onclick="changeRole('subib')">
        Sub IB
      </button>

      <button
        class="${state.internalRole === "member" ? "active" : ""}"
        onclick="changeRole('member')">
        Member
      </button>
    </div>
  `;
}

function menuItems() {
  if (state.internalRole === "management") {
    return [
      ["dashboard", "▦", "Dashboard"],
      ["partners", "◎", "Daftar Mitra"],
      ["teams", "◈", "Daftar Team"],
      ["members", "♙", "Daftar Member"],
      ["settings", "⚙", "Setting"]
    ];
  }

  if (state.internalRole === "ib") {
    return [
      ["dashboard", "▦", "Dashboard"],
      ["teams", "◈", "Daftar Team"],
      ["members", "♙", "Daftar Member"],
      ["bio", "↗", "Link Bio"],
      ["performance", "％", "Trading Performance"],
      ["settings", "⚙", "Setting"]
    ];
  }

  if (state.internalRole === "subib") {
    return [
      ["dashboard", "▦", "Dashboard"],
      ["members", "♙", "Daftar Member"],
      ["bio", "↗", "Link Bio"],
      ["performance", "％", "Trading Performance"],
      ["settings", "⚙", "Setting"]
    ];
  }

  return [
    ["dashboard", "▦", "Dashboard"],
    ["performance", "％", "Trading Performance"],
    ["settings", "⚙", "Setting"]
  ];
}

function sidebar() {
  const data = getProfile();

  return `
    <aside class="dashboard-sidebar ${state.sidebarOpen ? "" : "closed"}">
      <div class="side-user">
        <img src="${esc(data.logo)}" alt="Logo">

        <div class="side-user-info">
          <strong>${esc(data.community)}</strong>
          <small>${esc(data.owner)}</small>
          <small>${esc(data.city)}</small>
        </div>
      </div>

      <div class="menu">
        ${menuItems().map(item => `
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
      onclick="toggleSidebar()"
      aria-label="Buka atau tutup sidebar">
      ‹
    </button>
  `;
}

function roleInfo() {
  const data = getProfile();

  if (state.internalRole === "management") {
    return [
      ["Role Internal", "Management"],
      ["Nama Sistem", "SANS.FX"],
      ["Wilayah", "12 kota"]
    ];
  }

  if (state.internalRole === "ib") {
    return [
      ["Role Internal", "IB"],
      ["Komunitas", data.community],
      ["Nama Kota", data.city]
    ];
  }

  if (state.internalRole === "subib") {
    return [
      ["Role Internal", "Sub IB"],
      ["Team", data.community],
      ["Nama Kota", data.city]
    ];
  }

  return [
    ["Role Internal", "Member"],
    ["Mentor", "IB / Team"],
    ["Nama Kota", data.city]
  ];
}

function summaryCards() {
  if (state.internalRole === "management") {
    return [
      ["Total Mitra", "18", "+3 bulan ini"],
      ["Total Team", "64", "+8.2%"],
      ["Total Member", "842", "+12.6%"],
      ["Kota", "12", "terjangkau"]
    ];
  }

  if (state.internalRole === "ib") {
    return [
      ["Total Team", "8", "+2 bulan ini"],
      ["Total Member", "126", "+14.4%"],
      ["Performance", "76%", "bulan ini"],
      ["Bio Views", "2.481", "+18.3%"]
    ];
  }

  if (state.internalRole === "subib") {
    return [
      ["Total Member", "38", "+5 bulan ini"],
      ["Nama Team", "Andi Team", "aktif"],
      ["Kota", getProfile().city, "lokasi"],
      ["Performance", "64.2%", "tercatat"]
    ];
  }

  return [
    ["Trading Performance", "+8.42%", "bulan ini"],
    ["Win Rate", "64.2%", "tercatat"],
    ["Mentor", "Andi", "aktif"],
    ["Status", "Aktif", "terverifikasi"]
  ];
}

function dashboardHome() {
  return `
    <div class="stats">
      ${summaryCards().map(card => `
        <div class="stat">
          <span>${card[0]}</span>
          <b>${card[1]}</b>
          <small>${card[2]}</small>
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
          <strong>Member baru terdaftar</strong>
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

function filterBar(placeholder = "Cari data...") {
  return `
    <div class="filter-bar">
      <input
        id="tableSearch"
        value="${esc(state.search)}"
        placeholder="${placeholder}"
        oninput="updateSearch(this.value)">

      <select onchange="updateFilter(this.value)">
        <option ${state.filter === "Semua" ? "selected" : ""}>
          Semua
        </option>
        <option ${state.filter === "Aktif" ? "selected" : ""}>
          Aktif
        </option>
        <option ${state.filter === "Menunggu" ? "selected" : ""}>
          Menunggu
        </option>
        <option ${state.filter === "Ditolak" ? "selected" : ""}>
          Ditolak
        </option>
      </select>
    </div>
  `;
}

function actionButtons() {
  return `
    <div class="action-cell">
      <button
        class="icon-btn accept"
        title="Acc"
        onclick="tableAction('Acc')">
        ✓
      </button>

      <button
        class="icon-btn reject"
        title="Tolak"
        onclick="tableAction('Tolak')">
        !
      </button>

      <button
        class="icon-btn delete"
        title="Hapus"
        onclick="tableAction('Hapus')">
        ×
      </button>
    </div>
  `;
}

function matchesSearch(row) {
  const text = row.join(" ").toLowerCase();
  const search = state.search.toLowerCase();

  const searchMatch = !search || text.includes(search);
  const status = row[row.length - 1];

  const filterMatch =
    state.filter === "Semua" || status === state.filter;

  return searchMatch && filterMatch;
}

function partnersPage() {
  const rows = [
    ["Andi Saputra", "Andi Gold Community", "8", "126", "Jakarta", "Aktif"],
    ["Budi Trader", "Budi Community", "5", "82", "Bandung", "Menunggu"],
    ["Raka Network", "Raka Community", "3", "41", "Depok", "Aktif"]
  ].filter(matchesSearch);

  return `
    <div class="panel">
      <h3>Daftar Mitra</h3>

      ${filterBar("Cari nama, komunitas, atau kota...")}

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Komunitas</th>
              <th>Team</th>
              <th>Client</th>
              <th>Kota</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            ${rows.map(row => `
              <tr>
                ${row.map(value => `<td>${esc(value)}</td>`).join("")}
                <td>${actionButtons()}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function teamsPage() {
  const rows = [
    ["Andi Gold Team", "Andi Community", "Jakarta", "126", "Aktif"],
    ["Budi Trader Team", "Budi Community", "Bandung", "82", "Menunggu"],
    ["Raka Team", "Raka Community", "Depok", "41", "Ditolak"]
  ].filter(matchesSearch);

  return `
    <div class="panel">
      <h3>Daftar Team</h3>

      ${filterBar("Cari nama, komunitas, atau kota...")}

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Komunitas</th>
              <th>Kota</th>
              <th>Member</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            ${rows.map(row => `
              <tr>
                ${row.map(value => `<td>${esc(value)}</td>`).join("")}
                <td>${actionButtons()}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function membersPage() {
  const rows = [
    ["Ahmad F.", "Andi Saputra", "Andi Community", "Jakarta", "Aktif"],
    ["Rizky A.", "Andi Saputra", "Andi Community", "Bekasi", "Menunggu"],
    ["Dimas P.", "Budi Trader", "Budi Community", "Bandung", "Aktif"]
  ].filter(matchesSearch);

  return `
    <div class="panel">
      <h3>Daftar Member</h3>

      ${filterBar("Cari nama, mentor, komunitas, atau kota...")}

      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Mentor</th>
              <th>Komunitas</th>
              <th>Kota</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            ${rows.map(row => `
              <tr>
                ${row.map(value => `<td>${esc(value)}</td>`).join("")}
                <td>${actionButtons()}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function bioSettings() {
  const data = getProfile();

  return `
    <div class="two">
      <div class="panel">
        <h3>Pengaturan Link Bio</h3>

        <div class="field">
          <label>Nama Komunitas</label>
          <input id="bioCommunity" value="${esc(data.community)}">
        </div>

        <br>

        <div class="upload-box">
          <label>Logo</label>

          <input
            type="file"
            accept="image/*"
            onchange="previewImage(event, 'bioLogoPreview')">

          <img
            id="bioLogoPreview"
            src="${esc(data.logo)}"
            style="width:80px;height:80px;object-fit:cover;border-radius:50%;margin-top:12px">
        </div>

        <br>

        <div class="upload-box">
          <label>Background Link Bio</label>

          <input
            type="file"
            accept="image/*"
            onchange="previewImage(event, 'bioBackgroundPreview')">

          <div
            id="bioBackgroundPreview"
            class="preview-background"
            style="background-image:url('${esc(data.bioBackground)}')">
            Preview Background
          </div>
        </div>

        <br>

        <div class="field">
          <label>Deskripsi</label>
          <textarea id="bioDescription" rows="4">${esc(data.description)}</textarea>
        </div>

        <h3 style="margin-top:22px">
          Link Tambahan
        </h3>

        <div id="linkEditor" class="link-editor">
          ${data.links.slice(0, 1).map((link, index) => linkRow(link, index)).join("")}
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
        <h3>Link Bio Publik</h3>

        <p class="section-sub">
          Gunakan link ini pada Instagram, TikTok, WhatsApp,
          atau platform lain.
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

function linkRow(link, index) {
  return `
    <div class="link-row">
      <label>Nama Link</label>
      <input
        class="link-label"
        value="${esc(link.label)}"
        placeholder="Contoh: WhatsApp">

      <label>URL Link</label>
      <input
        class="link-url"
        value="${esc(link.url)}"
        placeholder="https://...">

      <button
        class="btn btn-dark"
        onclick="this.parentElement.remove()">
        Hapus Link
      </button>
    </div>
  `;
}

function addLink() {
  document.querySelector("#linkEditor").insertAdjacentHTML(
    "beforeend",
    linkRow({
      label: "",
      url: ""
    }, Date.now())
  );
}

function previewImage(event, targetId) {
  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = function () {
    const target = document.querySelector(`#${targetId}`);

    if (targetId.toLowerCase().includes("logo")) {
      target.src = reader.result;
    } else {
      target.style.backgroundImage =
        `url("${reader.result}")`;
    }

    target.dataset.image = reader.result;
  };

  reader.readAsDataURL(file);
}

function saveBio() {
  const old = getProfile();

  const logoPreview =
    document.querySelector("#bioLogoPreview");

  const backgroundPreview =
    document.querySelector("#bioBackgroundPreview");

  const links = [...document.querySelectorAll(".link-row")]
    .map(row => ({
      label: row.querySelector(".link-label").value.trim(),
      url: row.querySelector(".link-url").value.trim()
    }))
    .filter(item => item.label && item.url);

  setProfile({
    ...old,
    community: document.querySelector("#bioCommunity").value.trim(),
    logo: logoPreview.dataset.image || old.logo,
    bioBackground:
      backgroundPreview.dataset.image || old.bioBackground,
    description:
      document.querySelector("#bioDescription").value.trim(),
    links
  });

  document.querySelector("#bioMessage").innerHTML = `
    <div class="notice">
      Link Bio berhasil disimpan.
    </div>
  `;
}

function settingsPage() {
  const data = getProfile();

  return `
    <div class="panel">
      <h3>Setting Komunitas</h3>

      <div class="form-grid">
        <div class="field">
          <label>Nama Pemilik Komunitas</label>
          <input id="settingOwner" value="${esc(data.owner)}">
        </div>

        <div class="field">
          <label>Nama Komunitas</label>
          <input id="settingCommunity" value="${esc(data.community)}">
        </div>

        <div class="field">
          <label>Nama Kota</label>
          <input id="settingCity" value="${esc(data.city)}">
        </div>

        <div class="field">
          <label>WhatsApp</label>
          <input id="settingWhatsapp" value="${esc(data.whatsapp)}">
        </div>
      </div>

      <div class="upload-box" style="margin-top:16px">
        <label>Logo Komunitas</label>

        <input
          type="file"
          accept="image/*"
          onchange="previewImage(event, 'settingLogoPreview')">

        <img
          id="settingLogoPreview"
          src="${esc(data.logo)}"
          style="width:80px;height:80px;object-fit:cover;border-radius:50%;margin-top:12px">
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
  const old = getProfile();

  const preview =
    document.querySelector("#settingLogoPreview");

  setProfile({
    ...old,
    owner: document.querySelector("#settingOwner").value.trim(),
    community:
      document.querySelector("#settingCommunity").value.trim(),
    city: document.querySelector("#settingCity").value.trim(),
    whatsapp:
      document.querySelector("#settingWhatsapp").value.trim(),
    logo: preview.dataset.image || old.logo
  });

  document.querySelector("#settingsMessage").innerHTML = `
    <div class="notice">
      Setting berhasil disimpan.
    </div>
  `;
}

function performancePage() {
  return `
    <div class="panel">
      <h3>Trading Performance</h3>

      <p class="section-sub">
        Data performance diinput secara manual.
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
  const trades = Number(document.querySelector("#trades").value) || 0;
  const wins = Number(document.querySelector("#wins").value) || 0;

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

function joinTablePage() {
  return `
    <div class="panel">
      <h3>Data</h3>
      <p class="section-sub">
        Halaman ini tersedia sesuai hak akses role.
      </p>
    </div>
  `;
}

function dashboardContent() {
  if (state.tab === "partners") return partnersPage();
  if (state.tab === "teams") return teamsPage();
  if (state.tab === "members") return membersPage();
  if (state.tab === "bio") return bioSettings();
  if (state.tab === "settings") return settingsPage();
  if (state.tab === "performance") return performancePage();

  return dashboardHome();
}

function dashboardPage() {
  const data = getProfile();

  return `
    <div class="shell">
      ${topbar()}

      <main class="dashboard-layout">
        ${sidebar()}

        <section class="dashboard-main">
          <div class="dashhead">
            <div>
              <div class="eyebrow">PRIVATE WORKSPACE</div>
              <h2>
                Dashboard ${publicRole()}
              </h2>
            </div>

            ${roleButtons()}
          </div>

          <p class="dashboard-intro">
            Selamat datang, <b>${esc(data.owner)}</b>.
            Anda mengelola komunitas
            <b>${esc(data.community)}</b>
            di kota ${esc(data.city)}.
          </p>

          <div class="role-info">
            ${roleInfo().map(item => `
              <div class="info-box">
                <span>${item[0]}</span>
                <b>${esc(item[1])}</b>
              </div>
            `).join("")}
          </div>

          ${dashboardContent()}
        </section>
      </main>
    </div>
  `;
}

function bioPage() {
  const data = getProfile();

  const background = data.bioBackground
    ? `background-image:url("${data.bioBackground}")`
    : "";

  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div
          class="bio-card"
          style="${background}">

          <img src="${esc(data.logo)}" alt="${esc(data.community)}">

          <h1>${esc(data.community)}</h1>

          <p>
            ${esc(data.description)}
            <br>
            ${esc(data.city)}
          </p>

          <div class="bio-links">
            ${data.links.map(link => `
              <a
                href="${esc(link.url)}"
                target="_blank"
                rel="noopener">
                ${esc(link.label)}
              </a>
            `).join("")}

            <a href="#/dashboard">
              Masuk ke Dashboard
            </a>
          </div>
        </div>
      </main>
    </div>
  `;
}

function updateSearch(value) {
  state.search = value;
  render();
}

function updateFilter(value) {
  state.filter = value;
  render();
}

function tableAction(action) {
  alert(`Aksi "${action}" dipilih.`);
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  render();
}

function setTab(tab) {
  state.tab = tab;
  state.search = "";
  state.filter = "Semua";
  render();
}

function changeRole(role) {
  state.internalRole = role;
  state.tab = "dashboard";
  state.search = "";
  state.filter = "Semua";
  render();
}

function logout() {
  location.hash = "#/";
  state.tab = "dashboard";
  state.internalRole = "management";
  state.sidebarOpen = true;
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
window.previewImage = previewImage;
window.addLink = addLink;
window.saveBio = saveBio;
window.saveSettings = saveSettings;
window.calculatePerformance = calculatePerformance;
window.updateSearch = updateSearch;
window.updateFilter = updateFilter;
window.tableAction = tableAction;

window.addEventListener("hashchange", render);

render();
