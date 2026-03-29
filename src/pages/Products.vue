<template>
  <div class="products">
    <section class="products-hero">
      <h1>我们的产品</h1>
      <p>为每个生命阶段精心设计</p>
    </section>

    <section class="products-list">
      <div class="products-container">
        <div class="product-detail">
          <div class="product-visual">
            <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="80" width="180" height="240" rx="30" fill="#f5f5f7" stroke="#d5d5d7" stroke-width="2"/>
              <circle cx="150" cy="140" r="40" fill="#0071e3"/>
              <text x="150" y="280" text-anchor="middle" font-size="20" font-weight="bold" fill="#1d1d1f">Bloom</text>
            </svg>
          </div>
          <div class="product-info">
            <h2>Bloom</h2>
            <p class="subtitle">婴幼儿配方 (0-12 个月)</p>
            <p class="description">
              Bloom 是专为新生儿和婴幼儿设计的高端益生菌配方。含有 4 种关键益生菌菌株和 HMO 益生元混合物，支持健康的肠道微生物群落发展。
            </p>
            <ul class="features-list">
              <li>4 种关键益生菌菌株</li>
              <li>HMO 益生元混合物</li>
              <li>100% 每日推荐维生素 D3</li>
              <li>第三方测试认证</li>
            </ul>
            <button class="btn btn-primary">立即购买</button>
          </div>
        </div>

        <div class="product-detail">
          <div class="product-visual">
            <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="60" y="80" width="180" height="240" rx="30" fill="#f5f5f7" stroke="#d5d5d7" stroke-width="2"/>
              <circle cx="150" cy="140" r="40" fill="#34c759"/>
              <text x="150" y="280" text-anchor="middle" font-size="20" font-weight="bold" fill="#1d1d1f">Thrive</text>
            </svg>
          </div>
          <div class="product-info">
            <h2>Thrive</h2>
            <p class="subtitle">幼儿配方 (12 个月+)</p>
            <p class="description">
              Thrive 是为蹒跚学步的孩子设计的高级益生菌配方。含有 6 种益生菌菌株和增强的益生元混合物，支持持续的肠道健康和免疫发展。
            </p>
            <ul class="features-list">
              <li>6 种益生菌菌株</li>
              <li>增强的益生元混合物</li>
              <li>100% 每日推荐维生素 D3</li>
              <li>第三方测试认证</li>
            </ul>
            <button class="btn btn-primary">立即购买</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.products {
  width: 100%;
}

.products-hero {
  background: #f5f5f7;
  padding: 100px 20px;
  text-align: center;
}

.products-hero h1 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
}

.products-hero p {
  font-size: 21px;
  color: #666;
}

.products-list {
  padding: 80px 20px;
}

.products-container {
  max-width: 1200px;
  margin: 0 auto;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;
}

.product-detail:nth-child(even) {
  direction: rtl;
}

.product-detail:nth-child(even) > * {
  direction: ltr;
}

.product-visual {
  width: 100%;
  max-width: 300px;
}

.product-visual svg {
  width: 100%;
  height: auto;
}

.product-info h2 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 17px;
  color: #0071e3;
  font-weight: 500;
  margin-bottom: 20px;
}

.description {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 30px;
}

.features-list {
  list-style: none;
  margin-bottom: 30px;
}

.features-list li {
  font-size: 15px;
  color: #1d1d1f;
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #34c759;
  font-weight: 600;
}

.btn {
  padding: 12px 24px;
  border-radius: 980px;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary {
  background: #0071e3;
  color: #fff;
}

.btn-primary:hover {
  background: #0077ed;
}

@media (max-width: 768px) {
  .product-detail {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .product-detail:nth-child(even) {
    direction: ltr;
  }

  .product-info h2 {
    font-size: 28px;
  }

  .products-hero h1 {
    font-size: 36px;
  }
}
</style>
