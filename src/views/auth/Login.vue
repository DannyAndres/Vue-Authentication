<template>
  <div class="logo-component-container">
    <img class="logo-image" alt="Vue logo" src="@/assets/logo.png" />
    <h1>Login</h1>
    <div class="login-form-container">
      <div class="login-form">
        <transition name="fadeHeight" mode="out-in">
          <alert-box
            v-if="error != '' || (Array.isArray(error) && error.length != 0)"
            class="login-alert-box"
            type="danger"
            :title="
              Array.isArray(error) 
                ? ('There ' + (error.length == 1 ? 'was' : 'were') + ' ' + error.length + ' error' + (error.length == 1 ? '' : 's') + ' with your submission') 
                : 'There was an error with your submission'"
            :errors="error"
          />
        </transition>
        <input-text
          class="login-margin"
          placeholder="Email Address"
          @text="(value) => { form.email = value }"
          :error="errorEmail"
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
          @whenClick="submit()"
          :loading="!canSubmit"
        >
          Sign in
        </button-component>
      </div>
    </div>
    <div class="login-link-group">
      <router-link class="login-link" to="/">Inicio</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import InputText from '@/components/form/InputText.vue';
import InputPassword from '@/components/form/InputPassword.vue';
import InputCheckbox from '@/components/form/InputCheckbox.vue';
import AlertBox from '@/components/form/AlertBox.vue';
import Button from '@/components/form/Button.vue';

export default {
  name: 'login',
  components: {
    'input-text': InputText,
    'input-password': InputPassword,
    'input-checkbox': InputCheckbox,
    'button-component': Button,
    'alert-box': AlertBox,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false,
      },
      errorEmail: false,
      show_pass: false,
      error: '',
      canSubmit: true,
    };
  },
  methods: {
    ...mapActions('authentication', ['login']),
    validateEmail: (email) => {
      const regex = /\S+@\S+\.\S+/;
      return regex.test(email);
    },
    submit() {
      if (!this.canSubmit) {
        return;
      }
      // Validation
      this.setError();
      if (!this.validateEmail(this.form.email)) {
        this.setError('You have entered an invalid email address!');
        return;
      }
      
      // Login Call
      this.canSubmit = false;
      this.login({
        username: this.form.email,
        password: this.form.password
      })
        .then(() => {
          this.$router.replace('home');
        })
        .catch(() => {
          this.setError('There was an error with your account!');
        })
        .finally(() => {
          this.canSubmit = true;
        });
    },
    setError(error) {
      if (!error) {
        this.error = [];
      } else {
        this.error.push(error);
      }
    }
  },
  watch: {
    'form.email'() {
      if (this.form.email != '') {
        this.errorEmail = !this.validateEmail(this.form.email);
      } else {
        this.errorEmail = false;
      }
    }
  }
};
</script>

<style scoped>
.logo-component-container {
  padding-left: 15px;
  padding-right: 15px;
}
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
.login-alert-box {
  margin-bottom: 1em;
}
.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: all 0.2s;
  max-height: 230px;
}
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>
