var vm = new Vue({
    el: "#app",
    data: function() {
        return {
            list: [],
            expand: false,
            useTransition: false,
            domHeight: "0px",
        }
    },
    mounted: function() {
        // this.list = new Array(Math.round(Math.random() * 5 + 5)).fill('').map((item, index) => index + 1)
        for (var i = 0; i < Math.floor(Math.random() * 5 + 5); i++){
            this.list.push(i);
        }
    },
    computed: {
        className: function() {
            if (this.useTransition) {
                return "use-transition";
            } else {
                return "";
            }
        }
    },
    methods: {
        toggleExpand: function () {
            this.expand = !this.expand;
            this.useTransition = true;
            if (this.expand) {
                this.domHeight = "0px";
            } else {
                this.domHeight = this.$refs["container"].clientHeight + "px";
            }
            this.$nextTick(function() {
                if (vm.expand) {
                    vm.domHeight = vm.$refs["container"].scrollHeight + "px";
                } else {
                    vm.domHeight = "0px";
                }
                // It's failed on Vue 2.6.11, but can work with a setTimeout
                // setTimeout(function () {
                //     if (vm.expand) {
                //         vm.domHeight = vm.$refs["container"].scrollHeight + "px";
                //     } else {
                //         vm.domHeight = "0px";
                //     }
                // })
            });
        },
        handleTransitionEnd: function() {
            this.useTransition = false;
            if (this.expand) {
                this.domHeight = "auto";
            } else {
                this.domHeight = "0px";
            }
        }
    }
})