<template>
  <div class="app">
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="logo">Persephone</router-link>
        <ul class="nav-links">
          <li><router-link to="/products">产品</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/contact">联系</router-link></li>
        </ul>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <div class="footer-container">
        <p>&copy; 2026 Persephone. 保留所有权利。</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid #e5e5e7;
  padding: 0 20px;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
}

.logo {
  font-size: 17px;
  font-weight: 600;
  color: #1d1d1f;
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  font-size: 15px;
  color: #1d1d1f;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #555;
}

main {
  flex: 1;
}

.footer {
  background: #f5f5f7;
  border-top: 1px solid #e5e5e7;
  padding: 40px 20px;
  margin-top: 60px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-size: 12px;
  color: #666;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 15px;
  }
  .nav-links a {
    font-size: 13px;
  }
}
</style>
