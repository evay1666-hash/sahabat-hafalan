'use strict';
/* ===== Data cadangan (offline): 6 surat pendek. Sumber online: api.alquran.cloud ===== */
const LOCAL = [
 {n:1,name:'Al-Fatihah',ar:'الفاتحة',
  a:['بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ','ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ','ٱلرَّحْمَٰنِ ٱلرَّحِيمِ','مَٰلِكِ يَوْمِ ٱلدِّينِ','إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ','ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ','صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ'],
  t:['Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.','Segala puji bagi Allah, Tuhan seluruh alam,','Yang Maha Pengasih, Maha Penyayang,','Pemilik hari pembalasan.','Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.','Tunjukilah kami jalan yang lurus,','(yaitu) jalan orang-orang yang telah Engkau beri nikmat kepadanya; bukan (jalan) mereka yang dimurkai, dan bukan (pula jalan) mereka yang sesat.']},
 {n:112,name:'Al-Ikhlas',ar:'الإخلاص',
  a:['قُلْ هُوَ ٱللَّهُ أَحَدٌ','ٱللَّهُ ٱلصَّمَدُ','لَمْ يَلِدْ وَلَمْ يُولَدْ','وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ'],
  t:['Katakanlah (Muhammad), “Dialah Allah, Yang Maha Esa.','Allah tempat meminta segala sesuatu.','(Allah) tidak beranak dan tidak pula diperanakkan.','Dan tidak ada sesuatu yang setara dengan Dia.”']},
 {n:113,name:'Al-Falaq',ar:'الفلق',
  a:['قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ','مِن شَرِّ مَا خَلَقَ','وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ','وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ','وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ'],
  t:['Katakanlah, “Aku berlindung kepada Tuhan yang menguasai subuh (fajar),','dari kejahatan (makhluk yang) Dia ciptakan,','dan dari kejahatan malam apabila telah gelap gulita,','dan dari kejahatan (perempuan-perempuan) penyihir yang meniup pada buhul-buhul (talinya),','dan dari kejahatan orang yang dengki apabila dia dengki.”']},
 {n:114,name:'An-Nas',ar:'الناس',
  a:['قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ','مَلِكِ ٱلنَّاسِ','إِلَٰهِ ٱلنَّاسِ','مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ','ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ','مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ'],
  t:['Katakanlah, “Aku berlindung kepada Tuhannya manusia,','Raja manusia,','sembahan manusia,','dari kejahatan (bisikan) setan yang bersembunyi,','yang membisikkan (kejahatan) ke dalam dada manusia,','dari (golongan) jin dan manusia.”']},
 {n:108,name:'Al-Kautsar',ar:'الكوثر',
  a:['إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ','فَصَلِّ لِرَبِّكَ وَٱنْحَرْ','إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ'],
  t:['Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.','Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.','Sungguh, orang-orang yang membenci kamu dialah yang terputus.']},
 {n:110,name:'An-Nasr',ar:'النصر',
  a:['إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ','وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا','فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ إِنَّهُۥ كَانَ تَوَّابًۢا'],
  t:['Apabila telah datang pertolongan Allah dan kemenangan,','dan engkau melihat manusia berduyun-duyun masuk agama Allah,','maka bersihkanlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sungguh, Dia Maha Penerima tobat.']}
].sort((x,y)=>x.n-y.n);

const DAILY = [
 {ar:'خَيْرُكُمْ مَنْ تَعَلَّمَ ٱلْقُرْآنَ وَعَلَّمَهُ',t:'“Sebaik-baik kalian adalah orang yang belajar Al-Qur’an dan mengajarkannya.”',s:'HR. Bukhari'},
 {ar:'وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',t:'Sungguh, telah Kami mudahkan Al-Qur’an untuk peringatan, maka adakah orang yang mengambil pelajaran?',s:'QS. Al-Qamar: 17'},
 {ar:'إِنَّمَا ٱلْأَعْمَالُ بِٱلنِّيَّاتِ',t:'“Sesungguhnya amal itu tergantung pada niatnya.”',s:'HR. Bukhari dan Muslim'},
 {ar:'أَحَبُّ ٱلْأَعْمَالِ إِلَى ٱللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ',t:'“Amal yang paling dicintai Allah adalah yang paling terus-menerus, walaupun sedikit.”',s:'HR. Bukhari dan Muslim'}
];

/* ===== Helpers & penyimpanan ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const KEY = 'sahabat-hafalan-v1', API = 'https://api.alquran.cloud/v1';
const UKEY = 'sahabat-hafalan-users', SKEY = 'sahabat-hafalan-session', LKEY = 'sahabat-hafalan-look';
const fresh = () => ({done:{}, rev:{}, log:{}, streak:0, last:'', target:5}); // objek baru tiap dipanggil
const rd = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) || d; } catch (e) { return d; } };
const wr = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
let USERS = rd(UKEY, {}), USER = null;
try { USER = localStorage.getItem(SKEY); } catch (e) {}
if (!USERS[USER]) USER = null;
const dkey = () => USER ? `${KEY}:u:${USER}` : KEY; // progres tamu / per akun
let S = {...fresh(), ...rd(dkey(), {})};
const save = () => wr(dkey(), S);
let LOOK = {theme: S.theme || '', fs: S.fs || 2.2, ...rd(LKEY, {})};
const ds = d => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
const today = () => ds(new Date());
const daysAgo = k => { const d = new Date(); d.setDate(d.getDate()-k); return ds(d); };
const count = () => Object.values(S.done).reduce((a,b) => a + b.length, 0);
const todayN = () => S.log[today()] || 0;

function touch() { // catat aktivitas harian untuk streak
  const t = today();
  if (S.last === t) return;
  S.streak = S.last === daysAgo(1) ? S.streak + 1 : 1;
  S.last = t; save();
}
const streak = () => (S.last === today() || S.last === daysAgo(1)) ? S.streak : 0;

async function fj(url) {
  const c = new AbortController(), t = setTimeout(() => c.abort(), 9000);
  try { const r = await fetch(url, {signal: c.signal}); if (!r.ok) throw new Error(r.status); return await r.json(); }
  finally { clearTimeout(t); }
}

let LIST = null, ONLINE = true; const CACHE = {};
async function getList() {
  if (LIST) return LIST;
  try {
    const j = await fj(API + '/surah');
    LIST = j.data.map(s => ({n:s.number, name:s.englishName, ar:s.name.replace('سُورَةُ ','').replace('سورة ',''), c:s.numberOfAyahs}));
  } catch (e) {
    ONLINE = false;
    LIST = LOCAL.map(s => ({n:s.n, name:s.name, ar:s.ar, c:s.a.length}));
  }
  return LIST;
}
const nameOf = n => (LIST.find(s => s.n == n) || {name:'Surat ' + n}).name;

async function getSurah(n) {
  if (CACHE[n]) return CACHE[n];
  try {
    const j = await fj(`${API}/surah/${n}/editions/quran-uthmani,id.indonesian,en.transliteration`);
    const [a, b, c] = j.data, ar = a.ayahs.map(x => x.text);
    if (n != 1 && n != 9) { // buang basmalah yang digabung di ayat pertama
      const w = ar[0].split(' ');
      if (w[0].replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '') === 'بسم') ar[0] = w.slice(4).join(' ');
    }
    return CACHE[n] = {n:+n, name:a.englishName, ar:a.name, a:ar, t:b.ayahs.map(x => x.text), l:c.ayahs.map(x => x.text)};
  } catch (e) {
    const L = LOCAL.find(x => x.n == n);
    if (L) return CACHE[n] = L;
    throw e;
  }
}

/* ===== Router ===== */
const PAGES = ['home','surat','hafalan','kuis','progres','tips','tentang','akun'];
function route() {
  let [, p, arg, mode] = location.hash.split('/');
  if (!PAGES.includes(p)) p = 'home';
  $$('main > section').forEach(s => s.hidden = s.id !== p);
  $$('nav a').forEach(a => a.classList.toggle('on', a.dataset.p === p));
  $('#hdrAcc').classList.toggle('on', p === 'akun');
  ({home:renderHome, surat:renderList, hafalan:() => openSurah(+arg, mode === 'm'), kuis:renderQuiz, progres:renderProg, akun:renderAcc}[p] || (() => {}))();
  scrollTo(0, 0);
}
addEventListener('hashchange', route);

/* ===== Beranda ===== */
function renderHome() {
  const d = DAILY[Math.floor(Date.now() / 864e5) % DAILY.length];
  $('#daily').innerHTML = `<p class="ar" lang="ar" dir="rtl" style="font-size:1.6rem">${d.ar}</p><p>${d.t}</p><small>${d.s}</small>`;
  $('#hStreak').textContent = streak();
  const t = S.target, n = todayN();
  $('#hBar').style.width = Math.min(100, n / t * 100) + '%';
  $('#hTarget').textContent = `${n} dari ${t} ayat hari ini`;
}

/* ===== Daftar surat ===== */
async function renderList() {
  const box = $('#list'); box.innerHTML = '<p class="load">Memuat daftar surat…</p>';
  const L = await getList();
  const nt = $('#note');
  nt.hidden = ONLINE;
  nt.textContent = 'Mode offline: hanya 6 surat pendek yang tersedia. Sambungkan internet untuk membuka semua surat.';
  const q = $('#q').value.trim().toLowerCase(), j30 = $('#j30').checked;
  const items = L.filter(s => (!j30 || s.n >= 78) && (!q || (s.name + ' ' + s.n).toLowerCase().includes(q) || s.ar.includes(q)));
  box.innerHTML = items.map(s => {
    const dn = (S.done[s.n] || []).length;
    return `<a class="card sCard" href="#/hafalan/${s.n}"><span class="n"><b>${s.n}</b></span><span><span class="nm">${s.name}</span><small>${s.c} ayat${dn ? ` · ${dn} hafal` : ''}</small></span><span class="arn" lang="ar">${s.ar}</span></a>`;
  }).join('') || '<p>Surat tidak ditemukan.</p>';
}
$('#q').addEventListener('input', renderList);
$('#j30').addEventListener('change', renderList);

/* ===== Halaman hafalan ===== */
let H = null;
async function openSurah(n, hide) {
  const box = $('#hafalan'); box.innerHTML = '<p class="load">Memuat surat…</p>';
  await getList();
  try { H = {s: await getSurah(n), hide: !!hide, tr: true, tl: true}; }
  catch (e) { box.innerHTML = '<div class="card"><p>Surat ini belum bisa dimuat. Periksa koneksi internet, lalu coba lagi.</p><a class="btn sm" href="#/surat">Kembali ke daftar</a></div>'; return; }
  drawSurah();
}
function drawSurah() {
  const {s} = H, done = S.done[s.n] || [];
  $('#hafalan').innerHTML = `
    <a href="#/surat">← Daftar surat</a>
    <h2>${s.n}. ${s.name} <span class="ar" lang="ar" style="font-size:1.6rem">${s.ar}</span></h2>
    <p>${done.length} dari ${s.a.length} ayat sudah dihafal.</p>
    <div class="ctl">
      <button class="btn sm ${H.hide ? 'on' : ''}" data-a="hide">Sembunyikan ayat</button>
      ${s.l ? `<button class="btn sm ${H.tl ? 'on' : ''}" data-a="tl">Latin</button>` : ''}
      <button class="btn sm ${H.tr ? 'on' : ''}" data-a="tr">Terjemahan</button>
      <button class="btn sm" data-a="rev">✔ Selesai murojaah</button>
    </div>
    ${H.hide ? '<p class="note">Ketuk ayat yang buram untuk melihat jawabannya.</p>' : ''}
    ${s.a.map((t, i) => `
      <article class="ay ${done.includes(i + 1) ? 'ok' : ''}">
        <span class="no">${i + 1}</span>
        <p class="ar ${H.hide ? 'hid' : ''}" lang="ar" dir="rtl">${t}</p>
        ${H.tl && s.l ? `<p class="tl">${s.l[i]}</p>` : ''}
        ${H.tr ? `<p class="tr">${s.t[i]}</p>` : ''}
        <label><input type="checkbox" data-i="${i + 1}" ${done.includes(i + 1) ? 'checked' : ''}> Sudah hafal</label>
      </article>`).join('')}`;
}
$('#hafalan').addEventListener('click', e => {
  if (!H) return;
  const ar = e.target.closest('.ar.hid'); if (ar) { ar.classList.remove('hid'); return; }
  const b = e.target.closest('button[data-a]'); if (!b) return;
  const a = b.dataset.a;
  if (a === 'hide') H.hide = !H.hide;
  else if (a === 'tl') H.tl = !H.tl; else if (a === 'tr') H.tr = !H.tr;
  else if (a === 'rev') { S.rev[H.s.n] = today(); touch(); save(); alert('Alhamdulillah, murojaah hari ini tercatat. 🌙'); return; }
  drawSurah();
});
$('#hafalan').addEventListener('change', e => {
  const c = e.target.closest('input[data-i]'); if (!c) return;
  const n = H.s.n, i = +c.dataset.i, arr = S.done[n] || (S.done[n] = []);
  if (c.checked && !arr.includes(i)) { arr.push(i); S.log[today()] = todayN() + 1; S.rev[n] = today(); touch(); }
  if (!c.checked) { S.done[n] = arr.filter(x => x !== i); if (!S.done[n].length) delete S.done[n]; }
  save();
  c.closest('.ay').classList.toggle('ok', c.checked);
  $('#hafalan p:not(.note)').textContent = `${(S.done[n] || []).length} dari ${H.s.a.length} ayat sudah dihafal.`;
});

/* ===== Kuis ===== */
let Q = null;
async function renderQuiz() {
  const L = await getList(), box = $('#quiz');
  if (Q && Q.run) return drawQ();
  const sel = Q && Q.n ? Q.n : 112;
  box.innerHTML = `<div class="card"><p>Pilih surat, lalu lengkapi kata ayat yang hilang (5 soal).</p>
    <div class="row"><select id="qs" aria-label="Pilih surat">${L.filter(s => ONLINE ? s.n >= 78 || s.n === 1 : true).map(s => `<option value="${s.n}" ${s.n == sel ? 'selected' : ''}>${s.n}. ${s.name}</option>`).join('')}</select>
    <button class="btn gold" id="qgo">Mulai kuis</button></div></div>`;
  $('#qgo').onclick = startQuiz;
}
const shuffle = a => a.map(x => [Math.random(), x]).sort((p, q) => p[0] - q[0]).map(x => x[1]);
async function startQuiz() {
  $('#qgo').disabled = true; $('#qgo').textContent = 'Memuat…';
  const n = +$('#qs').value, s = await getSurah(n).catch(() => null);
  if (!s) { $('#quiz').insertAdjacentHTML('beforeend', '<p class="note">Surat belum bisa dimuat. Periksa koneksi internet.</p>'); return; }
  const pool = [...new Set([...Object.values(CACHE), ...LOCAL].flatMap(x => x.a.flatMap(t => t.split(' '))))];
  const qs = shuffle(s.a.map((t, i) => i)).slice(0, 5).map(i => {
    const w = s.a[i].split(' '), k = Math.floor(Math.random() * w.length), ans = w[k];
    const opts = shuffle([ans, ...shuffle(pool.filter(x => x !== ans)).slice(0, 3)]);
    return {w, k, ans, opts, tr: s.t[i], no: i + 1};
  });
  Q = {run: true, n, name: s.name, qs, i: 0, sc: 0, ans: false};
  drawQ();
}
function drawQ() {
  const box = $('#quiz');
  if (Q.i >= Q.qs.length) {
    touch(); const sc = Q.sc, tot = Q.qs.length, n = Q.n; Q.run = false;
    box.innerHTML = `<div class="card" style="text-align:center"><h3>Skor kamu</h3><p class="num">${sc}/${tot}</p>
      <p>${sc === tot ? 'Masya Allah, sempurna!' : sc >= 3 ? 'Bagus, terus ulangi hafalanmu.' : 'Tidak apa-apa, ulangi lagi pelan-pelan.'}</p>
      <button class="btn gold" id="again">Main lagi</button><a class="btn" href="#/hafalan/${n}">Buka hafalan</a></div>`;
    $('#again').onclick = renderQuiz; return;
  }
  const q = Q.qs[Q.i];
  box.innerHTML = `<div class="card"><p>Soal ${Q.i + 1} dari ${Q.qs.length} · ${Q.name} ayat ${q.no}</p>
    <p class="ar" lang="ar" dir="rtl">${q.w.map((x, i) => i === q.k ? '<span class="gap">____</span>' : x).join(' ')}</p>
    <div class="opts">${q.opts.map(o => `<button class="opt" lang="ar" data-o="${o}">${o}</button>`).join('')}</div>
    <div id="fb"></div></div>`;
  const show = () => { // tampilkan hasil jawaban (juga saat soal digambar ulang)
    const ok = q.picked === q.ans;
    $$('.opt').forEach(x => { x.disabled = true; if (x.dataset.o === q.ans) x.classList.add('right'); else if (x.dataset.o === q.picked) x.classList.add('wrong'); });
    $('#fb').innerHTML = `<p>${ok ? '✅ Benar!' : '❌ Belum tepat.'} <i>${q.tr}</i></p><button class="btn gold sm" id="nx">${Q.i + 1 === Q.qs.length ? 'Lihat skor' : 'Soal berikutnya'}</button>`;
    $('#nx').onclick = () => { Q.i++; drawQ(); };
  };
  $$('.opt').forEach(b => b.onclick = () => {
    if (q.picked != null) return;
    q.picked = b.dataset.o; if (q.picked === q.ans) Q.sc++;
    show();
  });
  if (q.picked != null) show();
}

/* ===== Progres & murojaah ===== */
async function renderProg() {
  await getList();
  const ids = Object.keys(S.done).sort((a, b) => (S.rev[a] || '') < (S.rev[b] || '') ? -1 : 1);
  const n = count(), t = S.target, td = todayN();
  const ago = id => { const r = S.rev[id]; if (!r) return 'belum pernah diulang'; const d = Math.round((new Date(today()) - new Date(r)) / 864e5); return d ? `terakhir ${d} hari lalu` : 'sudah diulang hari ini'; };
  const share = `Alhamdulillah, aku sudah menghafal ${n} ayat dari ${ids.length} surat di Sahabat Hafalan 🌙 Yuk menghafal bersama: ${location.href.split('#')[0]}`;
  $('#prog').innerHTML = `
    ${USER ? '' : '<div class="note" style="margin-bottom:1rem">Kamu belum masuk, jadi progres tersimpan sebagai tamu. <a href="#/akun">Masuk atau daftar</a> agar progresmu terhubung ke akunmu.</div>'}
    <div class="stats">
      <div class="card"><p class="num">${n}</p>ayat dihafal</div>
      <div class="card"><p class="num">${ids.length}</p>surat dipelajari</div>
      <div class="card"><p class="num">${streak()}</p>hari berturut-turut</div>
    </div>
    <div class="card"><h3>Target harian</h3>
      <div class="row"><label>Ayat per hari: <input id="tg" type="number" min="1" max="50" value="${t}" style="width:5rem"></label></div>
      <div class="bar" style="margin:.6rem 0"><i style="width:${Math.min(100, td / t * 100)}%"></i></div><p>${td} dari ${t} ayat hari ini.</p></div>
    <div class="card" style="margin-top:1rem"><h3>Murojaah</h3>
      ${ids.length ? ids.map(id => { const tot = (LIST.find(s => s.n == id) || {c: 0}).c, d = S.done[id].length;
        return `<div class="pr"><b>${nameOf(id)}</b><div class="bar"><i style="width:${tot ? d / tot * 100 : 0}%"></i></div><small>${d}${tot ? '/' + tot : ''} ayat · ${ago(id)}</small><a class="btn sm" href="#/hafalan/${id}/m">Murojaah</a></div>`; }).join('')
        : '<p>Belum ada hafalan tercatat. Buka satu surat lalu centang “Sudah hafal”.</p><a class="btn gold sm" href="#/surat">Pilih surat</a>'}
    </div>
    <p><a class="btn gold" target="_blank" rel="noopener" href="https://wa.me/?text=${encodeURIComponent(share)}">Bagikan ke WhatsApp</a>
    <button class="btn" id="rst">Hapus semua progres</button></p>`;
  $('#tg').onchange = e => { S.target = Math.max(1, Math.min(50, +e.target.value || 5)); save(); renderProg(); };
  $('#rst').onclick = () => { if (confirm('Hapus semua progres hafalan di browser ini?')) { S = {...fresh()}; save(); renderProg(); } };
}

/* ===== Akun (login di browser; data tersimpan di Local Storage) ===== */
const go = h => location.hash === h ? route() : (location.hash = h);
const enc = new TextEncoder();
const rnd = () => { try { return [...crypto.getRandomValues(new Uint8Array(12))].map(x => x.toString(16).padStart(2, '0')).join(''); } catch (e) { return Math.random().toString(36).slice(2); } };
async function hashPw(pw, salt) {
  try {
    const k = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
    const bits = await crypto.subtle.deriveBits({name:'PBKDF2', salt:enc.encode(salt), iterations:100000, hash:'SHA-256'}, k, 256);
    return btoa(String.fromCharCode(...new Uint8Array(bits)));
  } catch (e) { // cadangan sederhana bila crypto.subtle tidak tersedia
    let h = 5381; const t = salt + pw; for (let i = 0; i < t.length; i++) h = (h * 33 ^ t.charCodeAt(i)) >>> 0;
    return 'x' + h;
  }
}
function updHdr() { $('#hdrAcc').textContent = USER ? '👤 ' + USERS[USER].name : 'Masuk'; }
function setUser(k) {
  USER = k; try { k ? localStorage.setItem(SKEY, k) : localStorage.removeItem(SKEY); } catch (e) {}
  S = {...fresh(), ...rd(dkey(), {})}; H = null; Q = null; updHdr();
}
async function register(name, pw, pw2) {
  const k = name.toLowerCase();
  if (!/^[A-Za-z0-9_]{3,20}$/.test(name)) return 'Nama pengguna 3–20 karakter: huruf, angka, atau garis bawah (_).';
  if (pw.length < 6) return 'Kata sandi minimal 6 karakter.';
  if (pw !== pw2) return 'Ulangi kata sandi belum sama.';
  if (USERS[k]) return 'Nama pengguna sudah dipakai di browser ini. Pilih nama lain atau masuk.';
  const salt = rnd();
  USERS[k] = {name, salt, hash: await hashPw(pw, salt)}; wr(UKEY, USERS);
  if (!USER && count() > 0) { wr(`${KEY}:u:${k}`, S); try { localStorage.removeItem(KEY); } catch (e) {} } // pindahkan progres tamu
  setUser(k); return '';
}
async function login(name, pw) {
  const k = name.toLowerCase(), u = USERS[k];
  if (!u || u.hash !== await hashPw(pw, u.salt)) return 'Nama pengguna atau kata sandi salah.';
  setUser(k); return '';
}
function renderAcc() {
  const box = $('#accBox'), u = USERS[USER];
  if (u) {
    box.innerHTML = `<div class="card auth"><h3>Halo, ${u.name}</h3><p>Kamu sudah masuk. Progres hafalanmu (${count()} ayat) tersimpan di akun ini.</p>
      <a class="btn gold" href="#/progres">Lihat progres</a><button class="btn" id="out">Keluar</button></div>`;
    $('#out').onclick = () => { setUser(null); go('#/home'); };
    return;
  }
  let reg = false;
  const draw = () => {
    box.innerHTML = `<div class="card auth">
      <div class="ctl"><button class="btn sm ${reg ? '' : 'on'}" data-m="in">Masuk</button><button class="btn sm ${reg ? 'on' : ''}" data-m="up">Daftar</button></div>
      <form id="af">
        <label>Nama pengguna<input id="au" autocomplete="username" maxlength="20" required></label>
        <label>Kata sandi<input id="ap" type="password" autocomplete="${reg ? 'new-password' : 'current-password'}" required></label>
        ${reg ? '<label>Ulangi kata sandi<input id="ap2" type="password" autocomplete="new-password" required></label>' : ''}
        <p id="ae" class="err" role="alert"></p>
        <button class="btn gold" type="submit">${reg ? 'Daftar' : 'Masuk'}</button>
      </form>
      <p class="note">Akun dan progres disimpan di browser ini saja, belum di server. ${reg ? 'Progres yang sudah kamu catat sebagai tamu akan dipindahkan ke akun baru.' : 'Belum punya akun? Pilih Daftar.'}</p></div>`;
    $$('#accBox [data-m]').forEach(b => b.onclick = () => { reg = b.dataset.m === 'up'; draw(); });
    $('#af').onsubmit = async e => {
      e.preventDefault();
      const btn = $('#af button[type=submit]'); btn.disabled = true;
      const nm = $('#au').value.trim(), pw = $('#ap').value;
      const err = reg ? await register(nm, pw, $('#ap2').value) : await login(nm, pw);
      if (err) { $('#ae').textContent = err; btn.disabled = false; } else go('#/home');
    };
  };
  draw();
}

/* ===== Tema & ukuran huruf ===== */
function applyLook() {
  document.documentElement.dataset.theme = LOOK.theme;
  document.documentElement.style.setProperty('--ar', LOOK.fs + 'rem');
  $('#theme').textContent = LOOK.theme === 'dark' ? '☀️' : '🌙';
}
const look = () => { wr(LKEY, LOOK); applyLook(); };
$('#theme').onclick = () => { LOOK.theme = LOOK.theme === 'dark' ? '' : 'dark'; look(); };
$('#fsp').onclick = () => { LOOK.fs = Math.min(4, +(LOOK.fs + .2).toFixed(1)); look(); };
$('#fsm').onclick = () => { LOOK.fs = Math.max(1.4, +(LOOK.fs - .2).toFixed(1)); look(); };

applyLook();
updHdr();
route();
