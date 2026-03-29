<template>
  <div class="about">
    <section class="about-hero">
      <h1>关于 Persephone</h1>
      <p>科学与自然的完美结合</p>
    </section>

    <section class="about-content">
      <div class="about-container">
        <div class="about-section">
          <h2>我们的使命</h2>
          <p>
            Persephone 致力于通过科学驱动的生物科技产品，为每个生命阶段提供最佳的健康支持。我们相信，通过结合最新的微生物组研究和自然的力量，我们可以为现代家庭创造更健康的未来。
          </p>
        </div>

        <div class="about-section">
          <h2>我们的价值观</h2>
          <div class="values-grid">
            <div class="value-item">
              <h3>科学第一</h3>
              <p>每个产品都基于严格的科学研究和临床验证</p>
            </div>
            <div class="value-item">
              <h3>质量承诺</h3>
              <p>每批产品都经过第三方测试和深度 DNA 测序</p>
            </div>
            <div class="value-item">
              <h3>透明度</h3>
              <p>我们相信完全的透明度和诚实的沟通</p>
            </div>
            <div class="value-item">
              <h3>创新精神</h3>
              <p>不断推进微生物组科学的边界</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>我们的团队</h2>
          <p>
            Persephone 由微生物组科学家、儿科医生和健康专家组成的团队领导。我们的创始人 Stephanie Culler 博士在微生物组研究领域拥有超过 15 年的经验。
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  width: 100%;
}

.about-hero {
  background: #f5f5f7;
  padding: 100px 20px;
  text-align: center;
}

.about-hero h1 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
}

.about-hero p {
  font-size: 21px;
  color: #666;
}

.about-content {
  padding: 80px 20px;
}

.about-container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 80px;
}

.about-section h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;
}

.about-section p {
  font-size: 15px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.value-item h3 {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 10px;
}

.value-item p {
  font-size: 15px;
  color: #666;
}

@media (max-width: 768px) {
  .about-hero h1 {
    font-size: 36px;
  }

  .about-section h2 {
    font-size: 24px;
  }
}
</style>
