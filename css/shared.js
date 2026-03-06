/* shared.js — auto-injects header + left sidebar on every page
   Usage: <div id="inject-header"></div> + <div id="inject-sidebar"></div>
   Set window.SITE_ROOT = '../' or './' before including this script */

(function() {
  var ROOT = (typeof window.SITE_ROOT !== 'undefined') ? window.SITE_ROOT : './';

  /* ---- NAV LINKS ---- */
  var NAV = [
    { label: 'STARTPAGE',      href: ROOT + 'index.html' },
    { label: 'START PLAYING',  href: ROOT + 'pages/start-playing.html' },
    { label: 'GAME MANUAL',    href: ROOT + 'pages/game-manual.html' },
    { label: 'LADDERS',        href: ROOT + 'pages/ladders.html' },
    { label: 'NINJA MISSIONS', href: ROOT + 'pages/ninja-missions.html' },
  ];

  /* ---- HEADER ---- */
  function header() {
    var navHtml = NAV.map(function(n) {
      return '<a class="nav-btn" href="' + n.href + '">' + n.label + '</a>';
    }).join('');
    return [
      '<div id="header">',
      '  <div id="header-nav">',
      navHtml,
      '    <a class="discord-btn" href="#" target="_blank">',
      '      <svg width="14" height="11" viewBox="0 0 127.14 96.36" fill="white"><path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15zM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69z"/></svg>',
      '      DISCORD',
      '    </a>',
      '  </div>',
      '  <div id="header-char">',
      '    <!-- SWAP: replace with your character art PNG (transparent BG, ~270x160px) -->',
      '    <div class="char-placeholder">👤</div>',
      '  </div>',
      '  <div id="header-logo">',
      '    <!-- SWAP: update text or add <img src="...logo.png"> -->',
      '    <div class="logo-title">NARUTO-ARENA.SITE</div>',
      '    <div class="logo-sub">YOUR #1 NARUTO ONLINE MULTIPLAYER GAME</div>',
      '  </div>',
      '  <div id="header-banner">',
      '    <!-- SWAP: your banner character art ~300x160px -->',
      '    <div class="banner-placeholder">[Banner Art]</div>',
      '  </div>',
      '</div>',
    ].join('\n');
  }

  /* ---- LEFT SIDEBAR (logged-in state) ---- */
  function sidebar() {
    return [
      '<div class="s-section">',
      '  <span class="s-title">Users Online</span>',
      '  <div class="online-pill"><span class="online-dot"></span> <span id="online-count">276</span></div>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title">Patreon</span>',
      '  <p class="s-text">Buy Characters on Patreon<br>And Support the game!</p>',
      '  <a class="patreon-btn" href="#" target="_blank">',
      '    <svg width="12" height="12" viewBox="0 0 569 546" fill="white"><path d="M362.589 0C256.686 0 170.93 85.799 170.93 191.74c0 105.64 85.756 191.44 191.659 191.44 105.674 0 191.411-85.8 191.411-191.44C553.999 85.799 468.263 0 362.589 0z"/><rect x="15" y="0" width="100" height="546"/></svg>',
      '    PATREON',
      '  </a>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title"><a href="#">Naruto-Boards</a></span>',
      '  <p class="s-text">Visit the<br><a href="#">Naruto-Boards.site</a><br><em>The official Naruto Arena Forums.</em></p>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title"><a href="#">Naruto Helper</a></span>',
      '  <!-- SWAP: replace with helper site banner image -->',
      '  <div class="helper-banner">[Helper Banner]</div>',
      '  <p class="s-text">Visit the<br><a href="#">Naruto Helper Site</a><br><em>The official Naruto Arena Helper.</em></p>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title">Account</span>',
      '  <!-- LOGGED-IN STATE — swap with login form when logged out (see login-form div below) -->',
      '  <p class="acct-welcome">Welcome, <a href="' + ROOT + 'pages/profile.html">Mirthless</a></p>',
      '  <ul class="acct-links">',
      '    <li><a href="' + ROOT + 'pages/profile.html">View Profile</a></li>',
      '    <li><a href="' + ROOT + 'pages/control-panel.html">Control Panel</a></li>',
      '    <li><a href="' + ROOT + 'pages/control-panel.html" class="new-tag">Change Title (NEW)</a></li>',
      '    <li><a href="' + ROOT + 'pages/control-panel.html" class="new-tag">PlayerCard (NEW)</a></li>',
      '    <li><a href="' + ROOT + 'pages/change-avatar.html">Change Avatar</a></li>',
      '    <li><a href="' + ROOT + 'pages/clan-panel.html">Clan Panel</a></li>',
      '    <li><a href="' + ROOT + 'pages/change-avatar.html">Custom Background</a></li>',
      '    <li><a href="#">Reset Account</a></li>',
      '    <li><a href="#">Logout</a></li>',
      '  </ul>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title">Mission Videos</span>',
      '  <p class="s-text">Looking for <em>mission team</em> suggestions?</p>',
      '  <p class="s-text"><strong>Check out the channels below:</strong></p>',
      '  <ul class="s-links">',
      '    <li><a href="#">Fable (Youtube)</a></li>',
      '    <li><a href="#">Rizeth (Youtube)</a></li>',
      '  </ul>',
      '  <p class="s-text mt4"><strong>Recent Mission Videos:</strong></p>',
      '  <ul class="s-links">',
      '    <li><a href="#">Naruto-Arena | Unlocking Deva Path Pein (S) &amp; Fukasaku and Shima (S)</a></li>',
      '    <li><a href="#">Naruto Arena - Unlocking Hiruko Sasori (S) | Shinobi Alliance Kankuro (S) (2025)</a></li>',
      '  </ul>',
      '</div>',

      '<div class="s-section">',
      '  <span class="s-title">Ladder Videos</span>',
      '  <p class="s-text">Looking for teams to <em>rank up</em> in Ladder Game!</p>',
      '  <p class="s-text"><strong>Check out the channels below:</strong></p>',
      '  <ul class="s-links">',
      '    <li><a href="#">SHAR (Youtube)</a></li>',
      '    <li><a href="#">DaniloSTB (Youtube)</a></li>',
      '  </ul>',
      '  <p class="s-text mt4"><strong>Recent Ladder Videos:</strong></p>',
      '  <ul class="s-links">',
      '    <li><a href="#">Naruto-Arena Classic-1 Becoming a Genin | New Player Teams</a></li>',
      '  </ul>',
      '</div>',
    ].join('\n');
  }

  document.addEventListener('DOMContentLoaded', function() {
    var hEl = document.getElementById('inject-header');
    var sEl = document.getElementById('inject-sidebar');
    if (hEl) hEl.innerHTML = header();
    if (sEl) sEl.innerHTML = sidebar();
  });
})();
