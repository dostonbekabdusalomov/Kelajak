<template>
  <section class="section" id="contact">
    <div class="contact">
      <div class="container">
        <div class="contact-inner">
          <h2 class="title">Bog'lanish</h2>
          <p class="subtitle">
            Savollaringiz bo‘lsa yoki hamkorlik qilmoqchi bo‘lsangiz, biz bilan
            bog‘laning.
          </p>

          <form class="contact-form">
            <input type="text" placeholder="Ismingiz" required />
            <input type="email" placeholder="Emailingiz" required />
            <textarea placeholder="Xabaringiz" rows="5" required></textarea>
            <button type="submit" class="btn btn--primary">Yuborish</button>
          </form>

          <div class="contact-info">
            <p><strong>Email:</strong> <a href="mailto:info@kelajak.uz" target="_blank">info@kelajak.uz</a></p>
            <p>
              <strong>Telefon:</strong
              ><a href="tel: +998 77 712 22 24"> +998 77 712 22 24</a>
            </p>
            <div class="socials">
              <a href="https://t.me/abiizz770" target="_blank">Telegram</a>
              <a href="https://instagram.com/abiizz770" target="_blank"
                >Instagram</a
              >
              <a href="/" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.section {
  padding: 80px 20px;
}

.contact-inner {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  .title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .subtitle {
    font-size: 16px;
    color: #555;
    margin-bottom: 40px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 40px;

    input,
    textarea {
      padding: 12px 15px;
      border-radius: 8px;
      border: 1px solid #ccc;
      font-size: 14px;
      width: 100%;
      resize: none;
    }

    button {
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      background-color: #0052cc;
      color: white;
      font-weight: 600;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        background-color: #003d99;
      }
    }
  }

  .contact-info {
    font-size: 14px;
    color: #555;
    margin-top: 20px;

    .socials {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      gap: 15px;

      a {
        color: #0052cc;
        text-decoration: none;
        font-weight: 500;
        transition: 0.3s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .contact-inner {
    .contact-form {
      gap: 12px;
    }
  }
}
</style>
