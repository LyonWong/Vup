<template>
  <div class="sign-password box">
    <div class="box-head">Sign In</div>
    <div class="box-body">
      <div class="form">
        <div class="box-row">
          <label for="identity">Identity</label>
          <input id="identity" v-model="identity" />
        </div>
        <div class="box-row">
          <label for="password">Password</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div class="box-row hint hint-error" v-if="message">
          {{message}}
        </div>
        <div class="box-row">
          <router-link to="/sign/forget" class="a-sign-vice">forget</router-link>
          <button class="btn-sign-primary" @click="commit">commit</button>
        </div>
      </div>
    </div>
    <div class="box-foot"></div>
  </div>
</template>

<script>
export default {
  name: "sign-password",
  data() {
    return {
      identity: null,
      password: null,
      message: null
    };
  },
  created() {
    console.info(this.$config.env);
  },
  methods: {
    commit() {
      this.$api.sign.passwordIn(this.identity, this.password).then(() => {
        this.$router.push('/sign/user')
      }).catch(res => {
        this.message = res.message
      });
    }
  }
};
</script>