<template>
  <div class="contact">
    <section class="contact-hero">
      <h1>联系我们</h1>
      <p>我们很乐意听到您的意见</p>
    </section>

    <section class="contact-content">
      <div class="contact-container">
        <div class="contact-info">
          <h2>联系信息</h2>
          <div class="info-item">
            <h3>邮箱</h3>
            <p><a href="mailto:hello@persephone.bio">hello@persephone.bio</a></p>
          </div>
          <div class="info-item">
            <h3>电话</h3>
            <p><a href="tel:+1-800-PERSEPHONE">1-800-PERSEPHONE</a></p>
          </div>
          <div class="info-item">
            <h3>地址</h3>
            <p>
              Persephone Biosciences<br>
              San Francisco, CA 94105<br>
              United States
            </p>
          </div>
        </div>

        <div class="contact-form">
          <h2>发送消息</h2>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">姓名</label>
              <input v-model="form.name" id="name" type="text" required />
            </div>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input v-model="form.email" id="email" type="email" required />
            </div>
            <div class="form-group">
              <label for="message">消息</label>
              <textarea v-model="form.message" id="message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">发送</button>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const successMessage = ref('')

const handleSubmit = () => {
  successMessage.value = '感谢您的消息！我们会尽快回复。'
  form.value = { name: '', email: '', message: '' }
  setTimeout(() => {
    successMessage.value = ''
  }, 3000)
}
</script>

<style scoped>
.contact {
  width: 100%;
}

.contact-hero {
  background: #f5f5f7;
  padding: 100px 20px;
  text-align: center;
}

.contact-hero h1 {
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 20px;
}

.contact-hero p {
  font-size: 21px;
  color: #666;
}

.contact-content {
  padding: 80px 20px;
}

.contact-container {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}

.contact-info h2,
.contact-form h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
}

.info-item {
  margin-bottom: 40px;
}

.info-item h3 {
  font-size: 15px;
  font-weight: 600;
  color: #0071e3;
  margin-bottom: 10px;
}

.info-item p {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
}

.info-item a {
  color: #0071e3;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d5d5d7;
  border-radius: 8px;
  font-family: inherit;
  font-size: 15px;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0071e3;
  box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
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

.success {
  color: #34c759;
  font-size: 14px;
  margin-top: 15px;
}

@media (max-width: 768px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-hero h1 {
    font-size: 36px;
  }
}
</style>
