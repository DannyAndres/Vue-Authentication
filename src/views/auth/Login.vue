<template>
  <div>
    <img class="logo-image" alt="Vue logo" src="@/assets/logo.png" />
    <h1>Login</h1>
    <div class="login-form-container">
      <form ref="form" class="login-form" @submit.prevent="login()">
        <input-text
          class="login-margin"
          placeholder="Email Address"
          @email="(value) => { form.email = value }"
        />
        <input-password
          placeholder="Password"
          @password="(value) => { form.password = value }"
        />
        <div class="login-remember">
          <div class="login-checkbox">
            <input-checkbox
              placeholder="Remember me"
              @checkbox="(value) => { form.remember = value }"
            />
          </div>
          <div class="login-forgot">
            <router-link class="login-link" to="/forgot"
              >Forgot your password?</router-link
            >
          </div>
        </div>
        <button-component
          @whenClick="() => $refs.form.submit()"
        >
          Sign in
        </button-component>
      </form>
    </div>
    <div class="login-link-group">
      <router-link class="login-link" to="/">Inicio</router-link>
    </div>
  </div>
</template>

<script>
import InputText from '@/components/form/InputText.vue';
import InputPassword from '@/components/form/InputPassword.vue';
import InputCheckbox from '@/components/form/InputCheckbox.vue';
import Button from '@/components/form/Button.vue';

export default {
  name: 'login',
  components: {
    'input-text': InputText,
    'input-password': InputPassword,
    'input-checkbox': InputCheckbox,
    'button-component': Button
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      show_pass: false,
    };
  },
  methods: {
    login() {
      console.log('log in try', this.form);
    },
  },
};
</script>

<style scoped>
.login-link-group {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.login-link {
  cursor: pointer;
  color: #e5e7eb;
  text-decoration: underline;
}
.login-link:not(:last-child) {
  margin-right: 1em;
}
.login-form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  max-width: 322px;
  width: 100%;
}
.login-form .login-margin {
  margin-bottom: 1em;
}
.logo-image {
  max-height: 80px;
  margin-bottom: 1em;
}
.login-remember {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.login-remember div {
  width: 50%;
}
.login-checkbox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.login-forgot {
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
}
</style>
