<template>
  <div class="alert-box-container" :style="'background-color: ' + selected.color + '; color: ' + selected.text + ';'">
    <strong v-if="title">
      <svg v-if="type == 'danger'" class="alert-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>
      <svg v-if="type == 'success'" class="alert-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
      <svg v-if="type == 'warning'" class="alert-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      <svg v-if="type == 'info'" class="alert-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
      <span class="alert-box-title">{{ title }}</span>  
    </strong>
    <p v-if="errors && !Array.isArray(errors)">{{ errors }}</p>
    <ul class="alert-box-list" v-if="errors && Array.isArray(errors) && errors.length != 0">
      <li v-for="(error, errorIndex) in errors" :key="errorIndex">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    errors: {
      type: [String, Array],
      required: false
    },
  },
  data() {
    return {
      selected: {
        color: '',
        text: ''
      },
      styles: {
        warning: {
          color: '#fdfdea',
          text: '#7d4b25'
        },
        danger: {
          color: '#fdf2f2',
          text: '#a02929'
        },
        info: {
          color: '#35495e',
          text: '#D1D5DB'
        },
        success: {
          color: '#41b883',
          text: '#35495e'
        }
      }
    }
  },
  created() {
    let type = this.type;
    if (!(this.type == 'info' || this.type == 'success' || this.type == 'danger' || this.type == 'warning')) {
      type = 'info';
    }
    this.selected = {
      color: (this.styles[type] ? this.styles[type].color : this.styles['info'].color),
      text: (this.styles[type] ? this.styles[type].text : this.styles['info'].text)
    }
  },
  watch: {
    type() {
      let type = this.type;
      if (!(this.type == 'info' && this.type == 'success' && this.type == 'danger' && this.type == 'warning')) {
        type = 'info';
      }
      this.selected = {
        color: (this.styles[type] ? this.styles[type].color : this.styles['info'].color),
        text: (this.styles[type] ? this.styles[type].text : this.styles['info'].text)
      }
    }
  }
}
</script>

<style scoped>
.alert-box-container {
  padding: 14px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.alert-box-title, .alert-box-container ul {
  text-align: left;
}
.alert-box-container strong {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.alert-svg-icon {
  width: 25px;
  margin-right: 1em;
}
.alert-box-list {
  margin-bottom: 0px;
}
</style>