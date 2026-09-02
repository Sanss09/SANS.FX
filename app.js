const logo = "assets/sansfx-logo.jpeg";

const demoMembers = [
  {
    name: "Ahmad F.",
    ib: "SANS Main",
    broker: "HFM",
    type: "Premium",
    status: "Active",
    lot: 18.4
  },
  {
    name: "Rizky A.",
    ib: "IB Andi",
    broker: "Windsor",
    type: "Standard",
    status: "Active",
    lot: 12.7
  },
  {
    name: "Dimas P.",
    ib: "IB Andi",
    broker: "HFM",
    type: "Cent",
    status: "KYC",
    lot: 4.1
  },
  {
    name: "Nadia R.",
    ib: "IB Budi",
    broker: "Windsor",
    type: "Standard",
    status: "Inactive",
    lot: 7.2
  }
];

let state = {
  role: "owner",
  tab: "overview"
};

function money(value) {
  return "$" + Number(value).toLocaleString("en-US", {
    maximumFractionDigits: 2
  });
}

function statusBadge(status) {
  if (status === "Active") {
    return `<span class="badge b-green">Active</span>`;
  }

  if (status === "KYC") {
    return `<span class="badge b-gold">KYC</span>`;
  }

  return `<span class="badge b-red">${status}</span>`;
}

function topbar() {
  return `
    <header class="topbar">
      <nav class="nav">
        <a class="brand" href="#/">
          <img src="${logo}" alt="SANS.FX">
          <span>SANS.<b>FX</b> HUB</span>
        </a>

        <div class="navlinks">
          <a href="#/features">Fitur</a>
          <a href="#/bio/andi">Contoh Bio IB</a>
          <a href="#/dashboard">Dashboard</a>
        </div>

        <a class="btn btn-gold" href="#/join?ref=SANSMAIN">
          Join SANS.FX
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
            <div class="eyebrow">COMMUNITY • IB • TRADING TOOLS</div>

            <h1>
              Satu Hub untuk
              <span class="grad">membangun jaringan SANS.FX.</span>
            </h1>

            <p class="lead">
              Kelola member, Sub-IB, referral, performa trading,
              dan komunitas dari satu platform profesional yang siap
              dipasang di bio TikTok, WhatsApp, dan Telegram.
            </p>

            <div class="actions">
              <a class="btn btn-gold" href="#/join?ref=SANSMAIN">
                Daftar Member
              </a>

              <a class="btn btn-dark" href="#/dashboard">
                Lihat Dashboard
              </a>
            </div>

            <div class="mini-grid">
              <div class="mini">
                <b>1</b>
                <span>Hub Community</span>
              </div>

              <div class="mini">
                <b>3</b>
                <span>Role Dashboard</span>
              </div>

              <div class="mini">
                <b>24/7</b>
                <span>Online Access</span>
              </div>
            </div>
          </div>

          <div class="hero-card">
            <img src="${logo}" alt="Sans.FX Logo">

            <div class="mini-grid">
              <div class="mini">
                <b>IB</b>
                <span>Network</span>
              </div>

              <div class="mini">
                <b>Bio</b>
                <span>Referral</span>
              </div>

              <div class="mini">
                <b>Tool</b>
                <span>Performance</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="features">
          <h2>Core SANS.FX HUB</h2>

          <p class="section-sub">
            Versi awal difokuskan pada fungsi yang membantu operasional
            dan pertumbuhan komunitas.
          </p>

          <div class="grid3">
            <article class="card">
              <div class="icon">◈</div>
              <h3>IB Network</h3>
              <p>
                Database Sub-IB, referral, client, lot, komisi,
                dan bonus dalam satu sistem.
              </p>
            </article>

            <article class="card">
              <div class="icon">↗</div>
              <h3>Bio Sub-IB</h3>
              <p>
                Setiap Sub-IB memiliki landing page sendiri untuk
                TikTok, WhatsApp, Telegram, dan referral broker.
              </p>
            </article>

            <article class="card">
              <div class="icon">％</div>
              <h3>Performance Tracker</h3>
              <p>
                Member dapat menghitung growth, return, profit/loss,
                win rate, dan perkembangan bulanan.
              </p>
            </article>
          </div>
        </section>

        <section class="section">
          <div class="card">
            <h2>TRADE • LEARN • GROW</h2>

            <p class="section-sub">
              Bergabung dengan SANS.FX untuk mendapatkan akses community,
              education, trading tools, dan jaringan IB.
            </p>

            <div class="actions">
              <a class="btn btn-gold" href="#/join?ref=SANSMAIN">
                Daftar Member
              </a>

              <a class="btn btn-dark" href="#/bio/andi">
                Lihat Halaman IB
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        © 2026 SANS.FX — Community & IB Management Platform
      </footer>
    </div>
  `;
}

function sidebar() {
  const items = [
    ["overview", "Overview"],
    ["members", "Member Database"],
    ["ib", "Sub-IB Network"],
    ["performance", "Trading Performance"],
    ["profile", "Bio & Referral"]
  ];

  return `
    <aside class="sidebar">
      <div class="sidebrand">
        <img src="${logo}" alt="SANS.FX">
        <div>
          <strong>SANS.FX HUB</strong>
          <small>Demo Control Center</small>
        </div>
      </div>

      <div class="menu">
        ${items.map(item => `
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

function statsForRole() {
  if (state.role === "owner") {
    return [
      ["Total Member", "1,248", "+12.4%"],
      ["Active Trader", "784", "+8.1%"],
      ["Monthly Lot", "2,438.5", "+16.2%"],
      ["Est. Revenue", "$21,884", "+14.8%"]
    ];
  }

  if (state.role === "ib") {
    return [
      ["My Leads", "96", "+9"],
      ["My Client", "63", "+6"],
      ["Active Trader", "41", "+4"],
      ["Monthly Lot", "128.4", "72% target"]
    ];
  }

  return [
    ["Monthly Return", "+8.42%", "↑ positif"],
    ["Win Rate", "64.2%", "+3.1%"],
    ["Net Profit", "$342", "bulan ini"],
    ["Max Drawdown", "-4.8%", "terkontrol"]
  ];
}

function overview() {
  return `
    <div class="stats">
      ${statsForRole().map(stat => `
        <div class="stat">
          <span>${stat[0]}</span>
          <b>${stat[1]}</b>
          <small>${stat[2]}</small>
        </div>
      `).join("")}
    </div>

    <div class="two">
      <div class="panel">
        <h3>Broker Performance</h3>

        <table class="table">
          <thead>
            <tr>
              <th>Broker</th>
              <th>Lot</th>
              <th>Rate</th>
              <th>Est. Commission</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>HFM Premium/Cent</td>
              <td>1,020.5</td>
              <td>$8</td>
              <td>${money(8164)}</td>
            </tr>

            <tr>
              <td>HFM Pro</td>
              <td>340.0</td>
              <td>$4</td>
              <td>${money(1360)}</td>
            </tr>

            <tr>
              <td>Windsor</td>
              <td>1,078.0</td>
              <td>$12</td>
              <td>${money(12936)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="panel">
        <h3>Top Sub-IB</h3>

        <table class="table">
          <thead>
            <tr>
              <th>IB</th>
              <th>Client</th>
              <th>Lot</th>
              <th>Bonus</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>IB Andi</td>
              <td>63</td>
              <td>128.4</td>
              <td>$220</td>
            </tr>

            <tr>
              <td>IB Budi</td>
              <td>42</td>
              <td>81.2</td>
              <td>$100</td>
            </tr>

            <tr>
              <td>IB Raka</td>
              <td>28</td>
              <td>49.6</td>
              <td>Near Target</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function members() {
  return `
    <div class="panel">
      <div class="dashhead">
        <div>
          <h3>Member Database</h3>
          <p class="section-sub">Data demo member komunitas.</p>
        </div>

        <button class="btn btn-gold" onclick="alert('Form tambah member akan diaktifkan pada versi database.')">
          + Tambah Member
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Parent IB</th>
            <th>Broker</th>
            <th>Account</th>
            <th>Status</th>
            <th>Lot Bulan Ini</th>
          </tr>
        </thead>

        <tbody>
          ${demoMembers.map(member => `
            <tr>
              <td>${member.name}</td>
              <td>${member.ib}</td>
              <td>${member.broker}</td>
              <td>${member.type}</td>
              <td>${statusBadge(member.status)}</td>
              <td>${member.lot}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function ibNetwork() {
  return `
    <div class="stats">
      <div class="stat">
        <span>Total Sub-IB</span>
        <b>18</b>
        <small>+3 bulan ini</small>
      </div>

      <div class="stat">
        <span>Active Sub-IB</span>
        <b>14</b>
        <small>77.8%</small>
      </div>

      <div class="stat">
        <span>Network Lot</span>
        <b>684.6</b>
        <small>bulan ini</small>
      </div>

      <div class="stat">
        <span>Bonus Est.</span>
        <b>$1,430</b>
        <small>berjalan</small>
      </div>
    </div>

    <div class="panel">
      <h3>Sub-IB Network</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Komunitas</th>
            <th>Kode</th>
            <th>Client</th>
            <th>Lot</th>
            <th>Progress Bonus</th>
            <th>Bio</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Andi Gold Team</td>
            <td>ANDI01</td>
            <td>63</td>
            <td>128.4</td>
            <td>128 / 150</td>
            <td><a class="btn btn-dark" href="#/bio/andi">Buka</a></td>
          </tr>

          <tr>
            <td>Budi Trader Club</td>
            <td>BUDI07</td>
            <td>42</td>
            <td>81.2</td>
            <td>81 / 100</td>
            <td><a class="btn btn-dark" href="#/bio/andi">Buka</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function performance() {
  return `
    <div class="panel">
      <h3>Trading Performance Calculator</h3>

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
          <input id="dep" type="number" placeholder="0">
        </div>

        <div class="field">
          <label>Withdrawal</label>
          <input id="wd" type="number" placeholder="0">
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

      <button class="btn btn-gold" style="margin-top:16px" onclick="calcPerf()">
        Hitung Performance
      </button>

      <div id="perfResult" class="result">
        <div class="mini">
          <b>-</b>
          <span>Net Trading P/L</span>
        </div>

        <div class="mini">
          <b>-</b>
          <span>Return</span>
        </div>

        <div class="mini">
          <b>-</b>
          <span>Win Rate</span>
        </div>
      </div>
    </div>

    <div class="panel">
      <h3>Monthly Growth</h3>

      <table class="table">
        <thead>
          <tr>
            <th>Bulan</th>
            <th>Growth</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Mei</td>
            <td>+4.2%</td>
            <td>${statusBadge("Active")}</td>
          </tr>

          <tr>
            <td>Juni</td>
            <td>+6.8%</td>
            <td>${statusBadge("Active")}</td>
          </tr>

          <tr>
            <td>Juli</td>
            <td>-2.1%</td>
            <td>${statusBadge("Inactive")}</td>
          </tr>

          <tr>
            <td>Agustus</td>
            <td>+8.4%</td>
            <td>${statusBadge("Active")}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function profile() {
  return `
    <div class="two">
      <div class="panel">
        <h3>Sub-IB Bio Settings</h3>

        <div class="form-grid">
          <div class="field">
            <label>Nama Komunitas</label>
            <input value="Andi Gold Team">
          </div>

          <div class="field">
            <label>Kode Referral</label>
            <input value="ANDI01">
          </div>

          <div class="field">
            <label>WhatsApp</label>
            <input value="+62 812 0000 0000">
          </div>

          <div class="field">
            <label>Telegram</label>
            <input value="@andi_trader">
          </div>

          <div class="field">
            <label>Referral HFM</label>
            <input value="https://broker.example/hfm">
          </div>

          <div class="field">
            <label>Referral Windsor</label>
            <input value="https://broker.example/windsor">
          </div>
        </div>

        <button
          class="btn btn-gold"
          style="margin-top:16px"
          onclick="alert('Pengaturan tersimpan pada prototype demo.')">
          Simpan
        </button>
      </div>

      <div class="panel">
        <h3>Public Bio Link</h3>

        <p class="section-sub">
          Link unik siap dipasang di TikTok Bio.
        </p>

        <div class="notice">
          sanss09.github.io/SANS.FX/#/bio/andi
        </div>

        <a
          class="btn btn-gold"
          style="display:inline-block;margin-top:16px"
          href="#/bio/andi">
          Preview Bio
        </a>
      </div>
    </div>
  `;
}

function dashboard() {
  let body = overview();

  if (state.tab === "members") {
    body = members();
  }

  if (state.tab === "ib") {
    body = ibNetwork();
  }

  if (state.tab === "performance") {
    body = performance();
  }

  if (state.tab === "profile") {
    body = profile();
  }

  const title =
    state.role === "owner"
      ? "Owner / MIB Dashboard"
      : state.role === "ib"
        ? "Sub-IB Dashboard"
        : "Member Dashboard";

  return `
    <div class="shell">
      ${topbar()}

      <main class="dashboard">
        ${sidebar()}

        <section class="content">
          <div class="dashhead">
            <div>
              <p class="eyebrow">DEMO CONTROL CENTER</p>
              <h2>${title}</h2>
            </div>

            <div class="role-switch">
              <button
                class="${state.role === "owner" ? "active" : ""}"
                onclick="setRole('owner')">
                Owner
              </button>

              <button
                class="${state.role === "ib" ? "active" : ""}"
                onclick="setRole('ib')">
                Sub-IB
              </button>

              <button
                class="${state.role === "member" ? "active" : ""}"
                onclick="setRole('member')">
                Member
              </button>
            </div>
          </div>

          ${body}
        </section>
      </main>
    </div>
  `;
}

function bio() {
  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div class="bio-card">
          <img src="${logo}" alt="SANS.FX">

          <h1>Andi Gold Team</h1>

          <p>
            Trade • Learn • Grow bersama jaringan SANS.FX.
            Pilih akses yang Anda butuhkan di bawah ini.
          </p>

          <div class="bio-links">
            <a class="primary" href="#/join?ref=ANDI01">
              Join Community
            </a>

            <a href="https://example.com" target="_blank">
              Open Account HFM
            </a>

            <a href="https://example.com" target="_blank">
              Open Account Windsor
            </a>

            <a href="https://wa.me/6281200000000" target="_blank">
              WhatsApp
            </a>

            <a href="https://t.me/" target="_blank">
              Telegram
            </a>

            <a href="#/dashboard">
              Member Login / Dashboard
            </a>
          </div>
        </div>

        <div class="footer">
          Powered by SANS.FX HUB
        </div>
      </main>
    </div>
  `;
}

function join() {
  const query = new URLSearchParams(
    location.hash.split("?")[1] || ""
  );

  const ref = query.get("ref") || "SANSMAIN";

  return `
    <div class="shell">
      ${topbar()}

      <main class="bio-wrap">
        <div class="bio-card">
          <img src="${logo}" alt="SANS.FX">

          <h1>Join SANS.FX</h1>

          <div class="notice">
            Referral: <strong>${ref}</strong>
          </div>

          <div class="form-grid" style="text-align:left;margin-top:20px">
            <div class="field">
              <label>Nama Lengkap</label>
              <input id="joinName" placeholder="Nama Anda">
            </div>

            <div class="field">
              <label>WhatsApp</label>
              <input id="joinPhone" placeholder="+62">
            </div>

            <div class="field">
              <label>Email</label>
              <input id="joinEmail" type="email" placeholder="email@example.com">
            </div>

            <div class="field">
              <label>Broker</label>
              <select id="joinBroker">
                <option>Belum pilih</option>
                <option>HFM</option>
                <option>Windsor</option>
              </select>
            </div>

            <div class="field" style="grid-column:1/-1">
              <label>Tujuan Bergabung</label>
              <select id="joinGoal">
                <option>Member Community</option>
                <option>Menjadi Sub-IB</option>
                <option>Belajar Trading</option>
                <option>Menggunakan Trading Tools</option>
              </select>
            </div>
          </div>

          <button
            class="btn btn-gold"
            style="width:100%;margin-top:18px"
            onclick="submitJoin('${ref}')">
            Daftar Sekarang
          </button>

          <a
            class="btn btn-dark"
            style="display:block;margin-top:10px"
            href="#/">
            Kembali
          </a>

          <div id="joinMessage"></div>
        </div>
      </main>
    </div>
  `;
}

function submitJoin(ref) {
  const name = document.querySelector("#joinName").value.trim();
  const phone = document.querySelector("#joinPhone").value.trim();
  const email = document.querySelector("#joinEmail").value.trim();
  const broker = document.querySelector("#joinBroker").value;
  const goal = document.querySelector("#joinGoal").value;
  const message = document.querySelector("#joinMessage");

  if (!name || !phone || !email) {
    message.innerHTML = `
      <div class="notice">
        Nama, WhatsApp, dan email wajib diisi.
      </div>
    `;
    return;
  }

  message.innerHTML = `
    <div class="notice">
      Terima kasih, ${name}. Data demo berhasil dicatat.<br>
      Referral: ${ref}<br>
      Broker: ${broker}<br>
      Tujuan: ${goal}
    </div>
  `;
}

function calcPerf() {
  const start = Number(document.querySelector("#start").value) || 0;
  const end = Number(document.querySelector("#end").value) || 0;
  const deposit = Number(document.querySelector("#dep").value) || 0;
  const withdrawal = Number(document.querySelector("#wd").value) || 0;
  const trades = Number(document.querySelector("#trades").value) || 0;
  const wins = Number(document.querySelector("#wins").value) || 0;

  const pnl = end - start - deposit + withdrawal;
  const returnRate = start ? (100 * pnl) / start : 0;
  const winRate = trades ? (100 * wins) / trades : 0;

  document.querySelector("#perfResult").innerHTML = `
    <div class="mini">
      <b>${money(pnl)}</b>
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
  `;
}

window.setRole = function (role) {
  state.role = role;
  state.tab = role === "member" ? "performance" : "overview";
  render();
};

window.setTab = function (tab) {
  state.tab = tab;
  render();
};

window.submitJoin = submitJoin;
window.calcPerf = calcPerf;

function render() {
  const route = location.hash || "#/";

  if (route.startsWith("#/dashboard")) {
    document.querySelector("#app").innerHTML = dashboard();
    return;
  }

  if (route.startsWith("#/bio/")) {
    document.querySelector("#app").innerHTML = bio();
    return;
  }

  if (route.startsWith("#/join")) {
    document.querySelector("#app").innerHTML = join();
    return;
  }

  document.querySelector("#app").innerHTML = home();
}

window.addEventListener("hashchange", render);

render();
