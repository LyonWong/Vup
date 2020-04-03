<template>
    <div class="sign-user">
        <div class="box">
            <div class="box-head">User</div>
            <div class="box-body">
                <table>
                    <tr>
                        <td>SN</td>
                        <td>{{profile.sn}}</td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{{info.name}}</td>
                        </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "sign-user",
    data() {
        return {
            profile: {},
            info: {}
        }
    },
    created() {
        this.$api.user.profile().then((res) => {
            this.profile = res.data
            this.info = res.data.info
        })
    }
}
</script>