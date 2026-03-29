<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>Persephone</h1>
        <p class="tagline">高端生物科技产品</p>
        <p class="description">为现代生活而设计的科学解决方案</p>
        <div class="cta-buttons">
          <router-link to="/products" class="btn btn-primary">了解产品</router-link>
          <router-link to="/contact" class="btn btn-secondary">联系我们</router-link>
        </div>
      </div>
      <div class="hero-image">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="180" fill="#f5f5f7" stroke="#e5e5e7" stroke-width="2"/>
          <circle cx="200" cy="200" r="120" fill="#fff" stroke="#d5d5d7" stroke-width="1"/>
          <circle cx="200" cy="200" r="60" fill="#0071e3"/>
        </svg>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="features-container">
        <h2>为什么选择 Persephone</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🔬</div>
            <h3>科学驱动</h3>
            <p>基于最新的科学研究和临床验证</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">✓</div>
            <h3>质量保证</h3>
            <p>每批产品都经过第三方测试</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌍</div>
            <h3>全球标准</h3>
            <p>符合国际质量和安全标准</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💚</div>
            <h3>用户至上</h3>
            <p>为每个用户的健康而设计</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Preview -->
    <section class="products-preview">
      <div class="products-container">
        <h2>我们的产品</h2>
        <div class="products-grid">
          <div class="product-item">
            <div class="product-image">
              <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="50" width="120" height="200" rx="20" fill="#f5f5f7" stroke="#d5d5d7" stroke-width="2"/>
                <circle cx="100" cy="100" r="30" fill="#0071e3"/>
                <text x="100" y="200" text-anchor="middle" font-size="16" fill="#1d1d1f">Bloom</text>
              </svg>
            </div>
            <h3>Bloom</h3>
            <p>婴幼儿配方</p>
            <router-link to="/products" class="link">了解更多 →</router-link>
          </div>
          <div class="product-item">
            <div class="product-image">
              <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="50" width="120" height="200" rx="20" fill="#f5f5f7" stroke="#d5d5d7" stroke-width="2"/>
                <circle cx="100" cy="100" r="30" fill="#34c759"/>
                <text x="100" y="200" text-anchor="middle" font-size="16" fill="#1d1d1f">Thrive</text>
              </svg>
            </div>
            <h3>Thrive</h3>
            <p>幼儿配方</p>
            <router-link to="/products" class="link">了解更多 →</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  width: 100%;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #1d1d1f;
}

.tagline {
  font-size: 28px;
  font-weight: 600;
  color: #555;
  margin-bottom: 10px;
}

.description {
  font-size: 17px;
  color: #666;
  margin-bottom: 40px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  border-radius: 980px;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn-primary {
  background: #0071e3;
  color: #fff;
}

.btn-primary:hover {
  background: #0077ed;
}

.btn-secondary {
  background: #f5f5f7;
  color: #1d1d1f;
  border: 1px solid #d5d5d7;
}

.btn-secondary:hover {
  background: #efefef;
}

.hero-image {
  width: 100%;
  max-width: 400px;
}

.hero-image svg {
  width: 100%;
  height: auto;
}

/* Features Section */
.features {
  background: #f5f5f7;
  padding: 80px 20px;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-container h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 10px;
}

.feature-card p {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
}

/* Products Preview */
.products-preview {
  padding: 80px 20px;
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
}

.products-container h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
  text-align: center;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.product-item {
  text-align: center;
}

.product-image {
  width: 100%;
  max-width: 200px;
  margin: 0 auto 30px;
}

.product-image svg {
  width: 100%;
  height: auto;
}

.product-item h3 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
}

.product-item p {
  font-size: 15px;
  color: #666;
  margin-bottom: 20px;
}

.link {
  color: #0071e3;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s;
}

.link:hover {
  color: #0077ed;
}

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 60px 20px;
    gap: 40px;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .tagline {
    font-size: 20px;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .features-container h2,
  .products-container h2 {
    font-size: 28px;
  }
}
</style>
